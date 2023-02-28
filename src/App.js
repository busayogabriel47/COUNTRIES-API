import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';
import {Routes, Route} from 'react-router-dom'
import Countries from './components/countries';
import Navbar from './components/navbar';
import SearchFilter from './components/searchfilter';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchQuery] = useState(["capital", "name"])
  const [query, setQuery] = useState("");

const fetchCountries = async() => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json()
  setCountries(countries)
}

  useEffect(()=> {
    fetchCountries();
  }, [])

  //Delete data function
  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country) => country.numericCode !== numericCode);
    setCountries(newCountry)
}

  return (
    <div className="App">
        <Navbar/>
        <SearchFilter setQuery={setQuery} countries={countries} query={query}/>
        <Routes>
          <Route path='/' element={<Countries query={query} countries={countries} searchQuery={searchQuery} setCountries={setCountries}/>}/>
          <Route path='/countries/:name' element={<Country/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
