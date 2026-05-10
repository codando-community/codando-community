function SearchBar({search, setSearch}) {
    return (
        <div id="search-bar" className="search-bar">
            <input 
                type="text" 
                placeholder="Pesquise sua dúvida" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="faq-input"
            />
            <img src="/img/faq/pesquise-sua-duvida.svg" alt="lupa"className="search-icon" />
        </div>
    );
}

export default SearchBar;