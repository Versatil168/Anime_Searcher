import { useEffect, useState } from "react";

interface SearchBarProps {

    placeholder?: string;

    onQuery: (query: string) => void

}

export const SearchBar = ({ placeholder = "Buscar cualquier personaje", onQuery }: SearchBarProps) => {

    const [query, setQuery] = useState('')



    useEffect(() => {

        // Si el query está vacío, no busques nada para evitar 
        // parpadeos innecesarios
        if (query.trim().length === 0) return;


        const timeoutId = setTimeout(() => {
            onQuery(query);

        }, 800);

        // onQuery(query);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query])



    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    }
    const handleSearchWithEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }


    return (
        <div className="search-container">

            <input type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleSearchWithEnter}
            />
            <button
                onClick={handleSearch}
            >Buscar</button>
        </div>
    )
}
