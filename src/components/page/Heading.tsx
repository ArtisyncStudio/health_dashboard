interface HeadingProps {
  title?: string;
  description?: string;
  titleSize?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description, titleSize }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className={`font-harc-alt py-7 font-semibold ${titleSize}`}>{title}</p>
      <p className="font-harc-main w-3/4 md:w-1/2">{description}</p>
    </div>
  );
};

export default Heading;
