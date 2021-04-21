import { FC, Dispatch, SetStateAction } from "react";
import { decodeHtml } from "./helpers";
import styled from "styled-components";

//Type definitions
type options = string[] | undefined;

interface answersProps {
  options?: options;
  correctAnswer?: string;
  setScore: Dispatch<SetStateAction<number>>;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

//Styled component
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

const Answers: FC<answersProps> = ({
  options,
  correctAnswer,
  setScore,
  setCurrentQuestion
}) => {
  const checkAnswer = (answer: string): void => {
    //Prevents from crashing if the button is pressed before the question has loaded
    if (!correctAnswer) {
      return;
    }
    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <div className="questions-container">
      {options ? (
        options.map((item, index) => (
          <Answer onClick={() => checkAnswer(item)} key={`answer${index}`}>
            {decodeHtml(item)}
          </Answer>
        ))
      ) : (
        <Answer>loading</Answer>
      )}
    </div>
  );
};

export default Answers;
