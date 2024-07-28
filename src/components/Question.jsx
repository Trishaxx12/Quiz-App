// src/Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    let isCorrect = false;
    if (question.type === "multiple-choice") {
      isCorrect = selectedOption === question.correctAnswer;
    } else if (question.type === "open-ended") {
      isCorrect = inputValue.toLowerCase() === question.correctAnswer.toLowerCase();
    }
    onAnswerSubmit(isCorrect);
  };

  return (
    <div>
      <h2>{question.questionText}</h2>
      {question.type === "multiple-choice" && (
        <div>
          {question.options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
      {question.type === "open-ended" && (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Question;
