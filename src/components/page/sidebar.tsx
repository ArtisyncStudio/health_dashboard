"use client";
import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import FiltersSidebar from "@/components/Filters/FiltersSidebar";

export default function NavbarWithFilters() {
  return (
    <div className="flex items-center justify-between">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <p className="cursor-pointer">Filters</p>
        </DrawerTrigger>

        <DrawerContent className="bg-background w-72">
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto">
            <FiltersSidebar
              onChange={(filters) => {
                console.log("Filters applied:", filters);
              }}
            />
          </div>

          <div className="border-t p-4">
            <DrawerClose asChild>
              <Button className="w-full">Apply</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
