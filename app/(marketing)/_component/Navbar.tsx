"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, SignOutButton ,UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Link } from "lucide-react";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scroll = useScrollTop();

  return (
    <div className={cn('z=50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex justify-between w-full p-6', scroll && "border-b shadow-sm")}>
      <div>navbar</div>
      {isLoading && (
        <Spinner/>
      )}

      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>

          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Get Notion Free
            </Button>
          </SignInButton>
        </>
      )}

      {isAuthenticated && !isLoading && (
        <>
        {/* <SignOutButton>
          <Button variant="ghost" size="sm">
            Log out
          </Button>
        </SignOutButton> */}
        <Button variant="ghost" size="sm" asChild>
          <Link href="/documents">
            Enter Jotion
          </Link>
          </Button>

          <UserButton afterSignOutUrl="/"/>   


        </>
      )}

      <ModeToggle />
    </div>
  );
};
