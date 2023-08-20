import PropTypes from 'prop-types';
import { BtnCont, Btn } from './Feedbacks.styled';

export const Feedbacks = ({ onLeaveFeedback, buttons }) => {
   
    return (
        <BtnCont>
            {Object.keys(buttons)
                .map((el, index) => <Btn type="button" name={el} onClick={onLeaveFeedback} key={index}>{ucFirst(el)}</Btn>)}
        </BtnCont>
        
    )
}

Feedbacks.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    buttons: PropTypes.objectOf(PropTypes.number).isRequired,
}

function ucFirst(str) {
            if (!str) return str;
            return str[0].toUpperCase() + str.slice(1);
        }