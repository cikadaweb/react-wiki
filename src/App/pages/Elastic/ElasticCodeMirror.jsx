import { useState, useEffect, useCallback } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiFlexGroup, EuiFlexItem, EuiProvider } from '@elastic/eui';
import { linter, lintGutter } from '@codemirror/lint';
import CodeMirror from '@uiw/react-codemirror';
import * as yamlMode from '@codemirror/legacy-modes/mode/yaml';
import { StreamLanguage } from '@codemirror/language';
import parser from 'js-yaml';
import { githubLight } from '@uiw/codemirror-theme-github';

const yaml = StreamLanguage.define(yamlMode.yaml);

function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

function yamlToJS(yamlText) {
  console.log('yamlText: ', yamlText);
  const jsObject = parser.load(yamlText);
  return jsObject;
}

const response = {
  content: 'fsdfsd23r2r',
};

const decodedContent = new TextDecoder().decode(
  base64ToBytes(response.content),
);
// console.log("Декодированная строка: ");
// console.log(decodedContent);

const jsObject = yamlToJS(decodedContent);
console.log(jsObject); // Вывод JavaScript объекта без комментариев

const exampleYaml = decodedContent;

const yamlLinter = linter((view) => {
  const diagnostics = [];

  try {
    parser.load(view.state.doc);
  } catch (e) {
    const loc = e.mark;
    const from = loc ? loc.position : 0;
    const to = from;
    const severity = 'error';

    diagnostics.push({
      from,
      to,
      message: e.message,
      severity,
    });
  }

  return diagnostics;
});

const ElasticYaml = () => {
  const [editorContent, setEditorContent] = useState('');

  const response = '';

  useEffect(() => {
    setEditorContent(response);
  }, [response]);

  const handleChangeEditor = useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setEditorContent(val);
  }, []);

  return (
    <EuiProvider colorMode="light">
      <EuiFlexGroup style={{ padding: '16px' }}>
        <EuiFlexItem>
          <div>Редактор</div>
          <CodeMirror
            height="100%"
            value={editorContent || exampleYaml}
            theme={githubLight}
            extensions={[yaml, lintGutter(), yamlLinter]}
            onChange={handleChangeEditor}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
};

export default ElasticYaml;
