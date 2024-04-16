import React, { useState, useEffect } from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiFlexGroup, EuiFlexItem, EuiProvider, } from "@elastic/eui";
import YamlEditor from '@focus-reactive/react-yaml';

const ElasticYaml = () => {
    const [editorContent, setEditorContent] = useState('');

    const response = 'meta:\\r\\n  author: ChatGPT\\r\\n  version: 1.0\\r\\ndata:\\r\\n  - name: Example 1\\r\\n    description: This is the first YAML file example\\r\\n    value: 10\\r\\n  - name: Example 2\\r\\n    description: This is the second YAML file example\\r\\n    value: 20\\r\\n  - name: Example 3\\r\\n    description: This is the third YAML file example\\r\\n    value: 30\\r\\n';

    useEffect(() => {
        setEditorContent(unescapeSpecialCharacters(response));
    }, []);

    const unescapeSpecialCharacters = (content: string): string => {
        return content
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t')
            .replace(/\\f/g, '\f')
            .replace(/\\b/g, '\b')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\');
    };

    const handleChange = ({ json, text }: { json?: {}; text: string }) => {
        // console.log(json);
        // console.log(text);
        setEditorContent(text);
        // { foo: 'bar' }
    };

    return (
        <EuiProvider colorMode="light">
            <EuiFlexGroup style={{ padding: "16px" }}>
                <EuiFlexItem>
                    <div>Редактор</div>
                    <YamlEditor text={editorContent} onChange={handleChange} />
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiProvider>
    );
};

export default ElasticYaml;
