import Link from "next/link";

import {ModeToggle} from "./ModeToggle";

export function Header() {
  return (
    <header className="bg-primary py-4 shadow-md">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <strong>Where in the world?</strong>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
