import { useContext } from "react";
import { RESULT_CONTEXT } from "../contexts/ResultContext";
import { ResultType } from "../types/resultType";

const ResultViewer = () => {
  const { resultContext } = useContext<ResultType>(RESULT_CONTEXT);

  function showResultValue(): string {
    // If an operator is set, show the newValue (this is the next number being entered)
    if (resultContext.operator !== undefined) {
      return resultContext.newValue.toString();
    }

    // If total exists (after calculation) and no operator is set, show the total
    if (resultContext.total !== 0 && resultContext.operator === undefined) {
      return resultContext.total.toString();
    }

    // Otherwise, show the currentValue (this is before any operator is pressed or while typing)
    return resultContext.currentValue.toString();
  }

  return (
    <div className="w-full p-6 bg-very-dark-desatured-blue-third text-right text-white text-4xl rounded-xl">
      {showResultValue()}
    </div>
  );
};

export default ResultViewer;
