"use client";

import Link from "next/link";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";

interface Route {
  route: string;
  name: string;
}

const routes: Route[] = [
  { route: "/", name: "Home" },
  // { route: "/sever-side-rendering", name: "Server" },
  { route: "/client-side-rendering", name: "Client" },
];

export const NavBar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className={styles.container}>
      {routes.map((route) => (
        <Link
          href={route.route}
          key={route.route}
          className={pathname === route.route ? styles.active : ""}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
