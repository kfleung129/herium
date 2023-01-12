import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon, SettingsIcon, CalendarIcon, CheckCircleIcon } from '@chakra-ui/icons';

export default function NavBar() {
  return (
	<Menu>
        <MenuButton bg="blackAlpha.0" as={IconButton} icon={<HamburgerIcon boxSize={6} />} />
        <MenuList>
            <MenuItem icon={<CheckCircleIcon />}>Login</MenuItem>
            <MenuItem icon={<CalendarIcon />}>Register</MenuItem>
            <MenuItem icon={<ChatIcon />}>Home</MenuItem>
            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        </MenuList>
    </Menu>
  );
}
