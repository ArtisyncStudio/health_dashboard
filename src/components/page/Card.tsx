"use client";

interface CardProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ width, height, children }) => {
  return (
    <div
      className="ml-4 flex flex-col overflow-auto rounded-lg p-6"
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
