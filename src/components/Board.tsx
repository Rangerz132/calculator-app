import Button from "./Button";
import { useCalculator } from "../hooks/useCalculator";

const Board = () => {
  const { addValue, removeValue, setResult, setOperator, reset } =
    useCalculator();

  return (
    <div className="grid grid-cols-4 gap-3 bg-dark-theme-very-dark-desatured-blue-second rounded-lg w-full p-6 light:bg-light-theme-grayish-red vibrant:bg-vibrant-theme-very-dark-violet-second">
      <Button
        text={"7"}
        onClick={() => addValue("7")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"8"}
        onClick={() => addValue("8")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"9"}
        onClick={() => addValue("9")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"del"}
        onClick={removeValue}
        className={
          "text-white bg-dark-theme-dark-desatured-blue-main light:bg-light-theme-dark-moderate-cyan vibrant:bg-vibrant-theme-dark-violet"
        }
      />
      <Button
        text={"4"}
        onClick={() => addValue("4")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"5"}
        onClick={() => addValue("5")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"6"}
        onClick={() => addValue("6")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"+"}
        onClick={() => setOperator("+")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"1"}
        onClick={() => addValue("1")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"2"}
        onClick={() => addValue("2")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"3"}
        onClick={() => addValue("3")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"-"}
        onClick={() => setOperator("-")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"."}
        onClick={() => addValue(".")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"0"}
        onClick={() => addValue("0")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"/"}
        onClick={() => setOperator("/")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"x"}
        onClick={() => setOperator("*")}
        className={
          "text-dark-theme-grayish-blue bg-dark-theme-light-grayish-orange vibrant:text-vibrant-theme-light-yellow vibrant:bg-vibrant-theme-very-dark-violet"
        }
      />
      <Button
        text={"Reset"}
        onClick={reset}
        className={
          "col-span-2 text-white bg-dark-theme-dark-desatured-blue-main light:bg-light-theme-dark-moderate-cyan vibrant:bg-vibrant-theme-dark-violet"
        }
      />
      <Button
        text={"="}
        onClick={setResult}
        className={
          "col-span-2 text-white bg-dark-theme-red light:bg-light-theme-orange vibrant:bg-vibrant-theme-pure-cyan vibrant:text-vibrant-theme-very-dark-blue"
        }
      />
    </div>
  );
};

export default Board;
