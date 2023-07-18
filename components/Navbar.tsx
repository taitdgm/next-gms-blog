import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <Image src="/logo.png" width={60} height={60} alt="App logo" />
      <nav className="ml-auto font-semibold space-x-6 flex items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <div className="h-7">
          <Separator orientation="vertical" />
        </div>

        <ThemeSwitcher />

        <UserButton />
      </nav>
    </header>
  );
};

export default Navbar;
