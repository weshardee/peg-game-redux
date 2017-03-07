// @flow
const loadedImages = [];
export default function preload(src: string): void {
  const img = new Image();
  img.src = src;
  loadedImages.push(img);
}
