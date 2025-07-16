import './leftBar.css'
import { arrFromTo } from '../../extension';
import { IoLogoNpm } from "react-icons/io";

// Home
const Home = () => {
    return(
        <a 
            className='home'
            href='#'
        >
            <IoLogoNpm className='logo'/>
        </a>
        
    )
};

//nav bar
// navs list
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
// nav bar
const NavBar = ({navs}) => {
    var n = 2;
    var len = navs.length;
    var subNav1 = arrFromTo(navs, 0, n);
    var subNav2 = arrFromTo(navs, n, len)
    return (
        <ul 
            className="navBar"
        >
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

// total right bar
const LeftBar = () => {
    return (
        <div className='rightBar'>
            <Home />
            <NavBar navs={navs}/>
        </div>
    )
}

//export
export default LeftBar;

export {
    Home,
    NavBar,
};

