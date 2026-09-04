
import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex gap-8 text-lg">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>

        <Show when="signed-in">
        <UserButton />
        </Show>

        <Show when="signed-out">
            <Link href="/sign-in">Sign In</Link>
        </Show>
    </nav>
  );
};

export default Navbar;

