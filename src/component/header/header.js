import './header.css';
import {arrFromTo} from '../extension';
import homeLogo from '../../assets/homeLogo.png';
import { CiSearch } from "react-icons/ci";
import { useFormState } from 'react-dom'; 



const Form  = {
    Input({id = 'id', name = 'input'}) {
        return (
            <>
                <input type="text" id = {id}/>
                <label htmlFor={id}>{name}</label>
            </>
        )
    },
    CheckBox: () =>{
        return <input type="checkbox"/>
    }
}

const Home = () => {
    return(
        <a 
            className='home'
            href='#'
        >
            <img 
                className='logo'
                src={homeLogo}
            /> 
        </a>
        
    )
}

const navs = [
    {
        link: '#',
        name: 'Store',
        title: 'Store',
    },
    {
        link: '#',
        name: 'Library',
        title: 'Library',
    },
    {
        link: '#',
        name: 'About',
        title: 'About',
    },
    {
        link: '#',
        name: 'Contact',
        title: 'Contact',
    },  
    {
        link: '#',
        name: 'Help',
        title: 'Help',
    },
    
]

const NavBar = ({navs}) => {
    var n = 2;
    var len = navs.length;

    var subNav1 = arrFromTo(navs, 0, n);
    var subNav2 = arrFromTo(navs, n, len)
    return (
        <ul 
            className="navBar"
        >
            <Home />
            {subNav1.map( (nav, i) => 
                <li key={i}>
                    <a href={nav.link}>{nav.name}</a>
                </li>
                )
            }
            <li>
                <a href='#'>More</a>
                <ul className='more'>
                    {subNav2.map( (nav, i) => 
                        <li key={n + i}>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                        )
                    }
                </ul>
            </li>

        </ul>
    )
}


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
            <div className='notice'>

            </div>
            <div className='avatar'>
                <img src="https://randomuser.me/api/portraits/men/75.jpg" />
            </div>
        </div>
    )
}

const Header = () => 
{
    return (
        <div className="header">
            <NavBar navs={navs}/>
            <SearchBox />
            <Account />
        </div>
    )
}

export default Header;

