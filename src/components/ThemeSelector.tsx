import { useContext } from "react";
import { THEME_CONTEXT } from "../contexts/ThemeContext";
import { ThemeType } from "../types/themeType";

const ThemeSelector = () => {
  const { themeContext, setThemeContext } =
    useContext<ThemeType>(THEME_CONTEXT);

  function changeTheme(): void {
    switch (themeContext) {
      case "dark":
        setThemeContext("light");
        break;
      case "light":
        setThemeContext("vibrant");
        break;
      case "vibrant":
        setThemeContext("dark");
        break;
    }
  }

  function moveKnob(): string {
    if (themeContext === "light") {
      return "translate-x-5";
    } else if (themeContext === "vibrant") {
      return "translate-x-10";
    } else {
      return "";
    }
  }

  return (
    <div className="flex flex-row space-x-6 items-end">
      {/** Theme */}
      <div className="uppercase text-white text-sm font-medium tracking-widest light:text-dark-theme-very-dark-desatured-blue-second vibrant:text-vibrant-theme-light-yellow">
        Theme
      </div>

      {/** Selector */}
      <div className="w-[4rem]">
        {/** Slider values */}
        <div className="flex flex-row justify-between px-2.5 text-white font-medium text-sm light:text-dark-theme-very-dark-desatured-blue-second vibrant:text-vibrant-theme-light-yellow">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        {/** Slider */}
        <div>
          {/** Background */}
          <div
            onClick={() => changeTheme()}
            className="w-full h-[1.5rem] bg-dark-theme-very-dark-desatured-blue-second rounded-full p-1 cursor-pointer light:bg-light-theme-grayish-red vibrant:bg-vibrant-theme-very-dark-violet-second"
          >
            {/** Knob */}
            <div
              className={`bg-dark-theme-red w-[1rem] h-[1rem] rounded-full    light:bg-light-theme-orange vibrant:bg-vibrant-theme-pure-cyan transition-all ${moveKnob()}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
