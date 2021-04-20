import { FC } from "react";
import styled from "styled-components";

type options =
  | {
      correct: string;
      incorrect: string[];
    }
  | undefined;

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
  const arr = [0, 1, 2, 3];
  function displayAnswers(options: options, arr: number[]) {
    if (options?.incorrect)
      return options.incorrect[Math.floor(Math.random() * 3)];
  }

  return (
    <div className="questions-container">
      <Answer>{displayAnswers(options, arr)}</Answer>
      <Answer>{displayAnswers(options, arr)}</Answer>
      <Answer>{displayAnswers(options, arr)}</Answer>
      <Answer>{displayAnswers(options, arr)}</Answer>
    </div>
  );
};

export default Answers;
