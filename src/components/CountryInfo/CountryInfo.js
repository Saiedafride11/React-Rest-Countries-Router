import React from 'react';
import './CountryInfo.css'

const CountryInfo = (props) => {
    const {flag, name, capital, population, languages} = props.country;
    return (
        <div className="CountryInfo">
            <img src={flag} alt=""/>
            <h4>Name: {name}</h4>
            <p><small>CapitalCity: {capital}</small></p>
            <p><small>Population: {population}</small></p>
            <p><small>Languages: {languages[0].name}</small></p>
        </div>
    );
};

export default CountryInfo;