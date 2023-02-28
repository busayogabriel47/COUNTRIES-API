import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const Country = () => {

    const [country, setCountry] = useState([]);
    const {name} = useParams();
    console.log(name)

    useEffect(()=> {
        const fetchCountry = async() => {
            const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const countryData = await resp.json();
            setCountry(countryData);
        }

        fetchCountry()
    }, [])

    return(
        <>
        <div className='container'>
            <Link className='btn btn-md mt-4 bg-dark text-white' to="/">
                Back Home</Link>

                {country.map((country, index)=> {
                    const {numericCode, flags, name, 
                    nativeName, population, region, subregion,
                topLevelDomain, currencies, languages, border, capital} = country 
                
                return(
                    <div class="card mt-5 mb-3">
                    <div class="row g-0">
                        <div class="col-md-6">
                        <img src={flags.png} class="w-100 rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                            <h1 class="card-title">{name.common}</h1>
                            <div className='detailCon'>
                                <div>
                                    <h5>Population: <span>{population}</span></h5>
                                    <h5>Region: <span>{region}</span></h5>
                                    <h5>Capital: <span>{capital}</span></h5>
                                </div>

                                <div>
                                    <h5>Native name: <span>{nativeName}</span></h5>
                                    <h5>Nuric Code: <span>{numericCode}</span></h5>
                                    <h5>Capital: <span>{capital}</span></h5>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                )
                })}
        </div>
        </>
    )
}

export default Country