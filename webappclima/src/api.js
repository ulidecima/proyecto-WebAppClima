import axios from "axios";

export async function fetchClima(ciudad, setError) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=ccabe299a2c013ea9d5e29ff4f041f2e`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        setError("CIUDAD NO ENCONTRADA");
        return error;
    }
}