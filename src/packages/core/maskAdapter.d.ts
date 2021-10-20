export default interface IFormMaskAdapter {
    apply(value: string | number): string;
    clean(value: string): string | number;
}
