import { auth } from "@/auth";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const session = await auth();

  if (!session?.user) return null;
  return <div>{session.user.id}</div>;
}
