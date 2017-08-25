import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background: ${props => props.theme.primary};
`;

export default Bar;
