import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
body {
  padding: 10px;
  color: ${props => props.theme.primaryTextColor};
  background-color:  ${props => props.theme.primaryBgColor};
  text-align: center;
}
form{

  margin: 0 auto;
}
ul{
  list-style: none;
  padding: 0; 
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin 0 auto;
  line-height: 1.8;
}`;
