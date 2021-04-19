import { FC, SetStateAction, Dispatch } from "react";

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
      <h2>{currentQuestion ? currentQuestion.question : "Loading Question"}</h2>
      <div className="questions-container">
        <div className="question">Option 1</div>
        <div className="question">Option 1</div>
        <div className="question">Option 1</div>
        <div className="question">Option 1</div>
      </div>
    </>
  );
};

export default Questions;
