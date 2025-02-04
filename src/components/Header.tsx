import Logo from "./Logo";
import ThemeSelector from "./ThemeSelector";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <Logo />
      <ThemeSelector />
    </div>
  );
};

export default Header;
