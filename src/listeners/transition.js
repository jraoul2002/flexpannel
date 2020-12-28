'use strict';

import { toggleActive } from '../handlers/toggleActive.js';

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));