"use client";
import Google from "next-auth/providers/google";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="h-screen flex w-screen justify-center items-center">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  );
}
