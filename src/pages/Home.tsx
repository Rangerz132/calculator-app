import Header from "../components/Header";
import ResultViewer from "../components/ResultViewer";
import Board from "../components/Board";
import { ResultType } from "../types/resultType";
import { useState } from "react";
import {
  INITIAL_RESULT_CONTEXT,
  RESULT_CONTEXT,
} from "../contexts/ResultContext";

const Home = () => {
  const [resultContext, setResultContext] = useState<ResultType>(
    INITIAL_RESULT_CONTEXT
  );

  return (
    <RESULT_CONTEXT.Provider value={{ resultContext, setResultContext }}>
      <div className="max-w-[768px] h-screen p-6 flex flex-col items-center justify-center space-y-6 mx-auto">
        <Header />
        <ResultViewer />
        <Board />
      </div>
    </RESULT_CONTEXT.Provider>
  );
};

export default Home;
