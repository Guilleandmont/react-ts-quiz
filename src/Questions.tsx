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
  //Algorithm to shuffle array. Thanks to https://gist.github.com/nikolas/96586a0b56f53eabfd6fe4ed59fecb98
  const shuffleArray = function (array: string[]) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  console.log(currentQuestion?.correct_answer);

  const options = currentQuestion
    ? shuffleArray(
        currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer)
      )
    : undefined;

  return (
    <>
      <h2>Question {questionNumber + 1}</h2>
      <h2>
        {currentQuestion
          ? decodeHtml(currentQuestion.question)
          : "Loading Question"}
      </h2>
      <Answers options={options ? options : undefined} />
    </>
  );
};

export default Questions;
