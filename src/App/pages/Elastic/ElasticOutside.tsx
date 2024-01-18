import React, { useState, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiProvider,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useGeneratedHtmlId,
} from '@elastic/eui';

export default () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [selectedTabId, setSelectedTabId] = useState('1');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [superSelectvalue, setSuperSelectValue] = useState('option_one');
  const [isExpressionOpen, setIsExpressionOpen] = useState(false);
  const complicatedFlyoutTitleId = useGeneratedHtmlId({
    prefix: 'complicatedFlyoutTitle',
  });

  const closeFlyout = () => setIsFlyoutVisible(false);
  const showFlyout = () => setIsFlyoutVisible(true);
  const closePopover = () => setIsPopoverOpen(false);
  const togglePopover = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);

  const flyoutContent = (
    <EuiText>
      <p>
        Far out in the uncharted backwaters of the unfashionable end of the
        western spiral arm of the Galaxy lies a small unregarded yellow sun.
      </p>
    </EuiText>
  );

  let flyout;
  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        ownFocus
        onClose={closeFlyout}
        hideCloseButton
        aria-labelledby={complicatedFlyoutTitleId}>
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id={complicatedFlyoutTitleId}>Flyout header</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued">
            <p>
              Put navigation items in the header, and cross tab actions in a
              footer.
            </p>
          </EuiText>
        </EuiFlyoutHeader>

        <EuiFlyoutBody>
          <EuiSpacer />
          {flyoutContent}
        </EuiFlyoutBody>

        <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                iconType="cross"
                onClick={closeFlyout}
                flush="left">
                Close
              </EuiButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton onClick={closeFlyout} fill>
                Save
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }
  return (
    <EuiProvider colorMode="light">
      <div>
        <EuiButton onClick={showFlyout}>Show flyout</EuiButton>
        {flyout}
      </div>
    </EuiProvider>
  );
};
