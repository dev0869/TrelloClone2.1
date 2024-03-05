import Button from "@/components/ui/Button";
import { OrganizationSwitcher, currentUser } from "@clerk/nextjs";
import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
export default async function Navbar() {
  return (
    <div className="sticky top-0 w-full h-14 px-8 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />

        <div className=" flex items-center gap-x-4 justify-between w-full md:w-auto ">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
          />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
