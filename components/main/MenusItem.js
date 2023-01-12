import { Link, MenuItem } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function MenusItem({ name, path }) {
  const router = useRouter();
  return (
	  <MenuItem as={Link} href={path}>{name}</MenuItem>
  );
}
