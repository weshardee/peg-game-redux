// @flow
import beige from './beige';
import yellow from './yellow';

import type {Sheet} from './types';

const sprites = {beige, yellow};

export type PegType = $Keys<typeof sprites>;
export type StateSheet = {[key: PegType]: Sheet};
export default sprites;
