import Image from "next/image";
import { motion } from "framer-motion";
import {BoxT} from "@/types/box";

const SingleFeature = ({ feature }: { feature: BoxT }) => {
  const { icon, title, des } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-s border border-white bg-white p-7.5 shadow-solid-3 transition-all
        hover:shadow-solid-4 dark:border-strokedark dark:bg-tp dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-white">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{des}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
