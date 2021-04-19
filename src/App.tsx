import "./styles.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Questions from "./Questions";
import { useState } from "react";

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

  return (
    <Router>
      <Switch>
        <Route path="/questions">
          <Questions
            currentQuestion={questions[currentQuestion]}
            setScore={setScore}
            setCurrentQuestion={setCurrentQuestion}
            questionNumber={currentQuestion}
          />
        </Route>
        <Route path="/">
          <Home fetchQuestions={fetchQuestions} />
        </Route>
      </Switch>
    </Router>
  );
}
