import { useEffect, useState } from "react";
import { Routes, Route, Outlet,Link } from "react-router-dom"
import axios from "axios";
import Navbar from "../Componentes/Navbar";
import '/src/Style/Navbar.css';
import ListaPoke from "../Componentes/ListaPoke";
import { useLocation } from "react-router-dom"
import '/src/Style/CardPokemon.css';
import '/src/Style/Lista.css';


function Listagem({id}){
    const location = useLocation()
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
       
    return(
        < >
        
        <div className="corpo">
            
            <div className="geral">
            {pokemons.map((pokemon, id) => (
                    <div className="cardOUT" id={id}>
                        <div className="nome">{pokemons[location.state.id].data.name}</div>
                        <img className="foto" src={pokemons[location.state.id].data.sprites.other['official-artwork'].front_default}/>
                        <div className="status">
                        <div>Altura: {pokemons[location.state.id].data.height}</div>
                        <div>Peso: {pokemons[location.state.id].data.weight}</div>
                        <div>Tipo 1: {pokemons[location.state.id].data.types[0].type.name}</div>
                        <div>Tipo 2: {pokemons[location.state.id].data.types[1]?.type.name || <> Não possui</>}</div>
                        <div>Habilidadde: {pokemons[location.state.id].data.abilities[0].ability.name}</div>
                        </div>
                    </div>
            ))} 
        </div>
        </div>
        </>
)}
export default Listagem