// src/Result.js
import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
    </div>
  );
};

export default Result;
