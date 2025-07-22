import { FaRegMessage } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const dict = {};

const Account = () => {
    const [display, setDisplay] = useState(false)
    const handleDisplay = () => {
        setDisplay(prev => !prev)
    }

    const [dateTime, setDateTime] = useState('');
    const [note, setNote] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSaving = () => {
        if(note && dateTime) {
            const newList = [note, ...(dict[dateTime] || [])];
            dict[dateTime] = newList;
            setTodoList(newList);
            setNote('');
        }

    }
    console.log(dict);
    return (
        <div className='account'>
            <button 
                className='btn b1'
                onClick={handleDisplay}
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
                            type="date" 
                            onChange = {(e) => 
                                {
                                    setDateTime(e.target.value)
                                    setTodoList(dict[e.target.value]||[])
                                }
                            }
                        />
                        <input 
                            onChange={(e) => setNote(e.target.value)} 
                            value={note}
                        />
                        <button 
                            onClick={handleSaving}
                        >
                            save
                        </button>
                    </div>
                    <ul>
                        {(dict[dateTime] || []).map((val, index) => <li key={index}>{val}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Account;