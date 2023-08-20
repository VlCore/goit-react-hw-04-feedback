import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction:column;
  margin: 0 auto;
`;
export const Item = styled.p`
  color: ${props =>
    props.$color ||
    `rgb(${100 - props.$feedback}%,${props.$feedback / 2}%, 0%)`};
`;