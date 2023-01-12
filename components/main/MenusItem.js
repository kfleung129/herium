import { Link, MenuItem } from "@chakra-ui/react";

export default function MenusItem({ name, path }) {
  return (
	  <MenuItem as={Link} href={path}>{name}</MenuItem>
  );
}
