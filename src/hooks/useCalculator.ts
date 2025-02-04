import { useContext } from "react";
import { ResultType } from "../types/resultType";
import {
  RESULT_CONTEXT,
  INITIAL_RESULT_CONTEXT,
} from "../contexts/ResultContext";
import { divide, multiply, substract, sum } from "../utils/mathUtils";

const MAX_CHARACTER: number = 10;

export const useCalculator = () => {
  const { resultContext, setResultContext } =
    useContext<ResultType>(RESULT_CONTEXT);

  // Add value to the current or new value based on operator
  const addValue = (value: string): void => {
    const targetValue =
      resultContext.operator === undefined
        ? resultContext.currentValue.toString()
        : resultContext.newValue.toString();

    let finalValue = targetValue + value;

    // Remove leading "0" if needed
    if (targetValue === "0") {
      finalValue = value;
    }

    // Set a limit to characters
    if (targetValue.length >= MAX_CHARACTER) {
      return;
    }

    setResultContext({
      ...resultContext,
      [resultContext.operator === undefined ? "currentValue" : "newValue"]:
        parseFloat(finalValue),
    });
  };

  // Remove the last digit of the current or new value
  const removeValue = (): void => {
    const targetValue =
      resultContext.operator === undefined
        ? resultContext.currentValue.toString()
        : resultContext.newValue.toString();

    if (targetValue.length === 1) {
      setResultContext({
        ...resultContext,
        [resultContext.operator === undefined ? "currentValue" : "newValue"]: 0,
      });
    } else {
      const newValue = targetValue.slice(0, -1);
      setResultContext({
        ...resultContext,
        [resultContext.operator === undefined ? "currentValue" : "newValue"]:
          parseFloat(newValue),
      });
    }
  };

  // Perform the calculation based on the operator
  const setResult = (): void => {
    if (resultContext.operator === undefined || resultContext.newValue === 0) {
      return;
    }

    let newTotal;
    switch (resultContext.operator) {
      case "+":
        newTotal = sum(resultContext.currentValue, resultContext.newValue);
        break;
      case "-":
        newTotal = substract(
          resultContext.currentValue,
          resultContext.newValue
        );
        break;
      case "*":
        newTotal = multiply(resultContext.currentValue, resultContext.newValue);
        break;
      case "/":
        newTotal = divide(resultContext.currentValue, resultContext.newValue);
        break;
      default:
        return;
    }

    // After calculating, the total is saved, and we reset newValue for the next input.
    setResultContext({
      ...resultContext,
      total: newTotal,
      currentValue: newTotal, // Allow next number to continue from the result
      newValue: 0, // Reset the newValue for next input
      operator: undefined, // Reset operator to prepare for next operation
    });
  };

  // Set the operator for the calculation
  const setOperator = (operator: string): void => {
    setResultContext({ ...resultContext, operator: operator });
  };

  // Reset the result context to initial state
  const reset = (): void => {
    setResultContext(INITIAL_RESULT_CONTEXT);
  };

  return {
    resultContext,
    addValue,
    removeValue,
    setResult,
    setOperator,
    reset,
  };
};
