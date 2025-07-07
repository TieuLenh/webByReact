const navs = [
    {name: 'Store'},
    {name: 'Library'},
    {name: 'More'}
]

// Home
const Home = () => 
(<div>
    <a href="#">Home</a>
</div>);

// Navigation
const Nav = () =>
(<ul id = "nav">
    {navs.map((navLi, index) => 
        <li key={index}>{navLi.name}</li>
    )}
</ul>);

// avatar
const Avatar = () => 
(<div className="avatar">
    <img src="https://randomuser.me/api/portraits/men/75.jpg"/>
</div>);

// header
const Header = () =>
(<div id="header">
    <Home/>
    <Nav/>
    <Avatar/>
</div>);

ReactDOM.createRoot(document.getElementById('root')).render(<Header/>);
