interface WrappedTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
}

const WrappedTick: React.FC<WrappedTickProps> = ({ x = 0, y = 0, payload }) => {
  if (!payload) return null;

  const words = payload.value.split(" ");

  return (
    <text x={x} y={y + 10} textAnchor="middle" fill="#666" fontSize={12}>
      {words.map((word, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 12}>
          {word}
        </tspan>
      ))}
    </text>
  );
};

export default WrappedTick;
