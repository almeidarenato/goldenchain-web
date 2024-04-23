import { ModeToggle } from "../mode-toggle";

function Header() {
  return (
    <>
      <div className="w-full border rounded-lg">
        Tema: <ModeToggle />
      </div>
    </>
  );
}

export default Header;
