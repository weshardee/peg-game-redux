// @flow
import beige from './beige';
import blue from './blue';
import green from './green';
import pink from './pink';
import yellow from './yellow';

import type {Sheet} from './types';

const sprites = {beige, yellow, blue, pink, green};

export type PegType = $Keys<typeof sprites>;
export type StateSheet = {[key: PegType]: Sheet};
export default sprites;
