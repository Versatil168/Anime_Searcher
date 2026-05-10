import type { AnimeResponse, Character } from "../interfaces/character.interface";
import { animeApi } from "../api/anime.api";


// En get-characters.action.ts
export const getCharacters = async (query: string): Promise<Character[]> => {
    const response = await animeApi<AnimeResponse>('/characters', {
        params: {
            q: query,
            limit: 20,
            order_by: 'favorites',
            sort: 'desc'
        }
    });

    // Filtro manual: Solo personajes que en su "about" mencionen Bleach 
    // o que tengan relación con la serie (esto ayuda a limpiar la basura)
    return response.data.data
        .map(character => ({
            mal_id: character.mal_id,
            name: character.name,
            images: character.images,
            about: character.about,
            favorites: character.favorites
        }));
}


//"Utilizo una instancia de Axios para la configuración global y
// paso los filtros mediante el objeto params. Esto me permite
//  mantener las URLs limpias, manejar la codificación de
// caracteres de forma automática y limitar los resultados
// para optimizar el rendimiento de la app".