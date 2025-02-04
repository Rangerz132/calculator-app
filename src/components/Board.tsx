import Button from "./Button";
import { useCalculator } from "../hooks/useCalculator";

const Board = () => {
  const { addValue, removeValue, setResult, setOperator, reset } =
    useCalculator();

  return (
    <div className="grid grid-cols-4 gap-3 bg-very-dark-desatured-blue-second rounded-lg w-full p-6">
      <Button
        text={"7"}
        onClick={() => addValue("7")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"8"}
        onClick={() => addValue("8")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"9"}
        onClick={() => addValue("9")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"del"}
        onClick={removeValue}
        className={"text-white bg-dark-desatured-blue-main"}
      />
      <Button
        text={"4"}
        onClick={() => addValue("4")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"5"}
        onClick={() => addValue("5")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"6"}
        onClick={() => addValue("6")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"+"}
        onClick={() => setOperator("+")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"1"}
        onClick={() => addValue("1")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"2"}
        onClick={() => addValue("2")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"3"}
        onClick={() => addValue("3")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"-"}
        onClick={() => setOperator("-")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"."}
        onClick={() => addValue(".")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"0"}
        onClick={() => addValue("0")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"/"}
        onClick={() => setOperator("/")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"x"}
        onClick={() => setOperator("*")}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"Reset"}
        onClick={reset}
        className={"col-span-2 text-white bg-dark-desatured-blue-main"}
      />
      <Button
        text={"="}
        onClick={setResult}
        className={"col-span-2 text-white bg-red"}
      />
    </div>
  );
};

export default Board;
