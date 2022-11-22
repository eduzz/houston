import { GlobalStyles, css } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

function Global() {
  const { font, line } = useHoustonTheme();

  return (
    <GlobalStyles
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        form {
          width: 100%;
        }

        a {
          text-decoration: none;
        }

        .houston-icon {
          line-height: 0;
        }

        body {
          font-family: ${font.family.base};
          font-size: ${font.size.xs};
          line-height: ${line.height.md};
          -webkit-font-smoothing: auto;
        }
      `}
    />
  );
}

export default Global;
