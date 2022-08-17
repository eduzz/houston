export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const AccordionItem = ({ children }: ItemProps) => <div>{children}</div>;

export default AccordionItem;
