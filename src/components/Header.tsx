import {ModeToggle} from "./ModeToggle";

export function Header() {
  return (
    <header className="bg-primary py-4 shadow-md">
      <div className="container flex items-center justify-between">
        <h1>
          <strong>Where in the world?</strong>
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
}
