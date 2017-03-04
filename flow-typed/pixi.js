declare module 'pixi' {
  declare module.exports: $Exports<'PIXI'>;
}
/* TODO: Find signature of shader attributes */
// SPINE
// Type definitions for PIXI with Phaser Deviations.
// import Phaser from 'phaser-ce';
declare module 'PIXI' {
  declare class Matrix {
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number,

    append(matrix: Matrix): Matrix,
    apply(pos: Point, newPos: Point): Point,
    applyInverse(pos: Point, newPos: Point): Point,
    determineMatrixArrayType(): number[],
    identity(): Matrix,
    rotate(angle: number): Matrix,
    fromArray(array: number[]): void,
    translate(x: number, y: number): Matrix,
    toArray(transpose: boolean): number[],
    scale(x: number, y: number): Matrix,
  }

  declare interface PixiRenderer {
    autoResize: boolean,
    clearBeforeRender: boolean,
    height: number,
    resolution: number,
    transparent: boolean,
    type: number,
    view: HTMLCanvasElement,
    width: number,

    destroy(): void,
    render(stage: DisplayObjectContainer): void,
    resize(width: number, height: number): void,
  }

  declare interface PixiRendererOptions {
    autoResize?: boolean,
    antialias?: boolean,
    clearBeforeRender?: boolean,
    preserveDrawingBuffer?: boolean,
    resolution?: number,
    transparent?: boolean,
    view?: HTMLCanvasElement,
  }

  declare var game: Phaser.Game;
  declare var WEBGL_RENDERER: number;
  declare var CANVAS_RENDERER: number;
  declare var VERSION: string;

  declare type BlendMode =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
  declare var blendModes: {
    NORMAL: 0,
    ADD: 1,
    MULTIPLY: 2,
    SCREEN: 3,
    OVERLAY: 4,
    DARKEN: 5,
    LIGHTEN: 6,
    COLOR_DODGE: 7,
    COLOR_BURN: 8,
    HARD_LIGHT: 9,
    SOFT_LIGHT: 10,
    DIFFERENCE: 11,
    EXCLUSION: 12,
    HUE: 13,
    SATURATION: 14,
    COLOR: 15,
    LUMINOSITY: 16,
  };

  declare type ScaleMode = 0 | 1 | 2;
  declare var scaleModes: {
    DEFAULT: 0,
    LINEAR: 1,
    NEAREST: 2,
  };

  declare var defaultRenderOptions: PixiRendererOptions;

  declare var INTERACTION_REQUENCY: number;
  declare var AUTO_PREVENT_DEFAULT: boolean;

  declare var PI_2: number;
  declare var RAD_TO_DEG: number;
  declare var DEG_TO_RAD: number;

  declare var RETINA_PREFIX: string;
  declare var identityMatrix: Matrix;
  declare var glContexts: WebGLRenderingContext[];
  declare var instances: any[];

  declare var TextureSilentFail: boolean;
  declare var BitmapText: { fonts: {} };

  declare function isPowerOfTwo(width: number, height: number): boolean;

  declare function rgb2hex(rgb: number[]): string;
  declare function hex2rgb(hex: string): number[];

  declare function autoDetectRenderer(
    width?: number,
    height?: number,
    options?: PixiRendererOptions,
  ): PixiRenderer;
  declare function autoDetectRecommendedRenderer(
    width?: number,
    height?: number,
    options?: PixiRendererOptions,
  ): PixiRenderer;

  declare function canUseNewCanvasBlendModes(): boolean;
  declare function getNextPowerOfTwo(value: number): number;

  declare function AjaxRequest(): XMLHttpRequest;

  declare function CompileFragmentShader(
    gl: WebGLRenderingContext,
    shaderSrc: string[],
  ): any;
  declare function CompileProgram(
    gl: WebGLRenderingContext,
    vertexSrc: string[],
    fragmentSrc: string[],
  ): any;

  declare interface IEventCallback {
    (e?: IEvent): void,
  }

  declare interface IEvent {
    type: string,
    content: any,
  }

  declare interface HitArea {
    contains(x: number, y: number): boolean,
  }

  declare interface IInteractionDataCallback {
    (interactionData: InteractionData): void,
  }

  declare interface BitmapTextStyle {
    font?: string,
    align?: string,
    tint?: string,
  }

  declare interface TextStyle {
    align?: string,
    dropShadow?: boolean,
    dropShadowColor?: string,
    dropShadowAngle?: number,
    dropShadowDistance?: number,
    fill?: string,
    font?: string,
    lineJoin?: string,
    stroke?: string,
    strokeThickness?: number,
    wordWrap?: boolean,
    wordWrapWidth?: number,
  }

  declare interface Loader {
    load(): void,
  }

  declare interface MaskData {
    alpha: number,
    worldTransform: number[],
  }

  declare interface RenderSession {
    context: CanvasRenderingContext2D,
    maskManager: CanvasMaskManager,
    scaleMode: ScaleMode,
    smoothProperty: string,
    roundPixels: boolean,
  }

  declare interface ShaderAttribute {}

  declare interface FilterBlock {
    visible: boolean,
    renderable: boolean,
  }

  declare class AbstractFilter {
    constructor(fragmentSrc: string | string[], uniforms: any): this,

    dirty: boolean,
    padding: number,
    uniforms: any,
    fragmentSrc: string | string[],

    apply(frameBuffer: WebGLFramebuffer): void,
    syncUniforms(): void,
  }

  declare class AlphaMaskFilter extends AbstractFilter {
    constructor(texture: Texture): this,

    map: Texture,

    onTextureLoaded(): void,
  }

  declare class AsciiFilter extends AbstractFilter {
    size: number,
  }

  declare class AssetLoader {
    assetURLs: string[],
    crossorigin: boolean,
    loadersByType: { [key: string]: Loader },

    constructor(assetURLs: string[], crossorigin: boolean): this,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
  }

  declare class AtlasLoader {
    url: string,
    baseUrl: string,
    crossorigin: boolean,
    loaded: boolean,

    constructor(url: string, crossorigin: boolean): this,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
  }

  declare class BaseTexture {
    static fromCanvas(
      canvas: HTMLCanvasElement,
      scaleMode?: ScaleMode,
    ): BaseTexture,

    constructor(source: HTMLImageElement, scaleMode: ScaleMode): this,
    constructor(source: HTMLCanvasElement, scaleMode: ScaleMode): this,

    height: number,
    hasLoaded: boolean,
    mipmap: boolean,
    premultipliedAlpha: boolean,
    resolution: number,
    scaleMode: ScaleMode,
    skipRender: boolean,
    source: HTMLImageElement,
    textureIndex: number,
    width: number,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,
    forceLoaded(width: number, height: number): void,
    destroy(): void,
    dirty(): void,
    unloadFromGPU(): void,
  }

  declare class BitmapFontLoader {
    constructor(url: string, crossorigin: boolean): this,

    baseUrl: string,
    crossorigin: boolean,
    texture: Texture,
    url: string,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
  }

  declare class BlurFilter extends AbstractFilter {
    blur: number,
    blurX: number,
    blurY: number,
  }

  declare class BlurXFilter extends AbstractFilter {
    blur: number,
  }

  declare class BlurYFilter extends AbstractFilter {
    blur: number,
  }

  declare class CanvasBuffer {
    constructor(width: number, height: number): this,

    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    height: number,
    width: number,

    destroy(): void,
    clear(): void,
    resize(width: number, height: number): void,
  }

  declare class CanvasPool {
    static create(
      parent: HTMLElement,
      width?: number,
      height?: number,
    ): HTMLCanvasElement,
    static getFirst(): HTMLCanvasElement,
    static remove(parent: HTMLElement): void,
    static removeByCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement,
    static getTotal(): number,
    static getFree(): number,
  }

  declare class CanvasMaskManager {
    pushMask(maskData: MaskData, renderSession: RenderSession): void,
    popMask(renderSession: RenderSession): void,
  }

  declare class CanvasRenderer {
    constructor(game: Phaser.Game): this,

    game: Phaser.Game,
    type: number,
    resolution: number,
    clearBeforeRender: boolean,
    transparent: boolean,
    autoResize: boolean,
    width: number,
    height: number,
    view: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    refresh: boolean,
    count: number,
    maskManager: CanvasMaskManager,
    renderSession: RenderSession,

    render(stage: DisplayObjectContainer): void,
    resize(width: number, height: number): void,
    destroy(removeView?: boolean): void,
  }

  declare class CanvasTinter {
    static getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement,
    static tintWithMultiply(
      texture: Texture,
      color: number,
      canvas: HTMLCanvasElement,
    ): void,
    static tintWithOverlay(
      texture: Texture,
      color: number,
      canvas: HTMLCanvasElement,
    ): void,
    static tintWithPerPixel(
      texture: Texture,
      color: number,
      canvas: HTMLCanvasElement,
    ): void,

    static canUseMultiply: boolean,
    static tintMethod: any,
  }

  declare class Circle {
    constructor(x: number, y: number, radius: number): this,

    x: number,
    y: number,
    radius: number,

    clone(): Circle,
    contains(x: number, y: number): boolean,
    getBounds(): Rectangle,
  }

  declare class ColorMatrixFilter extends AbstractFilter {
    constructor(): this,

    matrix: number[],
  }

  declare class ColorStepFilter extends AbstractFilter {
    step: number,
  }

  declare class ConvolutionFilter extends AbstractFilter {
    constructor(matrix: number[], width: number, height: number): this,

    matrix: Matrix,
    width: number,
    height: number,
  }

  declare class CrossHatchFilter extends AbstractFilter {
    blur: number,
  }

  declare class DisplacementFilter extends AbstractFilter {
    constructor(texture: Texture): this,

    map: Texture,
    offset: Point,
    scale: Point,
  }

  declare class DotScreenFilter extends AbstractFilter {
    angle: number,
    scale: Point,
  }

  declare class DisplayObject {
    alpha: number,
    buttonMode: boolean,
    cacheAsBitmap: boolean,
    defaultCursor: string,
    filterArea: Rectangle,
    filters: AbstractFilter[],
    hitArea: HitArea,
    interactive: boolean,
    mask: Graphics,
    parent: DisplayObjectContainer,
    pivot: Point,
    position: Point,
    renderable: boolean,
    rotation: number,
    scale: Point,
    stage: DisplayObjectContainer,
    visible: boolean,
    worldAlpha: number,
    worldPosition: Point,
    worldScale: Point,
    worldTransform: Matrix,
    worldRotation: number,
    worldVisible: boolean,
    x: number,
    y: number,

    click(e: InteractionData): void,
    displayObjectUpdateTransform(parent?: DisplayObjectContainer): void,
    generateTexture(
      resolution?: number,
      scaleMode?: number,
      renderer?: PixiRenderer | number,
    ): RenderTexture,
    mousedown(e: InteractionData): void,
    mouseout(e: InteractionData): void,
    mouseover(e: InteractionData): void,
    mouseup(e: InteractionData): void,
    mousemove(e: InteractionData): void,
    mouseupoutside(e: InteractionData): void,
    rightclick(e: InteractionData): void,
    rightdown(e: InteractionData): void,
    rightup(e: InteractionData): void,
    rightupoutside(e: InteractionData): void,
    setStageReference(stage: DisplayObjectContainer): void,
    tap(e: InteractionData): void,
    toGlobal(position: Point): Point,
    toLocal(position: Point, from: DisplayObject): Point,
    touchend(e: InteractionData): void,
    touchendoutside(e: InteractionData): void,
    touchstart(e: InteractionData): void,
    touchmove(e: InteractionData): void,
    updateTransform(parent?: DisplayObjectContainer): void,
  }

  declare class DisplayObjectContainer extends DisplayObject {
    constructor(): this,

    children: DisplayObject[],
    height: number,
    width: number,
    ignoreChildInput: boolean,

    addChild(child: DisplayObject): DisplayObject,
    addChildAt(child: DisplayObject, index: number): DisplayObject,
    getBounds(targetCoordinateSpace?: DisplayObject | Matrix): Rectangle,
    getChildAt(index: number): DisplayObject,
    getChildIndex(child: DisplayObject): number,
    getLocalBounds(): Rectangle,
    removeChild(child: DisplayObject): DisplayObject,
    removeChildAt(index: number): DisplayObject,
    removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[],
    removeStageReference(): void,
    setChildIndex(child: DisplayObject, index: number): void,
    swapChildren(child: DisplayObject, child2: DisplayObject): void,
    contains(child: DisplayObject): boolean,
  }

  declare class Ellipse {
    constructor(x: number, y: number, width: number, height: number): this,

    x: number,
    y: number,
    width: number,
    height: number,

    clone(): Ellipse,
    contains(x: number, y: number): boolean,
    getBounds(): Rectangle,
  }

  declare class Event {
    constructor(target: any, name: string, data: any): this,

    target: any,
    type: string,
    data: any,
    timeStamp: number,

    stopPropagation(): void,
    preventDefault(): void,
    stopImmediatePropagation(): void,
  }

  declare class EventTarget {
    static mixin(obj: any): void,
  }

  declare class FilterTexture {
    constructor(
      gl: WebGLRenderingContext,
      width: number,
      height: number,
      scaleMode: ScaleMode,
    ): this,

    fragmentSrc: string[],
    frameBuffer: WebGLFramebuffer,
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    scaleMode: ScaleMode,
    texture: WebGLTexture,

    clear(): void,
    resize(width: number, height: number): void,
    destroy(): void,
  }

  declare class GraphicsData {
    constructor(
      lineWidth?: number,
      lineColor?: number,
      lineAlpha?: number,
      fillColor?: number,
      fillAlpha?: number,
      fill?: boolean,
      shape?: any,
    ): this,

    lineWidth: number,
    lineColor: number,
    lineAlpha: number,
    fillColor: number,
    fillAlpha: number,
    fill: boolean,
    shape: any,
    type: number,
  }

  declare class Graphics extends DisplayObjectContainer {
    static POLY: number,
    static RECT: number,
    static CIRC: number,
    static ELIP: number,
    static RREC: number,

    blendMode: BlendMode,
    boundsPadding: number,
    fillAlpha: number,
    isMask: boolean,
    lineWidth: number,
    lineColor: number,
    tint: number,
    worldAlpha: number,

    arc(
      cx: number,
      cy: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      anticlockwise: boolean,
    ): Graphics,
    arcTo(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      radius: number,
    ): Graphics,
    beginFill(color?: number, alpha?: number): Graphics,
    bezierCurveTo(
      cpX: number,
      cpY: number,
      cpX2: number,
      cpY2: number,
      toX: number,
      toY: number,
    ): Graphics,
    clear(): Graphics,
    destroyCachedSprite(): void,
    drawCircle(x: number, y: number, diameter: number): Graphics,
    drawEllipse(x: number, y: number, width: number, height: number): Graphics,
    drawPolygon(...path: any[]): Graphics,
    drawRect(x: number, y: number, width: number, height: number): Graphics,
    drawRoundedRect(
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
    ): Graphics,
    drawShape(shape: Circle): GraphicsData,
    drawShape(shape: Rectangle): GraphicsData,
    drawShape(shape: Ellipse): GraphicsData,
    drawShape(shape: Polygon): GraphicsData,
    endFill(): Graphics,
    generateTexture(
      resolution?: number,
      scaleMode?: number,
      padding?: PixiRenderer | number,
    ): RenderTexture,
    lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics,
    lineTo(x: number, y: number): Graphics,
    moveTo(x: number, y: number): Graphics,
    quadraticCurveTo(
      cpX: number,
      cpY: number,
      toX: number,
      toY: number,
    ): Graphics,
  }

  declare class GrayFilter extends AbstractFilter {
    gray: number,
  }

  declare class ImageLoader {
    constructor(url: string, crossorigin?: boolean): this,

    texture: Texture,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
    loadFramedSpriteSheet(
      frameWidth: number,
      frameHeight: number,
      textureName: string,
    ): void,
  }

  declare class InteractionData {
    global: Point,
    target: Sprite,
    originalEvent: Event,

    getLocalPosition(
      displayObject: DisplayObject,
      point?: Point,
      globalPos?: Point,
    ): Point,
  }

  declare class InteractionManager {
    currentCursorStyle: string,
    last: number,
    mouse: InteractionData,
    mouseOut: boolean,
    mouseoverEnabled: boolean,
    onMouseMove: Function,
    onMouseDown: Function,
    onMouseOut: Function,
    onMouseUp: Function,
    onTouchStart: Function,
    onTouchEnd: Function,
    onTouchMove: Function,
    pool: InteractionData[],
    resolution: number,
    stage: DisplayObjectContainer,
    touches: { [id: string]: InteractionData },

    constructor(stage: DisplayObjectContainer): this,
  }

  declare class InvertFilter extends AbstractFilter {
    invert: number,
  }

  declare class JsonLoader {
    constructor(url: string, crossorigin?: boolean): this,

    baseUrl: string,
    crossorigin: boolean,
    loaded: boolean,
    url: string,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
  }

  declare interface Mixin {
    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,
  }

  declare class NoiseFilter extends AbstractFilter {
    noise: number,
  }

  declare class NormalMapFilter extends AbstractFilter {
    map: Texture,
    offset: Point,
    scale: Point,
  }

  declare class PixelateFilter extends AbstractFilter {
    size: number,
  }

  declare interface IPixiShader {
    fragmentSrc: string[],
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    vertexSrc: string[],

    destroy(): void,
    init(): void,
  }

  declare class PixiShader {
    constructor(gl: WebGLRenderingContext): this,

    attributes: ShaderAttribute[],
    defaultVertexSrc: string[],
    dirty: boolean,
    firstRun: boolean,
    textureCount: number,
    fragmentSrc: string[],
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    vertexSrc: string[],

    initSampler2D(): void,
    initUniforms(): void,
    syncUniforms(): void,

    destroy(): void,
    init(): void,
  }

  declare class PixiFastShader {
    constructor(gl: WebGLRenderingContext): this,

    textureCount: number,
    fragmentSrc: string[],
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    vertexSrc: string[],

    destroy(): void,
    init(): void,
  }

  declare class PrimitiveShader {
    constructor(gl: WebGLRenderingContext): this,
    fragmentSrc: string[],
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    vertexSrc: string[],

    destroy(): void,
    init(): void,
  }

  declare class ComplexPrimitiveShader {
    constructor(gl: WebGLRenderingContext): this,
    fragmentSrc: string[],
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    vertexSrc: string[],

    destroy(): void,
    init(): void,
  }

  declare class StripShader {
    constructor(gl: WebGLRenderingContext): this,
    fragmentSrc: string[],
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    vertexSrc: string[],

    destroy(): void,
    init(): void,
  }

  declare class Point {
    constructor(x?: number, y?: number): this,

    x: number,
    y: number,

    clone(): Point,
    set(x: number, y: number): void,
  }

  declare class Polygon {
    constructor(points: Point[]): this,
    constructor(points: number[]): this,
    constructor(...points: Point[]): this,
    constructor(...points: number[]): this,

    points: any[],

    clone(): Polygon,
    contains(x: number, y: number): boolean,
  }

  declare class Rectangle {
    constructor(x?: number, y?: number, width?: number, height?: number): this,

    x: number,
    y: number,
    width: number,
    height: number,

    clone(): Rectangle,
    contains(x: number, y: number): boolean,
  }

  declare class RGBSplitFilter extends AbstractFilter {
    red: Point,
    green: Point,
    blue: Point,
  }

  declare class Rope extends Strip {
    points: Point[],
    vertices: number[],

    constructor(texture: Texture, points: Point[]): this,

    refresh(): void,
    setTexture(texture: Texture): void,
  }

  declare class RoundedRectangle {
    constructor(
      x?: number,
      y?: number,
      width?: number,
      height?: number,
      radius?: number,
    ): this,

    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,

    clone(): RoundedRectangle,
    contains(x: number, y: number): boolean,
  }

  declare class SepiaFilter extends AbstractFilter {
    sepia: number,
  }

  declare class SmartBlurFilter extends AbstractFilter {
    blur: number,
  }

  declare class SpineLoader {
    url: string,
    crossorigin: boolean,
    loaded: boolean,

    constructor(url: string, crossOrigin: boolean): this,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
  }

  declare class SpineTextureLoader {
    constructor(basePath: string, crossorigin: boolean): this,

    load(page: AtlasPage, file: string): void,
    unload(texture: BaseTexture): void,
  }

  declare class Sprite extends DisplayObjectContainer {
    constructor(texture: Texture): this,

    anchor: Point,
    blendMode: BlendMode,
    exists: boolean,
    shader: IPixiShader,
    texture: Texture,
    tint: number,

    setTexture(texture: Texture, destroyBase?: boolean): void,
  }

  declare class SpriteBatch extends DisplayObjectContainer {
    constructor(texture?: Texture): this,

    ready: boolean,
    textureThing: Texture,

    initWebGL(gl: WebGLRenderingContext): void,
  }

  declare class SpriteSheetLoader {
    constructor(url: string, crossorigin?: boolean): this,

    baseUrl: string,
    crossorigin: boolean,
    frames: any,
    texture: Texture,
    url: string,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    load(): void,
  }

  declare class Strip extends DisplayObjectContainer {
    static DrawModes: {
      TRIANGLE_STRIP: number,
      TRIANGLES: number,
    },

    constructor(texture: Texture): this,

    blendMode: BlendMode,
    colors: number[],
    dirty: boolean,
    indices: number[],
    canvasPadding: number,
    texture: Texture,
    uvs: number[],
    vertices: number[],

    getBounds(matrix?: DisplayObject | Matrix): Rectangle,
  }

  declare class Texture {
    static emptyTexture: Texture,

    static fromCanvas(
      canvas: HTMLCanvasElement,
      scaleMode?: ScaleMode,
    ): Texture,

    constructor(
      baseTexture: BaseTexture,
      frame?: Rectangle,
      crop?: Rectangle,
      trim?: Rectangle,
    ): this,

    baseTexture: BaseTexture,
    crop: Rectangle,
    frame: Rectangle,
    height: number,
    noFrame: boolean,
    requiresUpdate: boolean,
    trim: Point,
    width: number,
    scope: any,
    valid: boolean,
    rotated: boolean,

    listeners(eventName: string): Function[],
    emit(eventName: string, data?: any): boolean,
    dispatchEvent(eventName: string, data?: any): boolean,
    on(eventName: string, fn: Function): Function,
    addEventListener(eventName: string, fn: Function): Function,
    once(eventName: string, fn: Function): Function,
    off(eventName: string, fn: Function): Function,
    removeAllEventListeners(eventName: string): void,

    destroy(destroyBase: boolean): void,
    setFrame(frame: Rectangle): void,
  }

  declare class TilingSprite extends Sprite {
    constructor(texture: Texture, width: number, height: number): this,

    canvasBuffer: CanvasBuffer,
    blendMode: BlendMode,
    refreshTexture: boolean,
    texture: Texture,
    textureDebug: boolean,
    tint: number,
    tilePosition: Point,
    tilePattern: Texture,
    tileScale: Point,
    tileScaleOffset: Point,

    destroy(): void,
    generateTilingTexture(forcePowerOfTwo?: boolean): void,
    setTexture(texture: Texture): void,
  }

  declare class TiltShiftFilter extends AbstractFilter {
    blur: number,
    gradientBlur: number,
    start: number,
    end: number,
  }

  declare class TiltShiftXFilter extends AbstractFilter {
    blur: number,
    gradientBlur: number,
    start: number,
    end: number,

    updateDelta(): void,
  }

  declare class TiltShiftYFilter extends AbstractFilter {
    blur: number,
    gradientBlur: number,
    start: number,
    end: number,

    updateDelta(): void,
  }

  declare class TwistFilter extends AbstractFilter {
    angle: number,
    offset: Point,
    radius: number,
  }

  declare class VideoTexture extends BaseTexture {
    static baseTextureFromVideo(
      video: HTMLVideoElement,
      scaleMode: ScaleMode,
    ): BaseTexture,
    static textureFromVideo(
      video: HTMLVideoElement,
      scaleMode: ScaleMode,
    ): Texture,
    static fromUrl(
      videoSrc: string,
      scaleMode?: number,
      autoPlay?: boolean,
      type?: string,
      loop?: boolean,
    ): Texture,

    controls: boolean,
    autoUpdate: boolean,
    type: string,

    changeSource(src: string, type: string, loop: boolean): void,
    play(): void,
    stop(): void,

    destroy(): void,
    updateBound(): void,
    onPlayStart: () => void,
    onPlayStop: () => void,
    onCanPlay: (event: any) => void,
  }

  declare class WebGLBlendModeManager {
    currentblendMode: BlendMode,

    destroy(): void,
    setBlendMode(blendMode: BlendMode): boolean,
    setContext(gl: WebGLRenderingContext): void,
  }

  declare class WebGLFastSpriteBatch {
    constructor(gl: CanvasRenderingContext2D): this,

    currentBatchSize: number,
    currentBaseTexture: BaseTexture,
    currentblendMode: BlendMode,
    renderSession: RenderSession,
    drawing: boolean,
    indexBuffer: any,
    indices: number[],
    lastIndexCount: number,
    matrix: Matrix,
    maxSize: number,
    shader: IPixiShader,
    size: number,
    vertexBuffer: any,
    vertices: number[],
    vertSize: number,

    end(): void,
    begin(spriteBatch: SpriteBatch, renderSession: RenderSession): void,
    destroy(removeView?: boolean): void,
    flush(): void,
    render(spriteBatch: SpriteBatch): void,
    renderSprite(sprite: Sprite): void,
    setContext(gl: WebGLRenderingContext): void,
    start(): void,
    stop(): void,
  }

  declare class WebGLFilterManager {
    filterStack: AbstractFilter[],
    transparent: boolean,
    offsetX: number,
    offsetY: number,

    applyFilterPass(
      filter: AbstractFilter,
      filterArea: Texture,
      width: number,
      height: number,
    ): void,
    begin(renderSession: RenderSession, buffer: ArrayBuffer): void,
    destroy(): void,
    initShaderBuffers(): void,
    popFilter(): void,
    pushFilter(filterBlock: FilterBlock): void,
    setContext(gl: WebGLRenderingContext): void,
  }

  declare class WebGLGraphics {
    static graphicsDataPool: any[],

    static renderGraphics(
      graphics: Graphics,
      renderRession: RenderSession,
    ): void,
    static updateGraphics(graphics: Graphics, gl: WebGLRenderingContext): void,
    static switchMode(webGL: WebGLRenderingContext, type: number): any,
    static buildRectangle(graphicsData: GraphicsData, webGLData: any): void,
    static buildRoundedRectangle(
      graphicsData: GraphicsData,
      webGLData: any,
    ): void,
    static quadraticBezierCurve(
      fromX: number,
      fromY: number,
      cpX: number,
      cpY: number,
      toX: number,
      toY: number,
    ): number[],
    static buildCircle(graphicsData: GraphicsData, webGLData: any): void,
    static buildLine(graphicsData: GraphicsData, webGLData: any): void,
    static buildComplexPoly(graphicsData: GraphicsData, webGLData: any): void,
    static buildPoly(graphicsData: GraphicsData, webGLData: any): boolean,

    reset(): void,
    upload(): void,
  }

  declare class WebGLGraphicsData {
    constructor(gl: WebGLRenderingContext): this,

    gl: WebGLRenderingContext,
    glPoints: any[],
    color: number[],
    points: any[],
    indices: any[],
    buffer: WebGLBuffer,
    indexBuffer: WebGLBuffer,
    mode: number,
    alpha: number,
    dirty: boolean,

    reset(): void,
    upload(): void,
  }

  declare class WebGLMaskManager {
    destroy(): void,
    popMask(renderSession: RenderSession): void,
    pushMask(maskData: any[], renderSession: RenderSession): void,
    setContext(gl: WebGLRenderingContext): void,
  }

  declare class WebGLRenderer {
    static createWebGLTexture(
      texture: Texture,
      gl: WebGLRenderingContext,
    ): void,

    constructor(game: Phaser.Game): this,

    game: Phaser.Game,
    type: number,
    resolution: number,
    transparent: boolean,
    autoResize: boolean,
    preserveDrawingBuffer: boolean,
    clearBeforeRender: boolean,
    width: number,
    height: number,
    currentBatchedTextures: string[],
    view: HTMLCanvasElement,
    projection: Point,
    offset: Point,
    shaderManager: WebGLShaderManager,
    spriteBatch: WebGLSpriteBatch,
    maskManager: WebGLMaskManager,
    filterManager: WebGLFilterManager,
    stencilManager: WebGLStencilManager,
    blendModeManager: WebGLBlendModeManager,
    renderSession: RenderSession,

    initContext(): void,
    render(stage: DisplayObjectContainer): void,
    renderDisplayObject(
      displayObject: DisplayObject,
      projection: Point,
      buffer: WebGLBuffer,
    ): void,
    resize(width: number, height: number): void,
    updateTexture(texture: Texture): void,
    destroy(): void,
    mapBlendModes(): void,
    setTexturePriority(textureNameCollection: string[]): string[],
  }

  declare class WebGLShaderManager {
    maxAttibs: number,
    attribState: any[],
    stack: any[],
    tempAttribState: any[],

    destroy(): void,
    setAttribs(attribs: ShaderAttribute[]): void,
    setContext(gl: WebGLRenderingContext): void,
    setShader(shader: IPixiShader): boolean,
  }

  declare class WebGLStencilManager {
    stencilStack: any[],
    reverse: boolean,
    count: number,

    bindGraphics(
      graphics: Graphics,
      webGLData: any[],
      renderSession: RenderSession,
    ): void,
    destroy(): void,
    popStencil(
      graphics: Graphics,
      webGLData: any[],
      renderSession: RenderSession,
    ): void,
    pushStencil(
      graphics: Graphics,
      webGLData: any[],
      renderSession: RenderSession,
    ): void,
    setContext(gl: WebGLRenderingContext): void,
  }

  declare class WebGLSpriteBatch {
    blendModes: number[],
    colors: number[],
    currentBatchSize: number,
    currentBaseTexture: Texture,
    defaultShader: AbstractFilter,
    dirty: boolean,
    drawing: boolean,
    indices: number[],
    lastIndexCount: number,
    positions: number[],
    textures: Texture[],
    shaders: IPixiShader[],
    size: number,
    sprites: any[],
    vertices: number[],
    vertSize: number,

    begin(renderSession: RenderSession): void,
    destroy(): void,
    end(): void,
    flush(shader?: IPixiShader): void,
    render(sprite: Sprite): void,
    renderBatch(texture: Texture, size: number, startIndex: number): void,
    renderTilingSprite(sprite: TilingSprite): void,
    setBlendMode(blendMode: BlendMode): void,
    setContext(gl: WebGLRenderingContext): void,
    start(): void,
    stop(): void,
  }

  declare class RenderTexture extends Texture {
    constructor(
      width?: number,
      height?: number,
      renderer?: PixiRenderer,
      scaleMode?: ScaleMode,
      resolution?: number,
    ): this,

    frame: Rectangle,
    baseTexture: BaseTexture,
    renderer: PixiRenderer,
    resolution: number,
    valid: boolean,

    clear(): void,
    getBase64(): string,
    getCanvas(): HTMLCanvasElement,
    getImage(): HTMLImageElement,
    resize(width: number, height: number, updateBase: boolean): void,
    render(
      displayObject: DisplayObject,
      matrix?: Matrix,
      clear?: boolean,
    ): void,
  }

  declare class BoneData {
    constructor(name: string, parent?: any): this,

    name: string,
    parent: any,
    length: number,
    x: number,
    y: number,
    rotation: number,
    scaleX: number,
    scaleY: number,
  }

  declare class SlotData {
    constructor(name: string, boneData: BoneData): this,

    name: string,
    boneData: BoneData,
    r: number,
    g: number,
    b: number,
    a: number,
    attachmentName: string,
  }

  declare class Bone {
    constructor(boneData: BoneData, parent?: any): this,

    data: BoneData,
    parent: any,
    yDown: boolean,
    x: number,
    y: number,
    rotation: number,
    scaleX: number,
    scaleY: number,
    worldRotation: number,
    worldScaleX: number,
    worldScaleY: number,

    updateWorldTransform(flipX: boolean, flip: boolean): void,
    setToSetupPose(): void,
  }

  declare class Slot {
    constructor(slotData: SlotData, skeleton: Skeleton, bone: Bone): this,

    data: SlotData,
    skeleton: Skeleton,
    bone: Bone,
    r: number,
    g: number,
    b: number,
    a: number,
    attachment: RegionAttachment,
    setAttachment(attachment: RegionAttachment): void,
    setAttachmentTime(time: number): void,
    getAttachmentTime(): number,
    setToSetupPose(): void,
  }

  declare class Skin {
    constructor(name: string): this,

    name: string,
    attachments: any,

    addAttachment(
      slotIndex: number,
      name: string,
      attachment: RegionAttachment,
    ): void,
    getAttachment(slotIndex: number, name: string): void,
  }

  declare class Animation {
    constructor(
      name: string,
      timelines: ISpineTimeline[],
      duration: number,
    ): this,

    name: string,
    timelines: ISpineTimeline[],
    duration: number,
    apply(skeleton: Skeleton, time: number, loop: boolean): void,
    min(skeleton: Skeleton, time: number, loop: boolean, alpha: number): void,
  }

  declare class Curves {
    constructor(frameCount: number): this,

    curves: number[],

    setLinear(frameIndex: number): void,
    setStepped(frameIndex: number): void,
    setCurve(
      frameIndex: number,
      cx1: number,
      cy1: number,
      cx2: number,
      cy2: number,
    ): void,
    getCurvePercent(frameIndex: number, percent: number): number,
  }

  declare interface ISpineTimeline {
    curves: Curves,
    frames: number[],

    getFrameCount(): number,
    apply(skeleton: Skeleton, time: number, alpha: number): void,
  }

  declare class RotateTimeline {
    constructor(frameCount: number): this,

    curves: Curves,
    frames: number[],
    boneIndex: number,

    getFrameCount(): number,
    setFrame(frameIndex: number, time: number, angle: number): void,
    apply(skeleton: Skeleton, time: number, alpha: number): void,
  }

  declare class TranslateTimeline {
    constructor(frameCount: number): this,

    curves: Curves,
    frames: number[],
    boneIndex: number,

    getFrameCount(): number,
    setFrame(frameIndex: number, time: number, x: number, y: number): void,
    apply(skeleton: Skeleton, time: number, alpha: number): void,
  }

  declare class ScaleTimeline {
    constructor(frameCount: number): this,

    curves: Curves,
    frames: number[],
    boneIndex: number,

    getFrameCount(): number,
    setFrame(frameIndex: number, time: number, x: number, y: number): void,
    apply(skeleton: Skeleton, time: number, alpha: number): void,
  }

  declare class ColorTimeline {
    constructor(frameCount: number): this,

    curves: Curves,
    frames: number[],
    boneIndex: number,

    getFrameCount(): number,
    setFrame(
      frameIndex: number,
      time: number,
      r: number,
      g: number,
      b: number,
      a: number,
    ): void,
    apply(skeleton: Skeleton, time: number, alpha: number): void,
  }

  declare class AttachmentTimeline {
    constructor(frameCount: number): this,

    curves: Curves,
    frames: number[],
    attachmentNames: string[],
    slotIndex: number,

    getFrameCount(): number,
    setFrame(frameIndex: number, time: number, attachmentName: string): void,
    apply(skeleton: Skeleton, time: number, alpha: number): void,
  }

  declare class SkeletonData {
    bones: Bone[],
    slots: Slot[],
    skins: Skin[],
    animations: Animation[],
    defaultSkin: Skin,

    findBone(boneName: string): Bone,
    findBoneIndex(boneName: string): number,
    findSlot(slotName: string): Slot,
    findSlotIndex(slotName: string): number,
    findSkin(skinName: string): Skin,
    findAnimation(animationName: string): Animation,
  }

  declare class Skeleton {
    constructor(skeletonData: SkeletonData): this,

    data: SkeletonData,
    bones: Bone[],
    slots: Slot[],
    drawOrder: any[],
    x: number,
    y: number,
    skin: Skin,
    r: number,
    g: number,
    b: number,
    a: number,
    time: number,
    flipX: boolean,
    flipY: boolean,

    updateWorldTransform(): void,
    setToSetupPose(): void,
    setBonesToSetupPose(): void,
    setSlotsToSetupPose(): void,
    getRootBone(): Bone,
    findBone(boneName: string): Bone,
    fineBoneIndex(boneName: string): number,
    findSlot(slotName: string): Slot,
    findSlotIndex(slotName: string): number,
    setSkinByName(skinName: string): void,
    setSkin(newSkin: Skin): void,
    getAttachmentBySlotName(
      slotName: string,
      attachmentName: string,
    ): RegionAttachment,
    getAttachmentBySlotIndex(
      slotIndex: number,
      attachmentName: string,
    ): RegionAttachment,
    setAttachment(slotName: string, attachmentName: string): void,
    update(data: number): void,
  }

  declare class RegionAttachment {
    offset: number[],
    uvs: number[],
    x: number,
    y: number,
    rotation: number,
    scaleX: number,
    scaleY: number,
    width: number,
    height: number,
    rendererObject: any,
    regionOffsetX: number,
    regionOffsetY: number,
    regionWidth: number,
    regionHeight: number,
    regionOriginalWidth: number,
    regionOriginalHeight: number,

    setUVs(u: number, v: number, u2: number, v2: number, rotate: number): void,
    updateOffset(): void,
    computeVertices(x: number, y: number, bone: Bone, vertices: number[]): void,
  }

  declare class AnimationStateData {
    constructor(skeletonData: SkeletonData): this,

    skeletonData: SkeletonData,
    animationToMixTime: any,
    defaultMix: number,

    setMixByName(fromName: string, toName: string, duration: number): void,
    setMix(from: string, to: string): number,
  }

  declare class AnimationState {
    constructor(stateData: any): this,

    animationSpeed: number,
    current: any,
    previous: any,
    currentTime: number,
    previousTime: number,
    currentLoop: boolean,
    previousLoop: boolean,
    mixTime: number,
    mixDuration: number,
    queue: Animation[],

    update(delta: number): void,
    apply(skeleton: any): void,
    clearAnimation(): void,
    setAnimation(animation: any, loop: boolean): void,
    setAnimationByName(animationName: string, loop: boolean): void,
    addAnimationByName(
      animationName: string,
      loop: boolean,
      delay: number,
    ): void,
    addAnimation(animation: any, loop: boolean, delay: number): void,
    isComplete(): number,
  }

  declare class SkeletonJson {
    constructor(attachmentLoader: AtlasAttachmentLoader): this,

    attachmentLoader: AtlasAttachmentLoader,
    scale: number,

    readSkeletonData(root: any): SkeletonData,
    readAttachment(skin: Skin, name: string, map: any): RegionAttachment,
    readAnimation(name: string, map: any, skeletonData: SkeletonData): void,
    readCurve(
      timeline: ISpineTimeline,
      frameIndex: number,
      valueMap: any,
    ): void,
    toColor(hexString: string, colorIndex: number): number,
  }

  declare class Atlas {
    static FORMAT: {
      alpha: number,
      intensity: number,
      luminanceAlpha: number,
      rgb565: number,
      rgba4444: number,
      rgb888: number,
      rgba8888: number,
    },

    static TextureFilter: {
      nearest: number,
      linear: number,
      mipMap: number,
      mipMapNearestNearest: number,
      mipMapLinearNearest: number,
      mipMapNearestLinear: number,
      mipMapLinearLinear: number,
    },

    static textureWrap: {
      mirroredRepeat: number,
      clampToEdge: number,
      repeat: number,
    },

    constructor(atlasText: string, textureLoader: AtlasLoader): this,

    textureLoader: AtlasLoader,
    pages: AtlasPage[],
    regions: AtlasRegion[],

    findRegion(name: string): AtlasRegion,
    dispose(): void,
    updateUVs(page: AtlasPage): void,
  }

  declare class AtlasPage {
    name: string,
    format: number,
    minFilter: number,
    magFilter: number,
    uWrap: number,
    vWrap: number,
    rendererObject: any,
    width: number,
    height: number,
  }

  declare class AtlasRegion {
    page: AtlasPage,
    name: string,
    x: number,
    y: number,
    width: number,
    height: number,
    u: number,
    v: number,
    u2: number,
    v2: number,
    offsetX: number,
    offsetY: number,
    originalWidth: number,
    originalHeight: number,
    index: number,
    rotate: boolean,
    splits: any[],
    pads: any[],
  }

  declare class AtlasReader {
    constructor(text: string): this,

    lines: string[],
    index: number,

    trim(value: string): string,
    readLine(): string,
    readValue(): string,
    readTuple(tuple: number): number,
  }

  declare class AtlasAttachmentLoader {
    constructor(atlas: Atlas): this,

    atlas: Atlas,

    newAttachment(skin: Skin, type: number, name: string): RegionAttachment,
  }

  declare class Spine extends DisplayObjectContainer {
    constructor(url: string): this,

    autoUpdate: boolean,
    spineData: any,
    skeleton: Skeleton,
    stateData: AnimationStateData,
    state: AnimationState,
    slotContainers: DisplayObjectContainer[],

    createSprite(slot: Slot, descriptor: { name: string }): Sprite[],
    update(dt: number): void,
  }

  declare var PolyK: {
    Triangulate: (p: number[]) => number[],
  };
}
