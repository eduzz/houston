import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

import InfoChatOutline from '@eduzz/houston-icons/InfoChatOutline';
import NotificationOutline from '@eduzz/houston-icons/NotificationOutline';
import Layout from '@eduzz/houston-ui/Layout';
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import houston from './assets/houston.png';
import ComponentDev from './components';

import '@eduzz/houston-ui/ThemeProvider/theme.less';

const { Sidebar, Topbar, Content } = Layout;
const { Item, Group } = Sidebar;

declare module '@eduzz/houston-styles' {
  interface HoustonThemePropsCustomVariables {
    customVar: string;
    customObject: {
      prop: number;
    };
  }
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Topbar
            currentApplication='orbita'
            user={{
              name: 'Houston',
              belt: 'Red Belt',
              avatar: houston,
              tag: 'unity'
            }}
          >
            {/* <Topbar.UnitySupportChat /> */}

            <Topbar.Action icon={<NotificationOutline size={25} />} />
            <Topbar.Action icon={<InfoChatOutline size={25} />} />

            <Topbar.UserMenu>
              <Topbar.UserMenuItem>Meus Dados</Topbar.UserMenuItem>
              <Topbar.UserMenuItem>Minhas Compras</Topbar.UserMenuItem>

              <Topbar.UserMenuGroup label='Contas:'>
                <Topbar.UserMenuItem disabled href='http://google.com' target='_blank'>
                  John Doe
                </Topbar.UserMenuItem>
                <Topbar.UserMenuItem>John Doe 2</Topbar.UserMenuItem>
              </Topbar.UserMenuGroup>

              <Topbar.UserMenuDivider />
              <Topbar.UserMenuItem>Sair</Topbar.UserMenuItem>
            </Topbar.UserMenu>
          </Topbar>

          <Sidebar currentLocation={location.pathname}>
            <Item isActive={true}>Resumo</Item>

            <Item>Relatórios</Item>
            <Item>Financeiro</Item>
            <Item>Soluções</Item>

            <Group label='Submenu'>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
            </Group>

            <Item>Central de Notificações</Item>
            <Item>Configurações</Item>
          </Sidebar>

          <Content>
            <ComponentDev />
          </Content>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
