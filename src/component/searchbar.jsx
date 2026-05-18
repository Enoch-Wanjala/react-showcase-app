import style from "./searchbar.module.css";

// this is our searchBar component
// receives onSearch as a prop
function SearchBar({onSearch}) {
    
    return (
        <>
        <div className={style.searchContainer}>
                <input type="text" placeholder="Search..." className={style.searchInput} onChange={(e) => onSearch(e.target.value)}/>
        </div>
        </>
    )

}

export default SearchBar;
