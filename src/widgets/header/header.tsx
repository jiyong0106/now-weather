import Logo from "@/shared/ui/logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-red-500 h-30">
      <Logo />
    </header>
  );
};

export default Header;