import './header.css';
import RightBar from './right_bar/rightBar';
import LeftBar from './left_bar/leftBar';

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





const Header = () => 
{
    return (
        <div className="header">
            <RightBar />
            <LeftBar />
        </div>
    )
}

export default Header;

