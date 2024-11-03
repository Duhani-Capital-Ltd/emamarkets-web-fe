import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"



export const Trading = () => {
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid p-6">
                        <li>Account</li>
                        <ListItem className="w-[200px] p-0" href="/acount">
                            Demo
                        </ListItem>
                        <ListItem className="w-[200px] p-0" href="/acount">
                            Micro
                        </ListItem>
                        <ListItem className="w-[200px] p-0" href="/acount">
                            Standard
                        </ListItem>
                        <ListItem className="w-[200px] p-0" href="/acount">
                            Low Spread
                        </ListItem>
                        <ListItem className="w-[200px] p-0" href="/acount">
                            Pro
                        </ListItem>
                        <ListItem className="w-[200px] p-0" href="/acount">
                            Zero Spread
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </>
    )
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
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"