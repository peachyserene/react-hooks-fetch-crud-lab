import React from "react";

function QuestionItem({
  id,
  prompt,
  answers,
  correctIndex,
  updateQs,
  updateCorrect,
}) {
  function handleChange(e) {
    let updatedIndex = { correctIndex: e.target.value };
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedIndex),
    })
      .then((r) => r.json())
      .then((data) => updateCorrect(data));
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  //DELETES question
  function handleDelete() {
    updateQs(id);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted"));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
