import { Login } from "@/components/Login";
import { Logout } from "@/components/Logout";
import NavBar from "@/components/NavBar";
import UserAvatar from "@/components/UserAvatar";
import Hero from "@/components/layouts/Hero";
import Pricing from "@/components/layouts/Pricing";
import Services from "@/components/layouts/Services";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Pricing />
    </>
  );
}
