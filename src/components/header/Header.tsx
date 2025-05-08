
import React from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

const Header: React.FC = () => {
  const { session, signOut } = useSupabaseAuth();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {session ? (
          <Button variant="ghost" onClick={signOut} className="text-foreground">
            Sign Out
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="ghost" className="text-foreground">
              Sign In
            </Button>
          </Link>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
