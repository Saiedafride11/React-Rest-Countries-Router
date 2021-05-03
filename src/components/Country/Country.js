import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';


const Country = (props) => {
    const {name, flag} = props.country
    
    const history = useHistory();
    const handleClick = (CountryName) => {
        const url = `/name/${CountryName}`
        history.push(url)
        // history.push(`/name/${CountryName}`);
    }
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h4>Country Name: {name}</h4>

            {/* <Link to={`/name/${name}`}>
                <button>Full Details</button>
            </Link> */}

            <button onClick={() => handleClick(name)}>Full Details</button>
        </div>
    );
};

export default Country;