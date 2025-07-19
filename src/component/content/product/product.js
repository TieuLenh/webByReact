import'./product.css'

var cards = [
    {
        id: 'G01',
        image: "https://i.ytimg.com/vi/cJOkT28U4V4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCpnUQTmQOa4zgKz7BWgmPEIPulSQ", 
        name: 'obj1', 
        price: 200,
    },
    { 
        id: 'G02',
        image: "https://i.ytimg.com/vi/WCazPUimdGc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBWdDcorGZzP48dhWdEgUpiqLBIAg", 
        name: 'obj2', 
        price: 0,
    },
    { 
        id: 'G03',
        image: "https://i.ytimg.com/vi/isMS4918XqY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLARDUg84wa6u8AEAmemdIUeSp8GDw", 
        name: 'obj3', 
        price: 500,
    },
]

// const CountNumber = (obj) => {
//     const [counter, setCounter] = useState(obj.quantity)
//     const increase = () => {
//         setCounter(prev => {
//                 return prev + 1
//             }
//         );
//     }
//     const decrease = () => {
//         if(counter - 1 > 0) setCounter(counter - 1);
//     }
//     obj.quantity = counter;
//     return (
//         <div>
//             <button onClick={decrease} > - </button>
//             <span>{obj.quantity}</span>
//             <button onClick={increase} > + </button>
//         </div>
//     );
// }

const Card = ({card = {image: null, name: null, price:0, quantity: 0,}, money = 'VND'} ) => {
    const checkPrice = () => {
        if(card.price <= 0) return 'Free';
        else return `${card.price} ${money}`;
    }  
    const handelClick = () => {
        return(
            console.log('Da click vao:', card.name)
        )
    } 
    return (
        <div 
            className="card"
        >
            <div className='frameImage'>
                <img src={card.image} title={`Day la hinh ${card.name}`}/>
            </div>
            {/* <button 
                className="itemName"
            >
                {card.name}: {checkPrice()}
            </button>  */}
            
        </div>
    )
}

const Product = ({list = []}) => {
    return (
        <div className='product'>
            {list.map((obj, index) => (<Card key={index} card={obj} money='USD'/>))}
        </div>
    )
    
}

export default Product;
export {cards}