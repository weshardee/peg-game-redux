// @flow
type Props = {
  x?: number,
  y?: number,
  rotation?: number,
};

export default function transform(props: Props): string {
  const transforms: Array<string> = [];
  if (props.x) {
    transforms.push(`translateX(${props.x}px)`);
  }
  if (props.y) {
    transforms.push(`translateY(${props.y}px)`);
  }
  if (props.rotation) {
    transforms.push(`rotate(${props.rotation}turn)`);
  }
  return transforms.join(' ');
}
