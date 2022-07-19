import { TopbarProps } from '../..';

declare global {
  interface Window {
    LHCChatOptions: any;
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

  scriptImport.onload = () => {
    const widget = document.getElementById('lhc_status_container');
    const chat = document.getElementById('lhc_container');
    widget?.classList.add('lhc_container--fix-position');
    chat?.classList.add('lhc_container--fix-position');
  };

  return () => {
    const widget = document.getElementById('lhc_status_container');
    if (widget) {
      widget.classList.add('lhc_container--delete');
      setTimeout(() => widget.remove(), 300);
    }

    const chat = document.getElementById('lhc_container');
    if (chat) {
      chat.classList.add('lhc_container--delete');
      setTimeout(() => chat.remove(), 300);
    }

    document.body.classList.remove('houston-topbar-chat-applied');
    scriptImport.remove();
  };
}
