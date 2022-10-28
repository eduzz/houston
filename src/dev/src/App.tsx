import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MessageOutlined, BellOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

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
              name: 'Eduzz Tecnologia',
              belt: 'Red Belt',
              supportId: 1,
              isSupport: true,
              avatar: houston,
              tag: 'unity'
            }}
          >
            {/* <Topbar.UnitySupportChat /> */}

            <Topbar.Action icon={<NotificationOutline size={25} />} />
            <Topbar.Action icon={<BellOutlined />} />
            <Topbar.Action icon={<MessageOutlined />} label='Chat' />

            <Topbar.UserMenu>
              <Topbar.UserMenuItem icon={<BellOutlined />}>Meus Dados</Topbar.UserMenuItem>
              <Topbar.UserMenuItem icon={<NotificationOutline />}>Minhas Compras</Topbar.UserMenuItem>

              <Topbar.UserMenuGroup label='Contas:'>
                <Topbar.UserMenuItem disabled href='http://google.com' target='_blank' icon={<Avatar>J</Avatar>}>
                  John Doe
                </Topbar.UserMenuItem>
                <Topbar.UserMenuItem>John Doe 2</Topbar.UserMenuItem>
              </Topbar.UserMenuGroup>

              <Topbar.UserMenuDivider />
              <Topbar.UserMenuItem>Sair</Topbar.UserMenuItem>
            </Topbar.UserMenu>
          </Topbar>

          <Sidebar currentLocation={location.pathname}>
            <Group>
              <Item isActive={true}>Resumo</Item>
            </Group>

            <Group>
              <Item>Relatórios</Item>
              <Item>Financeiro</Item>
              <Item>Soluções</Item>
            </Group>

            <Group label='Submenu'>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
            </Group>

            <Group label='Configurações'>
              <Item>Central de Notificações</Item>
              <Item>Configurações</Item>
            </Group>
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
