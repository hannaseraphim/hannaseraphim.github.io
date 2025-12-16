import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

function Header() {
  return (
    <NavigationMenu className="min-w-dvw p-5 text-white flex justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="#hero" className="text-emerald-300 font-bold">
            Hanna Seraphim
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="flex gap-5">
        <NavigationMenuItem>
          <a href="#projects" className="transition-all hover:font-bold">
            Projects
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#about" className="transition-all hover:font-bold">
            About me
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#contact" className="transition-all hover:font-bold">
            Contact
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;
