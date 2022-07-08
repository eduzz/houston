export default interface IFormMaskAdapter {
  apply(value: string | number | undefined | null): string | null | undefined;
  clean(value: string): string | number | null;
}
