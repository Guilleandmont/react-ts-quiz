import { FC, Dispatch, SetStateAction, useState } from "react";
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
  transition: all 0.25s ease;
`;

const Answers: FC<answersProps> = ({
  options,
  correctAnswer,
  setScore,
  setCurrentQuestion
}) => {
  const [isActive, setActive] = useState(false);

  const isAnswer = (answer: string): boolean => {
    if (answer === correctAnswer) {
      return true;
    } else return false;
  };

  const handleAnswer = (answer: string): void => {
    //Prevents from crashing if the button is pressed before the question has loaded
    if (!isAnswer) {
      return;
    }
    setActive(true);
    setTimeout(() => {
      if (isAnswer(answer)) {
        setScore((prev) => prev + 1);
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
      setActive(false);
    }, 2000);
  };

  return (
    <div className="questions-container">
      {options ? (
        options.map((item, index) => (
          <Answer
            onClick={() => handleAnswer(item)}
            key={`answer${index}`}
            style={{
              backgroundColor: isActive
                ? isAnswer(item)
                  ? "#4AB078"
                  : "f6f6f5"
                : "#f6f6f5"
            }}
          >
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
