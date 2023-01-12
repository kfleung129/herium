import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon, SettingsIcon, CalendarIcon, CheckCircleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import MenusItem from './MenusItem';

const menusList = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Forum', path: '/forum' },
    { name: 'Settings', path: '/settings' },
]

export default function Menus() {
  return (
	<Menu>
        <MenuButton bg="blackAlpha.0" as={IconButton} icon={<HamburgerIcon boxSize={6} />} />
        <MenuList>
            {
                menusList?.map(item => (
                    <MenusItem
                        name={item.name}
                        path={item.path}
                    />
                ))
            }
        </MenuList>
    </Menu>
  );
}
