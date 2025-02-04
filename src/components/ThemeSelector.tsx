const ThemeSelector = () => {
  return (
    <div className="flex flex-row space-x-6 items-end">
      {/** Theme */}
      <div className="uppercase text-white text-sm font-medium tracking-widest">
        Theme
      </div>

      {/** Selector */}
      <div className="w-[4rem]">
        {/** Slider values */}
        <div className="flex flex-row justify-between px-2.5 text-white font-medium text-sm">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        {/** Slider */}
        <div>
          {/** Background */}
          <div className="w-full h-[1.5rem] bg-very-dark-desatured-blue-second rounded-full p-1">
            {/** Ball */}
            <div className="bg-red w-[1rem] h-[1rem] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
