import { useContext } from "react";
import Button from "./Button";
import { ResultType } from "../types/resultType";
import {
  INITIAL_RESULT_CONTEXT,
  RESULT_CONTEXT,
} from "../contexts/ResultContext";

const MAX_CHARACTER: number = 10;

const Board = () => {
  const { resultContext, setResultContext } =
    useContext<ResultType>(RESULT_CONTEXT);

  /**
   *
   * @param value string
   */
  function addValue(value: string): void {
    const stringifyResultValue: string = resultContext.value.toString();
    let finalValue: string = stringifyResultValue + value;

    // Remove first "0" if needed
    if (stringifyResultValue === "0") {
      finalValue = value;
    }

    // Set a limit
    if (stringifyResultValue.length >= MAX_CHARACTER) {
      return;
    }

    setResultContext({ ...resultContext, value: finalValue });
  }

  /**
   * Remove the last digit of the result value
   */
  function removeValue(): void {
    const stringifyResultValue: string = resultContext.value.toString();

    // Remove first "0" if needed
    if (stringifyResultValue.length === 1) {
      setResultContext({ ...resultContext, value: "0" });
    } else {
      const newValue = stringifyResultValue.slice(0, -1);
      setResultContext({ ...resultContext, value: newValue });
    }
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
        onClick={() => {}}
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
        onClick={() => {}}
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
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"x"}
        onClick={() => {}}
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
        onClick={() => {}}
        className={"col-span-2 text-white bg-red "}
      />
    </div>
  );
};

export default Board;
