import '/src/Style/home.css';


function Home(){

    return(
        <div className="Geral">
            <h1 className='Titulo'>Sobre API</h1>
            Bem vindo ao PokemonAPI-React.<br/>
            A API usada foi a <a className='link'  href="https://pokeapi.co/">PokeAPI</a>.<br/>
            <p className='oi'>O intuito desse projeto é
            ver os cards dos primeiros 50 pokémons <br/>
            pegados em sequência pelo seu id e <br/>
            mostrar seus status como altura, peso, <br/>
            tipo(s) e habilidade.</p>
        
        </div>
    )
}
export default Home