"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <Button
      className="cursor-pointer"
      onClick={async () => {
        await authClient.signOut();
        router.push("/sign-in");
      }}
    >
      Sign out
    </Button>
  );
}
