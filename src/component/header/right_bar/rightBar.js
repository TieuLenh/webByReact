import './rightBar.css'
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
            <button className='btn b1'>
                <FaRegMessage className='mess' />
            </button>

            <button className='avatar'>
                <img src="https://randomuser.me/api/portraits/men/75.jpg" />
            </button>
        </div>
    )
}

const RightBar = () => {
    return (
        <div className='rightBar'>
            <SearchBox />
            <Account />
        </div>
    )
}

export default RightBar;