import React from "react";

const CardClima = ({ clima }) => {
    return (
        <div>
            <div>
                <div>
                    <p>
                        {clima ? clima.name + " " + clima.sys.country : "-"}</p>
                    <p>
                        {clima ? clima.weather[0].description : "-"}</p>
                </div>
                <img alt={'clima'}
                    src={`icons/${clima ? clima.weather[0].icon : "unknown"}.png`} />
            </div>
            <div>
                <h2>
                    {clima ? Math.round(clima.main?.temp - 273.15) : ""}°C</h2>
                <div>
                    <div>
                        <span>Details</span>
                    </div>
                    <div>
                        <span>Feels Like:</span>
                        <span>
                            {clima ? (clima.main?.feels_like - 273.15).toFixed(2) : "-"} °C
                        </span>
                    </div>
                    <div>
                        <span>Humidity: </span>
                        <span>
                            {clima ? clima.main?.humidity : "-"} %</span>
                    </div>
                    <div>
                        <span>Pressure: </span>
                        <span>
                            {clima ? clima.main?.pressure : "-"} hPs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardClima