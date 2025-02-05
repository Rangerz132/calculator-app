import Header from "../components/Header";
import ResultViewer from "../components/ResultViewer";
import Board from "../components/Board";
import { ResultType } from "../types/resultType";
import { useEffect, useState } from "react";
import {
  INITIAL_RESULT_CONTEXT,
  RESULT_CONTEXT,
} from "../contexts/ResultContext";
import { ThemeType } from "../types/themeType";
import { INITIAL_THEME_CONTEXT, THEME_CONTEXT } from "../contexts/ThemeContext";

const Home = () => {
  const [resultContext, setResultContext] = useState<ResultType>(
    INITIAL_RESULT_CONTEXT
  );
  const [themeContext, setThemeContext] = useState<ThemeType>(
    INITIAL_THEME_CONTEXT
  );

  useEffect(() => {
    document.body.classList.remove("dark", "light", "vibrant");
    document.body.classList.add(themeContext);
  }, [themeContext]);

  return (
    <THEME_CONTEXT.Provider value={{ themeContext, setThemeContext }}>
      <RESULT_CONTEXT.Provider value={{ resultContext, setResultContext }}>
        <div className="max-w-[768px] h-screen p-6 flex flex-col items-center justify-center space-y-6 mx-auto">
          <Header />
          <ResultViewer />
          <Board />
        </div>
      </RESULT_CONTEXT.Provider>
    </THEME_CONTEXT.Provider>
  );
};

export default Home;
