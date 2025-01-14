/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {isLayoutSizeDefined} from '#core/dom/layout';

import {cssText} from '../../../build/amp-story-player.css';
import {AmpStoryPlayer} from '../../../src/amp-story-player/amp-story-player-impl';

class AmpStoryPlayerWrapper extends AMP.BaseElement {
  /** @override @nocollapse */
  static prerenderAllowed() {
    return true;
  }

  /** @param {!AmpElement} element */
  constructor(element) {
    super(element);
    this.player_ = new AmpStoryPlayer(this.win, element);
  }

  /** @override */
  buildCallback() {
    this.player_.buildPlayer();
  }

  /** @override */
  layoutCallback() {
    this.player_.layoutPlayer();
    return Promise.resolve();
  }

  /** @override */
  isLayoutSupported(layout) {
    return isLayoutSizeDefined(layout);
  }
}

AMP.extension('amp-story-player', '0.1', (AMP) => {
  AMP.registerElement('amp-story-player', AmpStoryPlayerWrapper, cssText);
});
