import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import update from "@/components/Mission/update.png";

const SingleFeatureRight = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <section>
      <div className="mx-auto max-w-c-1235 overflow-hidden  px-4 md:px-8 2xl:px-0 bg-primary">
        <div className="flex items-center gap-8 lg:gap-32.5 px-9 py-9 ">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <h4 className="font-medium uppercase text-black dark:text-white">
              Aestetic first
            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Attractive Designs
            </h2>
            <p>
              Comes with a customizable attractive Design a form that fits 100% your needs.
            </p>
            <div>
              <a
                href="#"
                className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
              >
                  <span className="duration-300 group-hover:pr-2">
                    Explore forms
                  </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right flex justify-center items-center relative mx-auto aspect-[588/526.5]  md:w-1/2"
          >
            <Image
              src={update}
              alt="About"
              width={350}


              className={"w-[290px]"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SingleFeatureRight;
