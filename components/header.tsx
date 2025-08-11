'use client';

import * as React from "react"
import Link from "next/link"
import { Button } from "./ui/button";
import Banner from "./banner"
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react";

export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex responsive-container py-4 justify-between items-center">
        <nav>
          <NavDrawer />
          <ul className="hidden md:flex flex-row items-center gap-2">
            <li>
              <Link href="/" className="p-4 font-medium">English by Tom</Link>
            </li>
            <li>
              <Link href="/sobre" className="nav-link">Sobre Mi</Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link">Blog</Link>
            </li>
            <li>
              <NavMenu />
            </li>
          </ul>
        </nav>
        <Button asChild variant="yellow" className="w-fit">
          <Link href="/contacto" >Contacto</Link>
        </Button>
      </header>
      <Banner />
    </div>
  )
}

const NavMenu = () => {
  const handleLinkClick = () => {
    // Let the Radix internal menu close after click
    setTimeout(() => {
      const trigger = document.activeElement as HTMLElement
      if (trigger && trigger.blur) trigger.blur()
    }, 0)
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Clases
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] p-1">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/cursos-grupales"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    Cursos Grupales
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/cursos-para-la-unt"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    Cursos para la UNT
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/clases-individuales"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    Clases Individuales
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavDrawer = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild>
        <Menu color="black" size={24} className="flex md:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-row items-center justify-between">
          
          <DrawerClose className="flex size-[30px] items-center justify-center">
            <Menu color="black" size={24} />
          </DrawerClose>
          <DrawerTitle>Menu</DrawerTitle>
          <div className="w-[30px]" />
        </DrawerHeader>
        <div>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="/" className="nav-link" onClick={handleClose}>Inicio</Link>
            </li>
            <li>
              <Link href="/sobre" className="nav-link" onClick={handleClose}>Sobre Mi</Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link" onClick={handleClose}>Blog</Link>
            </li>
            <li>
              <Link href="/cursos-grupales" className="nav-link" onClick={handleClose}>Cursos Grupales</Link>
            </li>
            <li>
              <Link href="/cursos-para-la-unt" className="nav-link" onClick={handleClose}>Cursos Para la UNT</Link>
            </li>
            <li>
              <Link href="/clases-individuales" className="nav-link" onClick={handleClose}>Clases Individuales</Link>
            </li>
            <li>
              <Button asChild variant="yellow" className="w-fit">
                <Link href="/contacto" onClick={handleClose}>Contacto</Link>
              </Button>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

