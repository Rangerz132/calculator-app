const Button = (props: {
  text: string;
  onClick: () => void;
  className: string;
}) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} p-4 uppercase text-center flex items-center justify-center w-full h-full rounded-lg text-2xl cursor-pointer`}
    >
      {props.text}
    </button>
  );
};

export default Button;
