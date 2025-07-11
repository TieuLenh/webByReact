var objs = [
    {
        link: '#', //'https://youtu.be/cJOkT28U4V4?si=N43i6bDHZMFr0OlN',
        image: "https://i.ytimg.com/vi/cJOkT28U4V4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCpnUQTmQOa4zgKz7BWgmPEIPulSQ", 
        name: 'obj1', value: 0, 
    },
    { 
        link: 'https://youtu.be/WCazPUimdGc?si=ImCam5ZuRAuBEd7H',
        image: "https://i.ytimg.com/vi/WCazPUimdGc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBWdDcorGZzP48dhWdEgUpiqLBIAg", 
        name: 'obj2', value: 5, 
    },
    { 
        link: null,
        image: "https://i.ytimg.com/vi/isMS4918XqY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLARDUg84wa6u8AEAmemdIUeSp8GDw", 
        name: 'obj3', value: 110, 
    },
]

const Form  = {
    Input() {
        return <input type="text"/>
    },
    CheckBox: () =>{
        return <input type="checkbox"/>
    }
}

const Nav = () => {
    return (
        <ul 
            className="nav"
        >
            <li><a href="#">Home</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Library</a></li>
            <li>
                <a href="#">More</a>
                <ul className="more">

                </ul>
            </li>
        </ul>
    )
}


const Header = () => 
{
    const type = 'Input';
    const Component = Form[type]; 
    return (
        <div className="header">
            <Nav/>
            <Component/>
        </div>
    )
}

const Card = ({objsProps}) => {
    const handelClick = () =>{
        console.log(` Da click vao: ${objsProps.name}`);
    }
    const checkLink = () => (typeof objsProps.link === 'string' ? (objsProps.link.includes("https")?'_blank': '_self'):'_self') 
        
    return (
        <a 
            href={objsProps.link ||"#"} 
            target={checkLink()} 
            className="card"
            onClick={handelClick}
        >
            <img src={objsProps.image} title={`Day la hinh ${objsProps.name}`}/>
            <div 
                className="item-Name"
            >
                {objsProps.name}
            </div> 
            <div 
                className="item-value"
            >
                {objsProps.value}
            </div> 
            <div 
                className="description"
            >
                {objsProps.description}
            </div> 
        </a>
    )
}

const Main = () => {

    return (
        <div className="main">
        {objs.map((obj, index) => (<Card key={index} objsProps={obj} />))}
        </div>
    )
}

const App = () => {
    return (
    <>
    <Header/>
    <Main/>
    <div>{objs.reduce((accumulator, obj) => accumulator + obj.value, 0)} </div>
    
    </>
    )
}

// objs.forEach(obj => console.table({
//     image: obj.image,
//     name: obj.name,
//     value: obj.value,
// }))

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
 
