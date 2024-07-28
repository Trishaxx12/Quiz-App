// src/Quiz.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = {
  title: "Simple Quiz",
  questions: [
    {
      questionText: "What is the capital of France?",
      type: "multiple-choice",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      questionText: "Who wrote 'To Kill a Mockingbird'?",
      type: "open-ended",
      correctAnswer: "Harper Lee"
    }
  ]
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <Result score={score} totalQuestions={quizData.questions.length} />;
  }

  return (
    <div>
      <h1>{quizData.title}</h1>
      <Question
        question={quizData.questions[currentQuestionIndex]}
        onAnswerSubmit={handleAnswerSubmit}
      />
    </div>
  );
};

export default Quiz;
