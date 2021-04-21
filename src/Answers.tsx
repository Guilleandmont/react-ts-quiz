import { FC } from "react";
import styled from "styled-components";

type options = string[] | undefined;

interface answersProps {
  options?: options;
  correctAnswer?: string;
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

const Answers: FC<answersProps> = ({ options, correctAnswer }) => {
  const checkAnswer = (answer: string): void => {
    //Prevents from crashing if the button is pressed before the question has loaded
    if (!correctAnswer) {
      return;
    }
    if (answer === correctAnswer) {
      console.log("correct!");
      //set state score to + 1
      //set current question to + 1
    } else {
      //set current question to + 1
    }
  };

  return (
    <div className="questions-container">
      {options ? (
        options.map((item, index) => (
          <Answer onClick={() => checkAnswer(item)} key={`answer${index}`}>
            {item}
          </Answer>
        ))
      ) : (
        <Answer>loading</Answer>
      )}
    </div>
  );
};

export default Answers;
