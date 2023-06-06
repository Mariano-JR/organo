import { FaWpforms } from 'react-icons/fa'
import './BtnHide.css'


const BtnHide = ({ toHide }) => {

    return (
        <FaWpforms 
            size={25}
            className='btn-hide'
            onClick={toHide}
        />
    );
}

export default BtnHide