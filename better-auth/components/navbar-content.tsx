"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function NavbarContent() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) return "Loading...";

  if (!session) {
    return (
      <div className="flex gap-2">
        <Button onClick={() => router.push("/sign-in")}>Sign in</Button>
        <Button onClick={() => router.push("/sign-up")}>Sign up</Button>
      </div>
    );
  }

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
