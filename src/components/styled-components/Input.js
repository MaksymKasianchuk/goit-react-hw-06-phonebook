import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  border: 2px solid transparent;
  color: ${props => props.theme.primaryTextColor};

  &:hover,
  &:focus {
    border-color: ${props => props.theme.accentColor};
    outline: none;
  }
`;

export default Input;
