import { FC, SetStateAction, Dispatch } from "react";
import { decodeHtml } from "./helpers";

interface questionProps {
  currentQuestion: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  setScore: Dispatch<SetStateAction<number>>;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  questionNumber: number;
}

const Questions: FC<questionProps> = ({ currentQuestion, questionNumber }) => {
  console.log(currentQuestion);
  return (
    <>
      <h2>Question {questionNumber + 1}</h2>
      <h2>
        {currentQuestion
          ? decodeHtml(currentQuestion.question)
          : "Loading Question"}
      </h2>
    </>
  );
};

export default Questions;
