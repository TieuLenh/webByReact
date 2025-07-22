import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
    return (
        <div className='searchBox'>
            <input 
                type='text'
                placeholder='search'
                id='search'
            />
            <button 
                className='btn'
                type='commit'
            >
                <CiSearch className='searchIcon'/>
            </button>
        </div>
    )
}

export default SearchBox;