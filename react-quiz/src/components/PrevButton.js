function PrevButton({ dispatch, hasAnswered, index, numQuestions }) {
  return (
    <button
      className="btn btn-navigate"
      onClick={() => dispatch({ type: "navigateLeft", payload: index })}
    >
      &larr;
    </button>
  );
}

export default PrevButton;
