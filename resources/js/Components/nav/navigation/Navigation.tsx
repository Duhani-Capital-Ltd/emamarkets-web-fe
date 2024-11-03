"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <Partners />
                <Tools />
                <Company />
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export const Partners = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid p-6">
                    <li>Partners</li>
                    <ListItem className="w-[200px] px-2 py-1" href="/ib">
                        IB
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};

export const Tools = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid p-6">
                    <li>Tools</li>
                    <ListItem
                        className="w-[200px] px-2 py-1"
                        href="/market-analysis"
                    >
                        Market Analysis
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};

export const Company = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid p-6">
                    <li>Company</li>
                    <ListItem className="w-[200px] px-2 py-1" href="/about">
                        About Us
                    </ListItem>
                    <ListItem className="w-[200px] px-2 py-1" href="/contact">
                        Contact Us
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};
