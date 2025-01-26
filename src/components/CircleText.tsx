import clsx from "clsx";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  className?: string;
};

export default function CircleText({
  textColor = "#1A871D",
  backgroundColor = "#FFFCFA",
  className,
}: Props) {
  const textLength = 2 * Math.PI * 69;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      xmlSpace="preserve"
      className={clsx("circle-text", className)}
      aria-labelledby="circle-text"
    >
      <title id="circle-text">Ciesz się życiem. Ciesz się smakiem.</title>
      <defs>
        <circle id="circlePath" cx="100" cy="100" r="69" />
      </defs>
      <circle cx="100" cy="100" r="100" fill={backgroundColor} />
      <g>
        <use xlinkHref="#circlePath" fill="none" />
        <text
          fill={textColor}
          className="origin-center animate-spin-slow text-3xl font-bold"
          textLength={textLength}
          lengthAdjust="spacing"
        >
          <textPath xlinkHref="#circlePath">
            Ciesz się smakiem, kochaj i raduj |&nbsp;
          </textPath>
        </text>
      </g>
    </svg>
  );
}
