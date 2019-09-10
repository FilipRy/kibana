/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { Component } from 'react';
import { injectI18n, InjectedIntl } from '@kbn/i18n/react';

import { EuiForm, EuiFormRow, EuiSwitch } from '@elastic/eui';

interface Props {
  useMargins: boolean;
  onUseMarginsChange: (useMargins: boolean) => void;
  hidePanelTitles: boolean;
  onHidePanelTitlesChange: (hideTitles: boolean) => void;
  freezeFilterPanel: boolean;
  onFreezeFilterPanelChange: (freezeFilterPanel: boolean) => void;
  intl: InjectedIntl;
}

interface State {
  useMargins: boolean;
  hidePanelTitles: boolean;
  freezeFilterPanel: boolean;
}

class OptionsMenuUi extends Component<Props, State> {
  state = {
    useMargins: this.props.useMargins,
    hidePanelTitles: this.props.hidePanelTitles,
    freezeFilterPanel: this.props.freezeFilterPanel,
  };

  constructor(props: Props) {
    super(props);
  }

  handleUseMarginsChange = (evt: any) => {
    const isChecked = evt.target.checked;
    this.props.onUseMarginsChange(isChecked);
    this.setState({ useMargins: isChecked });
  };

  handleHidePanelTitlesChange = (evt: any) => {
    const isChecked = !evt.target.checked;
    this.props.onHidePanelTitlesChange(isChecked);
    this.setState({ hidePanelTitles: isChecked });
  };

  handleFreezeFilterPanelChange = (evt: any) => {
    const isChecked = !evt.target.checked;
    this.props.onFreezeFilterPanelChange(isChecked);
    this.setState({ freezeFilterPanel: isChecked });
  };

  render() {
    return (
      <EuiForm data-test-subj="dashboardOptionsMenu">
        <EuiFormRow>
          <EuiSwitch
            label={this.props.intl.formatMessage({
              id: 'kbn.dashboard.topNav.options.useMarginsBetweenPanelsSwitchLabel',
              defaultMessage: 'Use margins between panels',
            })}
            checked={this.state.useMargins}
            onChange={this.handleUseMarginsChange}
            data-test-subj="dashboardMarginsCheckbox"
          />
        </EuiFormRow>

        <EuiFormRow>
          <EuiSwitch
            label={this.props.intl.formatMessage({
              id: 'kbn.dashboard.topNav.options.hideAllPanelTitlesSwitchLabel',
              defaultMessage: 'Show panel titles',
            })}
            checked={!this.state.hidePanelTitles}
            onChange={this.handleHidePanelTitlesChange}
            data-test-subj="dashboardPanelTitlesCheckbox"
          />
        </EuiFormRow>

        <EuiFormRow>
          <EuiSwitch
            label={this.props.intl.formatMessage({
              id: 'kbn.dashboard.topNav.options.freezeFilterPanel',
              defaultMessage: 'Freeze filter panel',
            })}
            checked={!this.state.freezeFilterPanel}
            onChange={this.handleFreezeFilterPanelChange}
            data-test-subj="dashboardPanelFreezeFilterPanelCheckbox"
          />
        </EuiFormRow>
      </EuiForm>
    );
  }
}

export const OptionsMenu = injectI18n(OptionsMenuUi);
