import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Link href="/" className="font-bold text-xl">HOME</Link>
            <Link href="/#about" className="font-bold text-xl">ABOUT</Link>
          </div>
          <div className="flex items-center gap-x-4 flex-grow justify-end">
            <MainNav data={categories} />
            <NavbarActions />
            {/* UserButton positioned on the far right */}
            <div className="pl-4 flex items-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
