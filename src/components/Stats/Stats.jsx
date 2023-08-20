import PropTypes from 'prop-types';
import { Item, StatisticsContainer } from './Stats.styled';


export const Stats = (props) => { 
    const { good,
        neutral,
        bad,
        total,
        positivePercentage, } = props;
    
    return (
        <StatisticsContainer>
            <Item $color='blue'>Good: {good}</Item>
            <Item $color='yellow'>Neutral: {neutral}</Item>
            <Item $color='red'>Bad: {bad}</Item>
            <Item>Total: {total()}</Item>
            <Item $feedback={positivePercentage()}>Positive feedback: {positivePercentage()}%</Item>
        </StatisticsContainer>
        )

}

Stats.propTypes = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.func,
    positivePercentage:PropTypes.func,
}