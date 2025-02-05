const Button = (props: {
  text: string;
  onClick: () => void;
  className: string;
}) => {
  const handleClick = (): void => {
    props.onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`${props.className} p-4 uppercase text-center flex items-center justify-center w-full h-full rounded-lg text-2xl cursor-pointer active:scale-80 hover:opacity-85 transform transition-transform duration-100`}
    >
      {props.text}
    </button>
  );
};

export default Button;
