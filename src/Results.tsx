import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface resultProps {
  score: number;
}

//Button style
const Restart = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  min-height: 5rem;
  margin: 15rem auto 0;
  padding-left: 1.5rem;
  border-radius: 1.2rem;
  font-size: 1.15rem;
  color: white;
  background-color: #4ab078;
  cursor: pointer;
`;

const Results: FC<resultProps> = ({ score }) => {
  return (
    <div className="results">
      <div className="results-container">
        <div className="congrats-text">Good Job!</div>
        <div className="score-text">You got {score} / 10 right.</div>
      </div>
      <Link to="/">
        <Restart className="restart-btn">Try again</Restart>
      </Link>
    </div>
  );
};

export default Results;
