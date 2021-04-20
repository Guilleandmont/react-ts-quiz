import { FC, SetStateAction, Dispatch } from "react";
import { decodeHtml } from "./helpers";
import Answers from "./Answers";

type questionObj = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

interface questionProps {
  currentQuestion: questionObj;
  setScore: Dispatch<SetStateAction<number>>;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  questionNumber: number;
}

const Questions: FC<questionProps> = ({ currentQuestion, questionNumber }) => {
  const options = {
    correct: currentQuestion?.correct_answer,
    incorrect: currentQuestion?.incorrect_answers
  };
  return (
    <>
      <h2>Question {questionNumber + 1}</h2>
      <h2>
        {currentQuestion
          ? decodeHtml(currentQuestion.question)
          : "Loading Question"}
      </h2>
      <Answers options={options} />
    </>
  );
};

export default Questions;
