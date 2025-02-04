import { useContext } from "react";
import { RESULT_CONTEXT } from "../contexts/ResultContext";
import { ResultType } from "../types/resultType";

const ResultViewer = () => {
  const { resultContext } = useContext<ResultType>(RESULT_CONTEXT);

  return (
    <div className="w-full p-6 bg-very-dark-desatured-blue-third text-right text-white text-4xl rounded-xl">
      {resultContext.value}
    </div>
  );
};

export default ResultViewer;
