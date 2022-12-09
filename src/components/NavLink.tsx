import { Link } from "@chakra-ui/react";

type Props = {
  href: string;
  children: string;
};

export function NavLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      color="white"
      fontSize={["md", "lg"]}
      _hover={{ color: "yellow.500", textDecoration: "underline" }}
    >
      {children}
    </Link>
  );
}
