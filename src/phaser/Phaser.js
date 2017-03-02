// import phaser libs in the right order
import pixi from 'phaser-ce/build/custom/pixi.js';
import p2 from 'phaser-ce/build/custom/p2.js';
import Phaser from 'phaser-ce/build/custom/phaser-split.js';

// makes Flow happy; these modules assign themselves globaly anyways
window.p2 = p2;
window.PIXI = pixi;

export default Phaser;
