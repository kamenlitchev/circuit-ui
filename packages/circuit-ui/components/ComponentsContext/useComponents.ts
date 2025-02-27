/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import { useContext } from 'react';

import {
  defaultComponents,
  ComponentsContext,
  type ComponentsContextType,
} from './ComponentsContext.js';

/**
 * Subscribe to the components context with a hook.
 */
export const useComponents = (): ComponentsContextType => {
  const components = useContext(ComponentsContext) || {};
  return { ...defaultComponents, ...components };
};
