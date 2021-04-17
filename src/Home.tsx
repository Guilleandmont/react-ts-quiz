import Difficulty from "./Difficulty";

const Home = () => {
  return (
    <>
      <header>
        <h1>A Quiz App!</h1>
        <p className="small">powered by Open Trivia</p>
      </header>
      <main>
        <h2>Select a difficulty</h2>
        <Difficulty selectDifficulty={() => console.log("cool")} level={"easy"}>
          Easy
        </Difficulty>
        <Difficulty
          selectDifficulty={() => console.log("cool")}
          level={"medium"}
        >
          Medium
        </Difficulty>
        <Difficulty selectDifficulty={() => console.log("cool")} level={"hard"}>
          Hard
        </Difficulty>
      </main>
    </>
  );
};

export default Home;
