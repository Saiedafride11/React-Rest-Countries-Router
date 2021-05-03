import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect( ()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
        // console.log(data);
        setCountries(data);
        })
        .catch(err => console.log(err))
    } ,[])
    return (
        <div>
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;