import { useState } from 'react'
import { fetchClima } from './api'
import CardClima from './components/CardClima'
import './App.css'

function App() {
  const [ciudad, setCiudad] = useState('');
  const [clima, setClima] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const clima = await fetchClima(ciudad, setError);
      setClima(clima);
    } catch (error) {
      setError("NO SE HA PODIDO ENCONTRAR LA CIUDAD INDICADA");
    }
  };

  return (
    <div>
      <nav>
        <h1>clima App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ciudad..."
            value={ciudad}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
      </nav>

      {error ? (
        <p>{error}</p>
      ) : (
        <CardClima clima={clima} />
      )}
    </div>
  );
}

export default App;
