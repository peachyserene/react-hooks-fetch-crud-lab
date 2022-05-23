import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, updateQs, updateCorrect }) {
  let questionsGroup = questions.map((q) => {
    return (
      <QuestionItem
        key={q.id}
        id={q.id}
        prompt={q.prompt}
        answers={q.answers}
        correctIndex={q.correctIndex}
        updateQs={updateQs}
        updateCorrect={updateCorrect}
      />
    );
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsGroup}</ul>
    </section>
  );
}

export default QuestionList;
