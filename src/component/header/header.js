import './header.css';
import {arrFromTo} from '../extension';

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

const navs = [
    {
        link: '#',
        name: 'Home',
        title: 'Home',
    },
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
    var n = 3;
    var len = navs.length;

    var subNav1 = arrFromTo(navs, 0, n);
    var subNav2 = arrFromTo(navs, 3, len)
    return (
        <ul 
            className="navBar"
        >
            {subNav1.map( (nav, i) => 
                <li key={i} title={nav.title}>
                    <a href={nav.link}>{nav.name}</a>
                </li>
                )
            }
            <li title='more'>
                <a href='#'>More</a>
                <ul className='more'>
                    {subNav2.map( (nav, i) => 
                        <li key={i} title={nav.title}>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                        )
                    }
                </ul>
            </li>

        </ul>
    )
}

const Header = () => 
{
    
    return (
        <div className="header">
            <NavBar navs={navs}/>
        </div>
    )
}



export default Header;

