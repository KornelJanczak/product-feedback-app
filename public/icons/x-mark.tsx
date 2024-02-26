export default function XMarkIcon({
  width,
  height,
  stroke,
}: {
  width?: number;
  height?: number;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1.5"
      stroke={stroke ? stroke : "#fff"}
      width={width ? width : 22}
      height={height ? height : 22}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
