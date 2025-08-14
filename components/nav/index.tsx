"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export default function Nav({ Content }: any) {
  const components = {
    ul: (props: any) => (
      <ul
        className="flex flex-col items-center md:flex-row list-none"
        {...props}
      />
    ),
    li: (props: any) => <li className="nav-link" {...props} />,
  };

  return (
    <header className="flex responsive-container py-4  2xl:max-w-7xl">
      <nav className="flex flex-row w-full justify-between items-center">
        <Link href="/">English by Tom</Link>
        <div className="hidden md:flex">
          <Content components={components} />
        </div>
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Menu color="black" size={24} className="flex md:hidden" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-row items-center justify-between">
              <div className="w-[30px]" />
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerClose className="flex size-[30px] items-center justify-center">
                <Menu color="black" size={24} />
              </DrawerClose>
            </DrawerHeader>
            <Content components={components} />
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
