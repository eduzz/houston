import React from "react";

import "./styles.css";

const Header = () => (
  <header className="header">
    <h1 className="header__title">Houston Design System</h1>
    <span className="header__subtitle">
      We <s>have a</s> solve problems!
    </span>

    <p className="header__description">
      O Houston é um conjunto de diretrizes, componentes e padrões para acelerar
      o design e o desenvolvimento de produto.
    </p>
  </header>
);

export default Header;
