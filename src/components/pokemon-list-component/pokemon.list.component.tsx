import { useEffect, useState, ChangeEvent } from 'react';
// Utils
import { getData } from "../../utils/data.utils";
import { GetResult, Pokemon } from "../../redux/types/pokemons.types";
// Redux Saga
import { useSelector, useDispatch } from "react-redux";
// TS Types
import { RootState } from "../../redux/types/pokemons.types"

import PokemonsActions from "../../redux/actions/pokemonsActions"

function PokemonList(){
    
    const pokemonsData = useSelector((state: RootState) => state.rootState.pokemonList)
    const dispatch = useDispatch();

    const [pokemons, setPokemons] = useState<[Pokemon]>()

    const [filteredPokemons, setFilteredPokemons] = useState<[Pokemon]>();
    const [searchBox, setSearchBox] = useState("");



    useEffect(() => {  
        dispatch(PokemonsActions.getPokemons())
    }, []);

    useEffect(() => {
        setPokemons(pokemonsData.results)
    },[pokemonsData])

    useEffect(() => {
        const newFilteredPokemons = pokemons?.filter((pokemon: Pokemon) => {
            return pokemon.name.toLocaleLowerCase().includes(searchBox);
        })
        setFilteredPokemons(newFilteredPokemons);
    },[pokemons])

    console.log(pokemonsData)
    console.log(pokemons)

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchBoxString = event.target.value.toLocaleLowerCase();
        setSearchBox(searchBoxString);
    }

    return (
        <section>
            <h2>
                Pokemons
            </h2>
            <form>
                <input type="text" name="searchBox" onChange={onSearchChange}/>
            </form>
            <div>
                <ul>
                    {pokemons ? pokemons.map((pokemon, index) => {
                        return <li key={index}>{pokemon.name}</li>
                    }) : "Loading"}
                </ul>
            </div>
        </section>
    )
}

export default PokemonList;