import { Login } from "@/components/Login";
import { Logout } from "@/components/Logout";
import UserAvatar from "@/components/UserAvatar";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Login />
      <Logout />
      <UserAvatar />
      <a href="/dashboard">Dashboard</a>
    </div>
  );
}
