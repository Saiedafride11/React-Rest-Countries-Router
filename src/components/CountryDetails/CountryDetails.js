import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryInfo from '../CountryInfo/CountryInfo';

const CountryDetails = () => {
    const {CountryName}= useParams()
    const [countries, setCountries] = useState([])
    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/name/${CountryName}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCountries(data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>CountryName: {CountryName}</p>

            {/* {
                countries.map(country => <li>{country.name}</li>)
            } */}

            {
                countries.map(country => <CountryInfo country={country} key={country.alpha3Code}></CountryInfo>)
            }

            
            
        </div>
    );
};

export default CountryDetails;