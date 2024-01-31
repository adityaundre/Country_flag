import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';
import { Container,Grid } from '@mui/material';

function App() {

  const[countries,setCountries]=useState([])

  const call= async()=>{
    try{
      let res= await axios.get("https://restcountries.com/v3.1/all")
      console.log(res.data)
      setCountries(res.data)

    }
    catch(e){
      console.error(e)
    }

  }

  useEffect(()=>{
    call();
  },[])


  return (
    <div className="container">
    
      {countries.map((country)=>(
        <div className="card" key={country.cca3}>

        <img src={country.flags.svg} alt={country.name.common} className="image"/>

        <h2>{country.name.common}</h2>
        
        </div>
        
      ))}
        
      

    </div>
  );
}

export default App;
