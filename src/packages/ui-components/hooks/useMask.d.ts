import IFormMaskAdapter from '@eduzz/houston-core/maskAdapter';
export interface IMaskFunction {
    apply(value: string | number): string;
    clean(value: string): string | number;
}
export default function useMask(mask: IFormMaskAdapter, value: any): {
    maskApply: (value: string | number) => string;
    maskClean: (value: string) => string | number;
    maskedValue: any;
    cleanedValue: any;
};
