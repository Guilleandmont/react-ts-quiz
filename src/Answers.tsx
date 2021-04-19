import { useState, FC } from "react";

interface answersProps {
  isCorrect: boolean;
  body: string;
}

const Answer: FC<answersProps> = ({ isCorrect, body }) => {
  const [active, setActive] = useState(false);

  return <div>{body}</div>;
};

export default Answer;
