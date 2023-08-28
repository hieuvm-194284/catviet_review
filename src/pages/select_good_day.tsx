import { SelectGoodDay } from "@/modules/SelectGoodDay";
import { GetStaticPropsContext } from "next";

export default SelectGoodDay;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
    },
  };
};