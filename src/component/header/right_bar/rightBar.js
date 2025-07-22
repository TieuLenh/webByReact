import './rightBar.css';
import SearchBox from './search_box/searchBox';
import Account from './account/account.js';

const RightBar = () => {
    return (
        <div className='rightBar'>
            <SearchBox />
            <Account />
        </div>
    )
}

export default RightBar;