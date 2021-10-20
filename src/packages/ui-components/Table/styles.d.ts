export interface IStyleParams {
    maxHeight: number;
}
declare const useStyles: (props?: Partial<Record<string, any>>) => Record<"table" | "tableContainer" | "tableResponsive", string>;
export default useStyles;
