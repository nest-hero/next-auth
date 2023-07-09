"use client";

import { Button } from "@/component/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { NestJS } from "@/component/NestJS";

export default function Home() {
  const { data, status } = useSession();
  const user = data?.user;

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  if (!user) {
    return (
      <main>
        <Button onClick={() => signIn()}>Login</Button>
      </main>
    );
  }

  return (
    <main>
      {user.email} <Button onClick={() => signOut()}>Logout</Button>
      <br />
      <NestJS />
    </main>
  );
}
