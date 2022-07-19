import { BrowserRouter } from 'react-router-dom';

import InfoChatOutline from '@eduzz/houston-icons/InfoChatOutline';
import NotificationOutline from '@eduzz/houston-icons/NotificationOutline';
import Layout from '@eduzz/houston-ui/Layout';
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import houston from './assets/houston.png';
import ComponentDev from './components';

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
            <Topbar.SupportChat />

            <Topbar.Action icon={<NotificationOutline size={25} />} />
            <Topbar.Action icon={<InfoChatOutline size={25} />} />

            <Topbar.UserMenu>
              <Topbar.UserMenuItem>Meus Dados</Topbar.UserMenuItem>
              <Topbar.UserMenuItem>Minhas Compras</Topbar.UserMenuItem>

              <Topbar.UserMenuContext>Contas:</Topbar.UserMenuContext>
              <Topbar.UserMenuItem>John Doe</Topbar.UserMenuItem>
              <Topbar.UserMenuItem disabled>John Doe 2</Topbar.UserMenuItem>

              <Topbar.UserMenuDivider />
              <Topbar.UserMenuItem>Sair</Topbar.UserMenuItem>
            </Topbar.UserMenu>
          </Topbar>

          <Sidebar currentLocation={location.pathname}>
            <Item isActive={true}>Resumo</Item>

            <Group label='Submenu'>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
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
