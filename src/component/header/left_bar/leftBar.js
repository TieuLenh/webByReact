import './leftBar.css'
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

// left bar
const SearchBox = () => {
    const search = () => {
        var searchObj = document.getElementById('search')
        if(searchObj.value) console.log(searchObj.value)
    }
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
                onClick={search}
            >
                <CiSearch className='searchIcon'/>
            </button>
        </div>
    )
}

const Account = () => {
    return (
        <div className='account'>
            <FaRegMessage className='mess' />
            <div className='avatar'>
                <img src="https://randomuser.me/api/portraits/men/75.jpg" />
            </div>
        </div>
    )
}

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <SearchBox />
            <Account />
        </div>
    )
}

export default LeftBar;