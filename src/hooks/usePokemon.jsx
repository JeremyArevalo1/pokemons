import { useState } from "react"
import { reqPokemon } from "../service/pokemon"

export const usePokemon = () => {
    const [iPokedex, setIPokedex] = useState([])

    const handleGetPokemon = async(pokemon, e) =>{
        e.preventDefault()

        await reqPokemon(pokemon).then((result) => {
            setIPokedex(result)
        })
    }

    return {
        handleGetPokemon,
        iPokedex
    }
}
