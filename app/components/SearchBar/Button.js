import styled from 'styled-components';

const Button = styled.button`
${props => console.log(props.theme)}
box-sizing: border-box;
padding: 0.25em 2em;
text-decoration: none;
border-radius: 4px;
-webkit-font-smoothing: antialiased;
-webkit-touch-callout: none;
user-select: none;
cursor: pointer;
outline: 0;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: bold;
font-size: 16px;
border: 2px solid #66ffcc;
color: #fff;
background: #66ffcc;
&:active {
  background: transparent;
  color: #fff;
}
`;

export default Button;
