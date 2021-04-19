import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";
import { FC } from "react";

interface homeProps {
  startGame(diff: string): void;
}

const Home: FC<homeProps> = ({ startGame }) => {
  return (
    <>
      <header>
        <h1>A Quiz App!</h1>
        <p className="small">powered by Open Trivia</p>
      </header>
      <main>
        <h2>Select a difficulty</h2>
        <div className="home">
          <Link to="/questions">
            <Difficulty selectDifficulty={startGame} level={"easy"}>
              Easy
            </Difficulty>
          </Link>
          <Link to="/questions">
            <Difficulty selectDifficulty={startGame} level={"medium"}>
              Medium
            </Difficulty>
          </Link>
          <Link to="/questions">
            <Difficulty selectDifficulty={startGame} level={"hard"}>
              Hard
            </Difficulty>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
