import * as React from 'react';

interface IUseCreateTempInputDate {
  initialValue?: Date;
  onClose?: () => void;
}

export default function useCreateTempInputDate() {
  const create = React.useCallback(async (options?: IUseCreateTempInputDate): Promise<
    React.ChangeEvent<HTMLInputElement>
  > => {
    return await new Promise(resolve => {
      const input = document.createElement('input');

      input.value = options?.initialValue ? options.initialValue.toJSON().slice(0, 10) : '';

      input.setAttribute('type', 'date');
      input.setAttribute('style', 'width: 0; height: 0; opacity: 0; position: absolute; top: -1000px; left: -1000px;');

      input.addEventListener('blur', (e: Event) => {
        const event = e as unknown as React.ChangeEvent<HTMLInputElement>;
        document.body.removeChild(input);
        options?.onClose && options?.onClose();
        resolve(event);
      });

      document.body.appendChild(input);

      setTimeout(() => {
        input.click();
        input.focus();
      }, 0);
    });
  }, []);

  return [create];
}
