import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { headerButtons, dropDownContent, dropDownItems, headerIcons, hidden, dropDownSep } from '../../styles/Theme';
import AccountIcon from './assets/accountIcon.svg'

export function HeaderDropDown () {
    const [loggedin, setLoggedin] = useState(true);

    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className={headerButtons()} >
                <img src={AccountIcon} alt="Account Button Icon" className={headerIcons()} />
                Minha Conta
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className={dropDownContent()} >
                <DropdownMenu.Item className={(loggedin)? dropDownItems() : hidden()} >Minhas Viagens</DropdownMenu.Item>
                <DropdownMenu.Item className={(loggedin)? dropDownItems() : hidden()} >Meu Perfil</DropdownMenu.Item>
                <DropdownMenu.Item className={(loggedin)? dropDownItems() : hidden()} >Notificações</DropdownMenu.Item>
                <DropdownMenu.Item className={(loggedin)? hidden() : dropDownItems()} >Realizar Login</DropdownMenu.Item>
                <DropdownMenu.Separator className={(loggedin)? dropDownSep() : hidden()} />
                <DropdownMenu.Item className={(loggedin)? dropDownItems({color: 'exit'}) : hidden()}>Sair</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}