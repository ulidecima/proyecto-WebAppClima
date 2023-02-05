import React from "react";

const CardClima = ({ clima }) => {
    return (
        <div className="card-container">
            <div></div>
            <div className="sombreado card-clima">
                <div className="container">
                    <div>
                        <span>
                            {clima ? clima.name + " " + clima.sys.country : "-"}
                        </span>
                    </div>
                    <div className="container-imagen">
                        <img alt={'clima'} src={`icons/${clima ? clima.weather[0].icon : "unknown"}.png`} />
                        <div className="container-parametros-tempyhora">
                            <h1>{clima ? Math.round(clima.main?.temp - 273.15) : ""}°C</h1>
                            <span>{clima ? clima.timezone : "-"}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>
                            {clima ? clima.weather[0].description : "-"}
                        </span>
                    </div>
                    <div className="container-parametros">
                        <span className="parametro">Feels Like:</span>
                        <span className="parametro-valor">
                            {clima ? (clima.main?.feels_like - 273.15).toFixed(2) : "-"} °C
                        </span>
                    </div>
                    <div className="container-parametros">
                        <span className="parametro">Humidity: </span>
                        <span className="parametro-valor">
                            {clima ? clima.main?.humidity : "-"} %</span>
                    </div>
                    <div className="container-parametros">
                        <span className="parametro">Pressure: </span>
                        <span className="parametro-valor">
                            {clima ? clima.main?.pressure : "-"} hPs</span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default CardClima