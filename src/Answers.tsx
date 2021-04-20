import { FC } from "react";
import styled from "styled-components";

type options = string[] | undefined;

interface answersProps {
  options?: options;
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

const Answers: FC<answersProps> = ({ options }) => {
  // Durstenfeld shuffle by Laurens Holst from Stackoverflow

  return (
    <div className="questions-container">
      <Answer>{options ? options[0] : "loading"}</Answer>
      <Answer>{options ? options[1] : "loading"}</Answer>
      <Answer>{options ? options[2] : "loading"}</Answer>
      <Answer>{options ? options[3] : "loading"}</Answer>
    </div>
  );
};

export default Answers;

const arr = [0, 1, 2, 3, 4];
const randomArr = arr.sort((a, b) => 0.5 - Math.random());
console.log(randomArr);
