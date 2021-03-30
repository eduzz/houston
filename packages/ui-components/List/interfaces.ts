import { IListLeftProps } from './Left';
import { IListRightProps } from './Right';
import { IListSubtitleProps } from './Subtitle';
import { IListTitleProps } from './Title';

export interface IListItem {
  left?: IListLeftProps;
  title?: IListTitleProps;
  subtitle?: IListSubtitleProps;
  right?: IListRightProps;
}
