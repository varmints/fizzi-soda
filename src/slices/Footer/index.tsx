import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FizziLogo } from "@/components/FizziLogo";

/**
 * Props for `TextInCircle`.
 */
export type TextInCircleProps = SliceComponentProps<Content.TextInCircleSlice>;

/**
 * Component for "TextInCircle" Slices.
 */
const TextInCircle = ({ slice }: TextInCircleProps): JSX.Element => {
  const cx = 100;
  const cy = 100;
  const r = 84;
  const textLength = 2 * Math.PI * r;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <footer className="bg-[#FEE832] text-[#FE6334]">
        <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
          <FizziLogo />
          <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              xmlSpace="preserve"
              className="circle-text"
              aria-labelledby="circle-text"
            >
              <title id="circle-text">{slice.primary.text_in_circle}</title>

              <path
                id="circlePath"
                d={`
                  M ${cx} ${cy}
                  m ${r}, 0
                  a ${r},${r} 0 1,0 ${-r * 2},0
                  a ${r},${r} 0 1,0 ${r * 2},0
                `}
              />

              <circle cx="100" cy="100" r="100" fill="#FFFCFA" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text
                  fill="#1A871D"
                  className="origin-center animate-spin-slow text-4xl font-bold"
                  textLength={textLength}
                  lengthAdjust="spacing"
                >
                  <textPath xlinkHref="#circlePath">
                    {slice.primary.text_in_circle}&nbsp;
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default TextInCircle;
