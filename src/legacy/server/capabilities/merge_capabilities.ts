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

import typeDetect from 'type-detect';
import { merge } from 'lodash';
import { Capabilities } from '../../../core/public';

export const mergeCapabilities = (...sources: Array<Partial<Capabilities>>): Capabilities =>
  merge(
    {
      navLinks: {},
      management: {},
      catalogue: {},
    },
    ...sources,
    (a: any, b: any) => {
      if (
        (typeDetect(a) === 'boolean' && typeDetect(b) === 'Object') ||
        (typeDetect(b) === 'boolean' && typeDetect(a) === 'Object')
      ) {
        throw new Error(`a boolean and an object can't be merged`);
      }

      if (typeDetect(a) === 'boolean' && typeDetect(b) === 'boolean' && a !== b) {
        throw new Error(`"true" and "false" can't be merged`);
      }
    }
  );
