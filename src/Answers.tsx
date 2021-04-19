import { useState, FC } from "react";
import styled from "styled-components";

interface answersProps {
  isCorrect: boolean;
  body: string;
}

const Answer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  min-height: 5rem;
  margin: 1rem auto;
  padding-left: 1.5rem;
  border-radius: 1.2rem;
  cursor: pointer;
  background-color: #f6f6f5;
`;

const Answers: FC<answersProps> = ({ isCorrect, body }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="questions-container">
      <Answer>Option 1</Answer>
      <Answer>Option 2</Answer>
      <Answer>Option 3</Answer>
      <Answer>Option 4</Answer>
    </div>
  );
};

export default Answers;
