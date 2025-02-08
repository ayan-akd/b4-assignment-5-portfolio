import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaHome, FaProjectDiagram, FaBlog, FaEnvelope } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const SidebarContent = () => (
  <ScrollArea className="h-full py-6">
    <div className="px-3 py-2">
      <h2 className="mb-6 px-4 text-lg font-semibold dark:text-gray-100">
        Navigation
      </h2>
      <div className="space-y-2">
        <Link href="/" className="w-full">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FaHome className="h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/projects" className="w-full">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FaProjectDiagram className="h-4 w-4" />
            Projects
          </Button>
        </Link>
        <Link href="/blog" className="w-full">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FaBlog className="h-4 w-4" />
            Blog
          </Button>
        </Link>
        <Link href="/contact" className="w-full">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FaEnvelope className="h-4 w-4" />
            Contact
          </Button>
        </Link>
      </div>
    </div>

    <div className="mt-6 px-3 py-2">
      <h2 className="mb-4 px-4 text-lg font-semibold dark:text-gray-100">
        Recent Posts
      </h2>
      <div className="space-y-2 px-4">
        <Link href="/blog/post-1" className="block">
          <p className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Building with Next.js 13
          </p>
        </Link>
        <Link href="/blog/post-2" className="block">
          <p className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Modern Web Development
          </p>
        </Link>
        <Link href="/blog/post-3" className="block">
          <p className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            The Future of React
          </p>
        </Link>
      </div>
    </div>
  </ScrollArea>
);

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block min-h-screen w-64 border-r bg-white dark:bg-gray-950 dark:border-gray-800">
        <SidebarContent />
      </div>

      {/* Mobile/Tablet Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed left-4 top-4">
              <CiMenuFries className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
