import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


const Countries = ({countries, searchQuery, query, setCountries}) => {

    //Delete data function
    /*const removeCountry = (numericCode) => {
        const newCountry = countries.filter((country) => country.numericCode !== numericCode);
        setCountries(newCountry)
    }*/

/*const keys = ["name", "capital", "region"];

const search = (countries) => {
    return countries.filter(
        (item)=> 
        keys.some((key) => item[key].toLowerCase().includes(query))
    )
}*/

    return (
        <>
        <div className="container">
            <div className="row mt-5">
                {countries.filter(country => country.name.common.toLowerCase().includes(query)).map((country)=> {
                    const {numericCode, name, population, flags, capital, region, } = country;

                    return(
                        <div className="col-12 col-md-3 mb-5" key={numericCode}>
                            <div class="card" style={{width: '16rem'}}>
                            <img src={flags.png} class="card-img-top" alt="..." height="150px"/>
                            <div class="card-body">
                                <h3 class="card-title countryName">{name.common}</h3>
                                <h5>Population: <span>{population}</span></h5>
                                <h5>Region: <span>{region}</span></h5>
                                <h5>Capital: <span>{capital}</span></h5>
                                <div className='detailCom'>
                                    <Link className='btn btn-md bg-dark text-white' to={`/countries/${name.common}`}>Country details</Link>
                                    <button className='btn btn-md'>Remove country</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        </>
    )
}

export default Countries