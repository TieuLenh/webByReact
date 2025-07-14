import './content.css'

var cards = [
    {
        link: '#', //'https://youtu.be/cJOkT28U4V4?si=N43i6bDHZMFr0OlN',
        image: "https://i.ytimg.com/vi/cJOkT28U4V4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCpnUQTmQOa4zgKz7BWgmPEIPulSQ", 
        name: 'obj1', 
        value: 0, 
    },
    { 
        link: 'https://youtu.be/WCazPUimdGc?si=ImCam5ZuRAuBEd7H',
        image: "https://i.ytimg.com/vi/WCazPUimdGc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBWdDcorGZzP48dhWdEgUpiqLBIAg", 
        name: 'obj2', 
        value: 5, 
    },
    { 
        link: null,
        image: "https://i.ytimg.com/vi/isMS4918XqY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLARDUg84wa6u8AEAmemdIUeSp8GDw", 
        name: 'obj3', 
        value: 110, 
    },
]

const Card = ({cardObj}) => {
    const handelClick = () =>{
        console.log(` Da click vao: ${cardObj.name}`);
    }
    const checkLink = () => (typeof cardObj.link === 'string' ? (cardObj.link.includes("https")?'_blank': '_self'):'_self') 
        
    return (
        <div 
            
            className="card"
            onClick={handelClick}
        >
            <div className='frameImage'>
                <img src={cardObj.image} title={`Day la hinh ${cardObj.name}`}/>
            </div>
            <div 
                className="itemName"
            >
                {cardObj.name}
            </div> 
            <div 
                className="itemValue"
            >
                {cardObj.value}
            </div> 
            <div 
                className="description"
            >
                {cardObj.description}
            </div> 
            <a
                href={cardObj.link ||"#"} 
                target={checkLink()} 
            >
                click here
            </a>
        </div>
    )
}

const Product = ({cards}) => {
    return (
        <div className='product'>
            {cards.map((obj, index) => (<Card key={index} cardObj={obj} />))}
        </div>
    )
    
}
 
const Content = () => {
    return (
        <div className="content">
            <Product cards={cards}/>
            {/* {cards.reduce((a, card) => a + card.value, 0)} */}
        </div>
    )
}

export default Content;