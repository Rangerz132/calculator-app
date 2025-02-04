import { createContext } from "react";
import { ResultType } from "../types/resultType";

export const INITIAL_RESULT_CONTEXT: ResultType = {
  newValue: 0,
  currentValue: 0,
  operator: undefined,
  total: 0,
};

export const RESULT_CONTEXT = createContext<ResultType>(INITIAL_RESULT_CONTEXT);
