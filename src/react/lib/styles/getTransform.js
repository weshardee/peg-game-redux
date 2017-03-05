// @flow
type Props = {
  x?: number,
  y?: number,
  rotation?: number,
  scale?: number,
  pivot?: { x: number, y: number },
  size?: { w: number, h: number },
};

const DEFAULT_PIVOT = { x: 0.5, y: 0.5 };

export default function getTransform(props: Props): string {
  const pivot = props.pivot ? props.pivot : DEFAULT_PIVOT;
  const width = props.size ? props.size.w : 0;
  const height = props.size ? props.size.h : 0;
  const transforms: Array<string> = [];
  if (props.x) {
    transforms.push(`translateX(${props.x - pivot.x * width}px)`);
  }
  if (props.y) {
    transforms.push(`translateY(${props.y - pivot.y * height}px)`);
  }
  if (props.rotation) {
    transforms.push(`rotate(${props.rotation}turn)`);
  }
  if (props.scale != null && props.scale !== 1) {
    transforms.push(`scale(${props.scale})`);
  }
  return transforms.join(' ');
}
