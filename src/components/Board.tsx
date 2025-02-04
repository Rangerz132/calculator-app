import React from "react";
import Button from "./Button";

const Board = () => {
  return (
    <div className="grid grid-cols-4 gap-3 bg-very-dark-desatured-blue-second rounded-lg w-full p-6">
      <Button
        text={"7"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"8"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"9"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"del"}
        onClick={() => {}}
        className={"text-white bg-dark-desatured-blue-main"}
      />
      <Button
        text={"4"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"5"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"6"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"+"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"1"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"2"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"3"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"-"}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"."}
        onClick={() => {}}
        className={"text-dark-desatured-blue-third bg-light-grayish-orange"}
      />
      <Button
        text={"0"}
        onClick={() => {}}
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
        onClick={() => {}}
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
