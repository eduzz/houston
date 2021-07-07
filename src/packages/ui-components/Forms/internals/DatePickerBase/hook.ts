import * as React from 'react';

interface IUseCreateInputDateTemp {
  initialValue?: Date;
  onClose?: () => void;
}

export default function useCreateInputDateTemp(options?: IUseCreateInputDateTemp) {
  const { initialValue, onClose } = options;

  const [value, setValue] = React.useState<React.ChangeEvent<HTMLInputElement>>(null);

  async function create(): Promise<React.ChangeEvent<HTMLInputElement>> {
    return await new Promise(resolve => {
      const input = document.createElement('input');

      input.value = initialValue ? initialValue.toJSON().slice(0, 10) : '';

      input.setAttribute('type', 'date');
      input.setAttribute('style', 'width: 0; height: 0; opacity: 0; position: absolute; top: -1000px; left: -1000px;');

      input.addEventListener('blur', (e: Event) => {
        const event = e as unknown as React.ChangeEvent<HTMLInputElement>;
        document.body.removeChild(input);
        onClose && onClose();
        setValue(event);
        resolve(event);
      });

      document.body.appendChild(input);

      setTimeout(() => {
        input.click();
        input.focus();
      }, 0);
    });
  }

  return [value, create];
}
