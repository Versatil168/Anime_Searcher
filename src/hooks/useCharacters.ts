import { useState } from "react";
import type { Character } from "../interfaces/character.interface";
import { getCharacters } from "../actions/get-characters.action";

export const useCharacters = () => {


    // 1. Estado para guardar los personajes
    const [characters, setCharacters] = useState<Character[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    const searchCharacters = async (query: string) => {


        if (query.length === 0) return;
        setIsLoading(true); // Inicia la carga

        try {
            const data = await getCharacters(query);
            setCharacters(data); // Actualiza el estado con los personajes obtenidos
        }
        catch (error) {

            console.error("Error fetching characters:", error);
        }

        finally {
            setIsLoading(false); // Finaliza la carga
        }

    }

    return {
        characters,
        isLoading,
        searchCharacters
    };
};
