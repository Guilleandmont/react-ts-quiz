import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";
import { FC } from "react";

interface homeProps {
  fetchQuestions(diff: string): void;
}

const Home: FC<homeProps> = ({ fetchQuestions }) => {
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
            <Difficulty selectDifficulty={fetchQuestions} level={"easy"}>
              Easy
            </Difficulty>
          </Link>
          <Difficulty
            selectDifficulty={() => console.log("cool")}
            level={"medium"}
          >
            Medium
          </Difficulty>
          <Difficulty
            selectDifficulty={() => console.log("cool")}
            level={"hard"}
          >
            Hard
          </Difficulty>
        </div>
      </main>
    </>
  );
};

export default Home;
