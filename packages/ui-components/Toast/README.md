# Toast

### Import

```js
import Toast from '@eduzz/houston-ui/Toast';
```

### Use

```jsx
function handle() {
  Toast.success('Success', options);
  Toast.error('Error', options);
  Toast.info('Info', options);
}
```

### Options available

| option  | type       | description                                 |
|---------|------------|---------------------------------------------|
| onOpen  | `function` | Called when the notification appear         |
| onClose | `function` | Called when the notification disappear      |
| onClick | `function` | Called when click inside Toast notification |
