/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { setup as watchListSetup } from './watch_list.helpers';
import { setup as watchStatusSetup } from './watch_status.helpers';

export { nextTick, getRandomString, findTestSubject, TestBed } from '../../../../../test_utils';

export { setupEnvironment } from './setup_environment';

export const pageHelpers = {
  watchList: { setup: watchListSetup },
  watchStatus: { setup: watchStatusSetup },
};
