import React, {useState, useEffect} from "react"
import {BsSearch} from 'react-icons/bs'

const SearchFilter = ({query, setQuery, countries, setCountries}) => {



    return (
        <div className="searchFilter mt-5">
            <div className="searchBox">
                <input type="search"
                onChange={(e)=> setQuery(e.target.value)}
                placeholder="Search for a country..."/>
                <button>
                    <BsSearch/>
                </button>
            </div>
            <select>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

export default SearchFilter