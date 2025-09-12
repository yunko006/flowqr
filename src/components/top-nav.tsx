import Link from "next/link";
import { Github, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function TopNav() {
  return (
    <nav className="border-b dark:border-gray-800 dark:bg-black border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-semibold dark:text-white text-black">
                FLOW
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white dark:bg-white">
                <span className="text-sm font-bold dark:text-black text-white">
                  QR
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/hello"
                className="dark:text-gray-300 dark:hover:text-white text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
              >
                hello
              </Link>
              <Link
                href="/docs"
                className="dark:text-white text-black px-3 py-2 text-sm font-medium border-b-2 border-white dark:border-white"
              >
                docs
              </Link>
              <Link
                href="/changelogs"
                className="dark:text-gray-300 dark:hover:text-white text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
              >
                changelogs
              </Link>
              <Link
                href="/blogs"
                className="dark:text-gray-300 dark:hover:text-white text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
              >
                blogs
              </Link>
              <Link
                href="/community"
                className="dark:text-gray-300 dark:hover:text-white text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
              >
                community
              </Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/auth.signup">
              <Button size="sm">Sign up</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
