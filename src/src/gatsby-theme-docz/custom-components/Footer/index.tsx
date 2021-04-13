import React from 'react';

import HeartIcon from '../../../../public/heart-icon.svg';
import './styles.css';

const footerItems = [
  {
    section: 'Documentação',
    items: [
      {
        name: 'Instalação',
        url: '/inicio'
      },
      {
        name: 'Guia de Estilo',
        url: '/inicio'
      }
    ]
  },
  {
    section: 'Comunidade',
    items: [
      {
        name: 'GitHub',
        url: 'https://github.com/eduzz/houston'
      },
      {
        name: 'Discord',
        url: 'https://discord.gg/EeCnYRsCkX'
      }
    ]
  }
];

const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <div className='footer__links'>
        {footerItems.map((footer, index) => (
          <div className='footer__section' key={`footer-section-${index}`}>
            <h4 className='footer__title'>{footer.section}</h4>
            <ul className='footer__items'>
              {footer.items.map((item, index) => (
                <li key={`footer-item-${index}`}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className='footer__copyright'>© {new Date().getFullYear()} Houston. Todos os direitos reservados.</p>

      <p className='footer__made'>
        Feito com <img src={HeartIcon} /> na <b>Eduzz</b>
      </p>
    </div>
  </footer>
);

export default Footer;
