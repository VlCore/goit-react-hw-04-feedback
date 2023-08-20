import PropTypes from 'prop-types';
import { Section } from './Section.styled';

export const Sections = ({ title, children }) => { 

    return (
        <Section>
            <h1>{title}</h1>
            {children}
        </Section>
        )

}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};