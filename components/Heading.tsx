import { HeadingProps } from "@/utils/props";

const Heading: React.FC<HeadingProps> = ({
  text,
  enabled,
  size,
  weight,
  fontFamily,
}) => {
  const getTextWeight = (weight: number) => {
    switch (weight) {
      case 1:
        return "font-thin";
      case 2:
        return "font-light";
      case 3:
        return "font-normal";
      case 4:
        return "font-semibold";
      case 5:
        return "font-bold";
      default:
        return "font-normal";
    }
  };

  return (
    <p
      className={`${getTextWeight(weight)} ${
        enabled ? "" : "hidden"
      } font-${fontFamily} leading-none mb-4`}
      style={{ fontSize: `${Math.max(1, size * 5)}%` }}
    >
      {text}
    </p>
  );
};

export default Heading;
