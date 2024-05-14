import React, { useState, useEffect } from "react";
import {
  EuiFlexGroup,
  EuiPanel,
  EuiCodeBlock,
  EuiButtonEmpty,
  EuiCodeEditor,
} from "@elastic/eui";

import type { IDecoderChildren, IRuleChildren } from "../../types";

import convertToIndentCode from "../../utils/create-rule-tag";

import "./XMLText.css";
interface IXMLTextViewProps {
  rules?: IRuleChildren[];
  groupName?: string;
  loadXMLHandler: (string) => boolean;
  comments: string[];
  decoders?: IDecoderChildren[];
}

const RuleXMLText = (props: IXMLTextViewProps) => {
  const { groupName, loadXMLHandler, comments } = props ?? null;
  const rules = props.rules ?? null;
  const decoders = props.decoders ?? null;
  const [XMLView, setXMLView] = useState("");
  const [textView, setTextView] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  useEffect(() => {
    const convertedXML = convertToIndentCode(
      rules,
      decoders,
      comments,
      groupName
    );
    if (textView === XMLView) {
      setXMLView(convertedXML);
      setTextView(convertedXML);
      setIsValidated(false);
    } else {
      setIsEditable(true);
      setIsValidated(true);
      setXMLView(convertedXML);
    }
  }, [rules, decoders, groupName, comments]);
  const onEditButtonClick = () => {
    setTimeout(() => {
      if (isEditable && loadXMLHandler(textView)) {
        setIsEditable(false);
      } else {
        setIsEditable(true);
      }
    }, 0);
  };

  return (
    <EuiFlexGroup
      style={{
        marginTop: "20px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: "95vw",
        paddingRight: "20px",
      }}
    >
      <EuiButtonEmpty
        style={{ alignSelf: "flex-end" }}
        onClick={onEditButtonClick}
        iconType="indexEdit"
      >
        {isEditable ? "Сохранить" : "Редактировать"}
      </EuiButtonEmpty>
      <p className="euiText" style={{ alignSelf: "flex-start", color: "red" }}>
        {isValidated ? "Error validating XML" : ""}
      </p>
      <EuiPanel style={{ backgroundColor: "#FAFBFD", boxShadow: "none" }}>
        {isEditable ? (
          <div style={{ padding: "16px" }}>
            <EuiCodeEditor
              mode="xml"
              theme="textmate"
              value={textView}
              width="100%"
              fontSize="16px"
              height="auto"
              minLines={6}
              maxLines={30}
              style={{ lineHeight: "21px" }}
              setOptions={{
                showLineNumbers: false,
                tabSize: 2,
              }}
              onChange={(value) => setTextView(value)}
              editorProps={{
                $blockScrolling: Infinity,
              }}
              showGutter={false}
            />
          </div>
        ) : (
          <EuiCodeBlock
            style={{ width: "100%", padding: "16px" }}
            language="xml"
            fontSize="m"
            paddingSize="m"
            isCopyable
          >
            {XMLView}
          </EuiCodeBlock>
        )}
      </EuiPanel>
    </EuiFlexGroup>
  );
};

export default RuleXMLText;
