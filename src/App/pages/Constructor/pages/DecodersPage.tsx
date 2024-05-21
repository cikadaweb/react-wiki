import { useState, Fragment } from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiPage,
  EuiFlexItem,
  EuiTitle,
  EuiFlexGroup,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiSwitch,
} from "@elastic/eui";
import uuid from "uuid/v4";

import { IDecoderChildren } from "../types";

import changeFieldHandler from "../utils/change-field-handler";
import convertToIndentCode from "../utils/create-rule-tag";
import loadXML from "../utils/load-decoders-xml";

import DecodersXMLConstructor from "@/App/pages/Constructor/components/DecoderXMLConstructor/DecoderXMLConstructor";
import DecodersXMLText from "@/App/pages/Constructor/components/DecoderXMLText/DecoderXMLText";
import WzRestartClusterManagerCallout from '../components/RestartClusterManagerCallout/WzRestartClusterManagerCalloute';

import { RulesetHandler } from "../classes/RulesClass";
import { validateFilenameExtension } from "../utils/validate-filename-extension";

const RulesPage = () => {
  const initialDecodersState = [
    {
      id: uuid(),
      nodeName: "rule",
      attributes: new Map(),
      children: [],
      value: "",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [isConstructorMode, setIsConstructorMode] = useState<boolean>(true);

  const [decoders, setDecoders] = useState<IDecoderChildren[]>(initialDecodersState);

  const [fileName, setFileName] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [groupName, setGroupName] = useState("");

  const [isWazuhMangerRestartAlert, setIsWazuhMangerRestartAlert] = useState(false);

  const [isFieldsFilled, setFieldsFilled] = useState(true);
  const [isFileNameValid, setFileNameValid] = useState(false);
  const [isDecoderName, setDecoderName] = useState(false);

  const loadXMLHandler = (xmlString: string) => {
    if (!xmlString || xmlString.trim() === "") {
      alert("Please Copy and Paste XML in the text area");
      return false;
    }
    const { decoders, comments } = loadXML(xmlString);
    setDecoders(decoders);
    setComments(comments);
    return true;
  };

  const onSwitchChange = () => {
    setIsConstructorMode(prevState => !prevState);
  };

  const addDecoder = (obj: IDecoderChildren, index: number = 0) => {
    setDecoders((prev) => {
      const arr = [...prev];
      arr.splice(index, 0, obj);
      return arr;
    });
  };

  const deleteDecoder = (id: string) => {
    setDecoders((prev) => prev.filter((item) => item.id !== id));
  };

  const updateDecoder = (newDecoder: IDecoderChildren) => {
    setDecoders((prev) => {
      return prev.map((decoder) => (decoder.id === newDecoder.id ? newDecoder : decoder));
    });
  };

  const validateFields = () => {
    setFileNameValid(!!fileName);
  };

  const resetForm = () => {
    setFieldsFilled(true);
    setDecoderName(false);
    setDecoders([
      {
        id: uuid(),
        attributes: new Map(),
        children: [],
        value: '',
        nodeName: 'decoder',
      },
    ]);
    setComments([]);
    setFileName('');
  };

  const saveFile = async () => {
    try {
      if (fileName && decoders.every((decoder) => decoder.attributes.get('name') !== '')) {
        const rulesetHandler = new RulesetHandler('decoders');
        const content = convertToIndentCode(null, decoders, comments);
        await rulesetHandler.updateFile(validateFilenameExtension(fileName), content, true);
        setIsWazuhMangerRestartAlert(true);
        setFieldsFilled(true);
        resetForm();
        setFileName("");
      } else {
        setFieldsFilled(false);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const renderXMLConstructor = () => {
    return (
        <DecodersXMLConstructor
            addDecoder={addDecoder}
            deleteDecoder={deleteDecoder}
            updateDecoder={updateDecoder}
            decoders={decoders}
            checkers={{ decoderName: isDecoderName }}
        />
    );
  };

  const renderTextConstructor = () => {
    return (
        <DecodersXMLText
            decoders={decoders}
            comments={comments}
            loadXMLHandler={loadXMLHandler}
        />
    );
  };

  return (
      <EuiPage style={{ padding: "30px" }}>
        <EuiFlexGroup direction="column">

          <EuiFlexItem>
            <EuiTitle size="m">
              <h1>Конструктор декодеров</h1>
            </EuiTitle>
          </EuiFlexItem>

          <EuiFlexItem>

            <EuiFlexGroup justifyContent="spaceBetween">
              <EuiFlexItem>
                <EuiText size="m" style={{marginBottom: '15px'}}>
                  Отразить в виде:
                </EuiText>
                <EuiSwitch
                    label="Конструктор / Текст"
                    checked={isConstructorMode}
                    onChange={onSwitchChange}
                />
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiFlexGroup justifyContent={"flexEnd"}>

                  <EuiFlexItem grow={false}>
                    <EuiButton
                        onClick={() => {}}
                        iconType="questionInCircle"
                        iconSide="right"
                    >
                      Справочник
                    </EuiButton>
                  </EuiFlexItem>

                  <EuiFlexItem grow={false}>
                    <EuiButton
                        onClick={resetForm}
                        color="danger"
                        iconType="refresh"
                        iconSide="right"
                    >
                      Очистить форму
                    </EuiButton>
                  </EuiFlexItem>

                  <EuiFlexItem grow={false}>
                    <EuiButton
                        onClick={saveFile}
                        color="secondary"
                        fill
                        iconType="save"
                        iconSide="right"
                    >
                      Сохранить
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow
                label="Имя XML файла:"
                fullWidth
                helpText="wazuh-rules-example"
            >
              <EuiFieldText
                  value={fileName}
                  onChange={(e) => {
                    changeFieldHandler(e, setFileName);
                  }}
                  type="text"
                  className="filename_input"
                  isInvalid={!fileName && isFileNameValid}
                  fullWidth
              />
            </EuiFormRow>
          </EuiFlexItem>

          {!isLoading && (
              <EuiFlexItem>
                {isConstructorMode && (
                    <EuiFlexGroup direction="column" gutterSize="m">
                      <EuiFlexItem>
                        <p
                            className="euiText"
                            style={{ alignSelf: 'flex-start', color: 'red', paddingBottom: '15px' }}
                        >
                          {isFieldsFilled ||
                          (fileName &&
                              decoders.every((decoder) => decoder.attributes.get('name') !== ''))
                              ? ''
                              : 'Заполните все обязательные поля!'}
                        </p>
                      </EuiFlexItem>

                      {isWazuhMangerRestartAlert && (
                          <Fragment>
                            <WzRestartClusterManagerCallout
                                onRestarted={() => setIsWazuhMangerRestartAlert(false)}
                                onRestartedError={() => setIsWazuhMangerRestartAlert(false)}
                            />
                            <EuiSpacer size="s" />
                          </Fragment>
                      )}
                    </EuiFlexGroup>
                )}
                {isConstructorMode
                    ? renderXMLConstructor()
                    : renderTextConstructor()}
              </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </EuiPage>
  );
};

export default RulesPage;