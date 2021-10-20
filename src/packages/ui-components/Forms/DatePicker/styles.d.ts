interface IStyleProps {
    width?: number;
    size?: 'small' | 'normal';
}
declare const useStyles: (props?: Partial<IStyleProps>) => Record<"input" | "root" | "icon" | "fieldPicker" | "days" | "calendar", string>;
export default useStyles;
