import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-screen overflow-hidden bg-[#FE6334] pb-20 text-[#FEE832]"
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
        <div className="text-[34vw]">Soda</div>
        <div className="grid justify-center gap-[3vw] text-[28vw] md:flex md:text-[9vw]">
          <span className="inline-block">która </span>
          <span className="inline-block max-md:text-[40vw]">jest </span>
          <span className="inline-block max-md:text-[24vw]">bardzo</span>
        </div>
        <div className="text-[21vw]">zdrowa</div>
      </h2>
    </section>
  );
};

export default BigText;
