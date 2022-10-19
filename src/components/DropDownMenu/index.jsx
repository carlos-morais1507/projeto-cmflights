import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function HeaderDropDown () {
    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                Minha Conta
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item>Minhas Viagens</DropdownMenu.Item>
                <DropdownMenu.Item>Meu Perfil</DropdownMenu.Item>
                <DropdownMenu.Item>Notificações</DropdownMenu.Item>
                <DropdownMenu.Item>Sair</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}