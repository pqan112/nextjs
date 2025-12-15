import { authSession } from "@/lib/auth-utils";

async function Home() {
  const session = await authSession();
  console.log(session?.user);
  return <div>Hello {session?.user.name ?? "Guest"}, this is homepage</div>;
}

export default Home;
