import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Progress from '../../../../Progress';
import { UploadFile } from '../types';
import FileIcon from './FileIcon';
import RemoveIcon from './RemoveIcon';

export type UploadListProps = StyledProp & {
  items: UploadFile[];
  onRemove?: (file: UploadFile) => void;
};

const UploadList = ({ className, items, onRemove }: UploadListProps) => {
  const onInternalRemove = (file: UploadFile) => {
    onRemove && onRemove(file);
  };

  const getStatusMessage = (file: UploadFile) => {
    if (file.status === 'success') {
      return 'Concluído';
    }
    return file.errorMessage ?? 'O upload falhou';
  };

  return (
    <ul className={className}>
      {items.map(item => (
        <li className='hst-drag-and-drop-file-item' key={item.uid}>
          <FileIcon className='hst-drag-and-drop-file-item-icon' file={item} />
          <div className='hst-drag-and-drop-file-item-description'>
            <span className='hst-drag-and-drop-file-item-name'>{item.name}</span>
            {(item.status === 'success' || item.status === 'error') && (
              <span
                className={cx('hst-drag-and-drop-file-item-status', {
                  '--hst-drag-and-drop-file-item-status-success': item.status === 'success',
                  '--hst-drag-and-drop-file-item-status-error': item.status === 'error'
                })}
              >
                {getStatusMessage(item)}
              </span>
            )}
          </div>
          {item.status === 'uploading' && <Progress size='md' value={item.percent as number} />}
          <RemoveIcon className='hst-drag-and-drop-file-item-remove-button' file={item} onRemove={onInternalRemove} />
        </li>
      ))}
    </ul>
  );
};

export default styled(UploadList, { label: 'hst-drag-and-drop-file-list' })`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    list-style: none;

    .hst-drag-and-drop-file-item {
      display: flex;
      align-items: center;
      padding-block: ${theme.spacing.stack.xxxs};
      padding-inline: ${theme.spacing.inline.nano};
      gap: ${theme.spacing.nano};
      border-bottom: 1px solid ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};

      .hst-drag-and-drop-file-item-icon {
        margin-inline: ${theme.spacing.inline.quarck};
      }

      .hst-drag-and-drop-file-item-description {
        overflow: hidden;
        flex: 1;

        .hst-drag-and-drop-file-item-name {
          display: block;
          color: ${theme.neutralColor.low.pure};
          font-family: ${theme.font.family.base};
          font-size: ${theme.font.size.xs};
          font-weight: ${theme.font.weight.regular};
          line-height: ${theme.line.height.lg};
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .hst-drag-and-drop-file-item-status {
          display: block;
          font-size: ${theme.font.size.xxs};
          font-weight: ${theme.font.weight.regular};
          font-family: ${theme.font.family.base};
          line-height: ${theme.line.height.md};

          &.--hst-drag-and-drop-file-item-status-success {
            color: ${theme.feedbackColor.positive.medium};
          }

          &.--hst-drag-and-drop-file-item-status-error {
            color: ${theme.feedbackColor.negative.medium};
          }
        }
      }

      .hst-drag-and-drop-file-item-remove-button {
        margin-inline: ${theme.spacing.inline.quarck};
        cursor: pointer;

        &:hover {
          opacity: ${theme.opacity.level[8]};
          transition: opacity 500ms;
        }
      }
    }
  `}
`;
