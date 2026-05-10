import type { Character } from "../interfaces/character.interface";

interface Props {
    characters: Character[];
    isLoading: boolean;
}

export const CharacterGrid = ({ characters, isLoading }: Props) => {

    return (
        <div className="container"> {/* Envolvemos en el container para asegurar el centrado */}

            {/* 1. Estado de Carga: Ahora no bloquea toda la pantalla */}
            {isLoading && (
                <h2 className="loading-text">Abriendo portal a la Soul Society...</h2>
            )}

            <div className="character-grid">

                {/* 2. Si no hay personajes y terminó de cargar */}
                {!isLoading && characters.length === 0 && (
                    <p className="loading-text">No se encontraron personajes. ¡Intenta con otro nombre!</p>
                )}

                {/* 3. Mapeo de los personajes */}
                {characters.map((character) => (
                    <div key={character.mal_id} className="character-card">

                        <div className="card-image-container">
                            <img
                                src={character.images.jpg.image_url}
                                alt={character.name}
                                loading="lazy" // Optimización: carga la imagen solo cuando se ve
                            />
                        </div>

                        <div className="card-content">
                            <h3>{character.name}</h3>

                            <div className="character-stats">
                                {character.about ? (
                                    character.about
                                        .split('\n')
                                        .filter(line => line.trim().length > 0)
                                        .slice(0, 4)
                                        .map((line, index) => (
                                            <span key={index} className="stat-line">
                                                {line.replace(/&gt;/g, '→').trim()}
                                            </span>
                                        ))
                                ) : (
                                    <span className="stat-line">Sin datos disponibles</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};