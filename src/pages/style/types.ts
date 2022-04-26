import { HoustonTokens } from '@eduzz/houston-tokens';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Theme extends HoustonTokens {}
}
