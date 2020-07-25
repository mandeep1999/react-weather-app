import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/ui/Search';
import Header from './components/ui/Header';
import Weather from './components/ui/Weather';
import Axios from 'axios';

let key;
if (process.env.NODE_ENV !== 'production') {
  key = process.env.REACT_APP_KEY;
} else {
  key = process.env.KEY;
}

function App() {
  const [item, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const onQuery = (q) => {
    setQuery(q);
  };
  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`;
    const getWeather = async () => {
      if (query !== '') {
        setIsLoading(true);
        const result = await Axios(url);
        if (result.data.cod !== 200) {
          setItems([]);
        } else {
          setItems(result.data);
          setIsLoading(false);
        }
      }
    };
    getWeather();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search onQuery={onQuery} />
      <Weather item={item} isLoading={isLoading} />
    </div>
  );
}

export default App;
