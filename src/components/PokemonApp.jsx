import { useState } from "react"
import { usePokedex } from "../hooks/usePokemon"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"

export const PokemonApp = () => {
    const {handleGetPokemon, iPokedex} = usePokedex()

    return (
        <>
        <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
        <ContenedorPokemon iPokedex={iPokedex}/>
        </>
    )
}