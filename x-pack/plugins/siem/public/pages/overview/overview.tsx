/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiFlexGroup } from '@elastic/eui';
import React from 'react';
import { pure } from 'recompose';

import { OverviewHost } from '../../components/page/overview/overview_host';
import { OverviewNetwork } from '../../components/page/overview/overview_network';
import { GlobalTime } from '../../containers/global_time';

import { Summary } from './summary';

export const OverviewComponent = pure(() => (
  <>
    <GlobalTime>
      {({ to, from, setQuery }) => (
        <EuiFlexGroup>
          <Summary />
          <OverviewHost endDate={to} startDate={from} setQuery={setQuery} />
          <OverviewNetwork endDate={to} startDate={from} setQuery={setQuery} />
        </EuiFlexGroup>
      )}
    </GlobalTime>
  </>
));