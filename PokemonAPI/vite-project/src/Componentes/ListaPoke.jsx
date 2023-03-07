import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import '/src/Style/mapPoke.css';
import '/src/Style/Fundo.css';
import { Routes, Route, Outlet,Link } from "react-router-dom"
import '/src/Style/CardPokemon.css';


function ListaPoke(){
    
    const [pokemons, setPokemons] = useState([]);
    useEffect(() =>{
        getPokemons();
    })

    const getPokemons = () => {
    var endpoints = [];
    for (var id=1; id<50; id++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };
      
    return (
        < >
        
        <div className="corpo">
          
            
            <div className="mapPoke">
            {pokemons.map((pokemon, id) => (
                    <div className="card" id={id}>
                        <h2 className="nomePokemon">{pokemon.data.name}</h2>
                        <Link to={`/listagem/${id}`} state={{id}}><img className="image"  src={pokemon.data.sprites.other['official-artwork'].front_default} alt="CardPokemon"/></Link>
                    </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default ListaPoke
