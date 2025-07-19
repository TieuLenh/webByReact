import './rightBar.css'
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';

// left bar
const SearchBox = () => {
    const handel = (e) => {
        if(e.which === 13) console.log(e.target.value)
    }
    return (
        <div className='searchBox'>
            <input 
                type='text'
                placeholder='search'
                id='search'
                onKeyDown={handel}
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

const Account = () => {
    const [display, setDisplay] = useState(false)
    const handleSildebar = () => {
        setDisplay(prev => !prev)
    }
    return (
        <div className='account'>
            <button 
                className='btn b1'
                onClick={handleSildebar}
            >
                <FaRegMessage className='mess' />
            </button>

            <button 
                className='avatar'
                
            >
                <img src="https://randomuser.me/api/portraits/men/75.jpg" />
            </button>
            <div 
                className='sidebar'
                style= {{display: display?'flex':'none'}}
            >
                ok test
            </div>
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