import "./styles.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Questions from "./Questions";
import Results from "./Results";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  async function fetchQuestions(difficulty: string) {
    const url = `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${difficulty}`;
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    console.log("cool");
  }

  function startGame(difficulty: string) {
    setQuestions([]);
    fetchQuestions(difficulty);
    setScore(0);
    setCurrentQuestion(0);
  }

  return (
    <Router>
      <Switch>
        <Route path="/questions">
          {currentQuestion < 10 ? (
            <Questions
              currentQuestion={questions[currentQuestion]}
              setScore={setScore}
              setCurrentQuestion={setCurrentQuestion}
              questionNumber={currentQuestion}
            />
          ) : (
            <Results score={score} />
          )}
        </Route>
        <Route path="/">
          <Home startGame={startGame} />
        </Route>
      </Switch>
    </Router>
  );
}
