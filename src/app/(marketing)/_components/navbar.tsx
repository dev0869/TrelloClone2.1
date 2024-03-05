import Button from "@/components/ui/Button";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
export default async function Navbar() {
  const user = await currentUser();
  return (
    <div className="fixed top-0 w-full h-14 px-8 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        {!user ? (
          <div className=" flex items-center gap-1 justify-between w-full md:w-auto ">
            <Button>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button>
              <Link href="/sign-up">Get Taskify for free</Link>
            </Button>
          </div>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
}
