'use strict';

import { toggleOpen } from '../handlers/toggleOpen.js';

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));