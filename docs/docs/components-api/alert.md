---
id: api-alert
title: Alert
slug: api-alert
---

An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

### Props

#### `type` *(opcional)*

The `type` prop controls the style of alert.

Possible values:

- `success`
- `info`
- `warning`
- `error`

| type | default |
| ---- | ---- |
| `success`, `info`, `warning`, `error` | `success` |

<hr/>

#### `onClose` *(opcional)*

If there is a value, it automatically adds the "X".

| type | default |
| ---- | ---- |
| `(event: React.SyntheticEvent) => void` |  |

<hr/>

#### `icon` *(opcional)*

If `false`, the icon will be hidden.

| type | default |
| ---- | ---- |
| `React.ReactNode`, `false` | `type` icon |

<hr/>

#### `title` *(opcional)*

Title displayed within the alert component.

| type | default |
| ---- | ---- |
| `React.ReactNode` | |
