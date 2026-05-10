// BleachApp.tsx
import { SearchBar } from "./shared/SearchBar";
import { useCharacters } from "./hooks/useCharacters";
import { CharacterGrid } from "./components/CharacterGrid";

export const AnimeApp = () => {
    const { characters, isLoading, searchCharacters } = useCharacters();

    return (
        // Este div CON LA CLASE "app-wrapper" es CRUCIAL para el centrado
        <div className="app-wrapper">
            <div className="container">
                <h1>Anime Searcher</h1>

                <SearchBar onQuery={searchCharacters} />

                <CharacterGrid
                    characters={characters}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};