import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);

  function addNewQ(newQ) {
    setQuestions([...questions, newQ]);
  }

  function updateQs(removed) {
    setQuestions(
      questions.filter((q) => {
        return q.id !== removed;
      })
    );
  }
  function updateCorrect(changedQ) {
    return questions.map((item) => {
      if (changedQ.id === item.id) {
        return changedQ;
      } else {
        return item;
      }
    });
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addNewQ={addNewQ} />
      ) : (
        <QuestionList
          questions={questions}
          updateQs={updateQs}
          updateCorrect={updateCorrect}
        />
      )}
    </main>
  );
}

export default App;
