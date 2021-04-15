import "./styles.css";
import styled  from "styled-components"

const Button = styled.div`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

`;


const TomatoButton = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: tomato;
  border-color: tomato;

  ${Button}:hover & {
    background-color: #903030;
  }
`

export default function App() {
  return (
    <div className="App">
      <Button>Hello CodeSandbox</Button>
      <TomatoButton >Tomato Button</TomatoButton>
      <Button as="button">Link as a button</Button>
    </div>
  );
}
