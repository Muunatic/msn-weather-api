declare class WeatherMSN {
    private readonly lang: string;
    private readonly degree: string;

    /**
     * 
     * @param {string} lang result language (ISO 639-1: en, id, ja)
     * @param {string} degree degree type (C, F)
     */
    constructor(lang: string, degree: string);

    /**
     * @async
     * @public
     * @param {string} search location name
     * @returns {Promise<WeatherData>}
     */
    getCurrentData(search: string): Promise<WeatherData>;

    /**
     * @async
     * @public
     * @param {string} search location name
     * @param {number} days many day from today
     * @returns {Promise<ForecastData>}
     */
    getForecastData(search: string, days: number): Promise<ForecastData>;
}

export default WeatherMSN;
