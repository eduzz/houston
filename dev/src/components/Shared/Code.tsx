import React from 'react';
import { memo } from 'react';
import { useMemo } from 'react';
import MonacoEditor from 'react-monaco-editor';

import makeStyles from '@material-ui/core/styles/makeStyles';

import * as monacoEditor from 'monaco-editor';

monacoEditor.languages.typescript.typescriptDefaults.setCompilerOptions({
  jsx: monacoEditor.languages.typescript.JsxEmit.React
});

const useStyles = makeStyles(() => ({
  container: { margin: '20px 0' }
}));

interface IProps {
  content: string;
}

const Code = memo<IProps>(({ content }) => {
  const styles = useStyles();

  const height = useMemo(() => 19 * content.split('\n').length, [content]);
  const options: monacoEditor.editor.IEditorConstructionOptions = useMemo(
    () => ({
      readOnly: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true
    }),
    []
  );

  return (
    <div className={styles.container}>
      <MonacoEditor height={height} language='typescript' theme='vs-dark' value={content} options={options} />
    </div>
  );
});

export default Code;
