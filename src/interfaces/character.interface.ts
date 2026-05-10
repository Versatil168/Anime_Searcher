export interface Character {
    mal_id: number;      // ID único
    name: string;        // Nombre del personaje
    images: {
        jpg: { image_url: string }
    };
    about: string;       // Biografía/Historia
    favorites: number;   // Popularidad
}

// Esta es la interfaz para la respuesta de la API (lo que viene de 
// Axios)
export interface AnimeResponse {
    data: Character[];
}