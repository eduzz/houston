import { TopbarProps } from '../..';

declare global {
  interface Window {
    lhc_var: any;
    LHCChatOptions: any;
    __houston_chat_loader__: Promise<void>;
    __houston_chat_loaded_completed__: boolean;
    $_LHC: any;
  }
}

export default function chatInit(user: TopbarProps['user']) {
  if (!user) return () => null;

  window.LHCChatOptions = {};
  window.LHCChatOptions.attr = [];
  window.LHCChatOptions.attr.push({ name: 'ID', value: user.id, type: 'hidden' });
  window.LHCChatOptions.attr.push({ name: 'Email', value: user.email, type: 'hidden' });
  window.LHCChatOptions.attr.push({ name: 'Nome', value: user.name ?? user.email, type: 'hidden' });

  window.LHCChatOptions.attr_prefill = [];
  window.LHCChatOptions.attr_prefill.push({ name: 'email', value: user.email });
  window.LHCChatOptions.attr_prefill.push({ name: 'username', value: user.name ?? user.email });

  loadScript();

  return () => {
    window.LHCChatOptions = {};
    window.$_LHC?.eventListener.emitEvent('terminated');
  };
}

async function loadScript() {
  if (window.__houston_chat_loader__) {
    return window.__houston_chat_loader__.then(() => {
      window.$_LHC.eventListener.emitEvent('terminated');
      window.$_LHC.init();
    });
  }

  window.__houston_chat_loader__ = new Promise(resolve => {
    window.LHCChatOptions.opt = {
      widget_height: 400,
      widget_width: 340,
      popup_height: 520,
      popup_width: 500
    };

    const refferer = document.referrer
      ? encodeURIComponent(document.referrer.substring(document.referrer.indexOf('://') + 1))
      : '';

    const location = document.location
      ? encodeURIComponent(window.location.href.substring(window.location.protocol.length))
      : '';

    const scriptImport = document.createElement('script');
    scriptImport.type = 'text/javascript';
    scriptImport.async = true;
    scriptImport.src = `https://chat.eduzz.com/index.php/por/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/23/(theme)/12?r=${refferer}&l=${location};`;

    document.head.appendChild(scriptImport);
    document.body.classList.add('houston-topbar-chat-applied');

    scriptImport.onload = async () => {
      let count = 0;
      while (!window.$_LHC && count < 20) {
        count++;
        await new Promise<void>(resolve => setTimeout(() => resolve(), 1000));
      }

      resolve();
    };
  });

  return window.__houston_chat_loader__;
}
