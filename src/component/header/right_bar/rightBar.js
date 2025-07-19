import './rightBar.css'
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';

// left bar
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

const Account = () => {
    const [display, setDisplay] = useState(false)
    const handleSildebar = () => {
        setDisplay(prev => !prev)
    }

    const [chat, setChat] = useState()
    const change = (e) => {
        setChat(e.target.value)
    }

    const [chatList, setchatList] = useState([])
    const submit = (e) => {
        setchatList(prev => {
            var result = [...prev, chat];
            return result
        })
        setChat('')
    }
    return (
        <div className='account'>
            <button 
                className='btn b1'
                onClick={handleSildebar}
            >
                <FaRegMessage className='chat' />
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
                <div className='chatContent'>
                    <div className='chatHeader'>
                        <input
                            onChange={change}
                            value={chat}
                        />
                        <button onClick={submit}>submit</button>
                    </div>
                    <ul>
                        {chatList.map( (val, index) => <li key={index}>{val}</li>)}
                    </ul>
                    
                </div>
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