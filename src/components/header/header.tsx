import { ModeToggle } from "../mode-toggle";

function Header() {
  return (
    <>
      <div className="w-full border rounded-lg flex justify-end">
        <ModeToggle />
      </div>
    </>
  );
}

export default Header;
