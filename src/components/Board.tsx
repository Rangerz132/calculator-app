import { useContext } from "react";
import Button from "./Button";
import { ResultType } from "../types/resultType";
import {
  INITIAL_RESULT_CONTEXT,
  RESULT_CONTEXT,
} from "../contexts/ResultContext";
import { divide, multiply, substract, sum } from "../utils/mathUtils";

const MAX_CHARACTER: number = 10;

const Board = () => {
  const { resultContext, setResultContext } =
    useContext<ResultType>(RESULT_CONTEXT);

  /**
   * Add value
   * @param value string
   */
  function addValue(value: string): void {
    let targetValue;

    /** Define the target value */
    if (resultContext.operator === undefined) {
      targetValue = resultContext.currentValue.toString();
    } else {
      targetValue = resultContext.newValue.toString();
    }

    let finalValue: string = targetValue + value;

    // Remove first "0" if needed
    if (targetValue === "0") {
      finalValue = value;
    }

    // Set a limit
    if (targetValue.length >= MAX_CHARACTER) {
      return;
    }

    setResultContext({
      ...resultContext,
      [resultContext.operator === undefined ? "currentValue" : "newValue"]:
        parseFloat(finalValue),
    });
  }

  /**
   * Remove the last digit of the result value
   */
  function removeValue(): void {
    let targetValue;

    /** Define the target value */
    if (resultContext.operator === undefined) {
      targetValue = resultContext.currentValue.toString();
    } else {
      targetValue = resultContext.newValue.toString();
    }

    // Remove first "0" if needed
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
  }

  function setResult(): void {
    if (resultContext.operator === undefined || resultContext.newValue === 0) {
      return;
    } else {
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
          newTotal = multiply(
            resultContext.currentValue,
            resultContext.newValue
          );
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
    }
  }

  /**
   * Set the operator
   * @param operator string
   */
  function setOperator(operator: string): void {
    setResultContext({ ...resultContext, operator: operator });
  }

  /**
   * Reset the result value
   */
  function reset(): void {
    setResultContext(INITIAL_RESULT_CONTEXT);
  }

  return (
    <div className="grid grid-cols-4 gap-3 bg-very-dark-desatured-blue-second rounded-lg w-full p-6">
      <Button
        text={"7"}
        onClick={() => {
          addValue("7");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"8"}
        onClick={() => {
          addValue("8");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"9"}
        onClick={() => {
          addValue("9");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"del"}
        onClick={() => {
          removeValue();
        }}
        className={"text-white bg-dark-desatured-blue-main"}
      />
      <Button
        text={"4"}
        onClick={() => {
          addValue("4");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"5"}
        onClick={() => {
          addValue("5");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"6"}
        onClick={() => {
          addValue("6");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"+"}
        onClick={() => {
          setOperator("+");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"1"}
        onClick={() => {
          addValue("1");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"2"}
        onClick={() => {
          addValue("2");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"3"}
        onClick={() => {
          addValue("3");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"-"}
        onClick={() => {
          setOperator("-");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"."}
        onClick={() => {
          addValue(".");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"0"}
        onClick={() => {
          addValue("0");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"/"}
        onClick={() => {
          setOperator("/");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"x"}
        onClick={() => {
          setOperator("*");
        }}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"Reset"}
        onClick={() => {
          reset();
        }}
        className={"col-span-2 text-white bg-dark-desatured-blue-main"}
      />
      <Button
        text={"="}
        onClick={() => {
          setResult();
        }}
        className={"col-span-2 text-white bg-red "}
      />
    </div>
  );
};

export default Board;
