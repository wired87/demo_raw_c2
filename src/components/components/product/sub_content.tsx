
import Features from "@/components/Features";
import emoInsightData from "@/components/Features/data/emotiv_insight";
import Faq from "@/components/Faq";
import {insightPros, insightPros2} from "@/components/Faq/data/emotiv/insight/insight_pros";
import React from "react";
import TwoCols from "@/components/components/product/two_col_section";
import info from "../../../../public/images/product/emotiv/insight/info.png";
import CTA from "@/components/components/product/arm";

interface SubContenttypes {
  name: string;
}
const mainContent: string = "Revolutionary EEG Sensor Technology"
const subContent: string = "Insight boasts EMOTIV’s proprietary polymer sensor technology. The hydrophilic material does not need gel to maintain conductivity with the skin*. Instead, the sensors draw moisture from the environment, making Insight our most versatile EEG headset without compromising conductivity.\n" +
  "\n" +
  "*Minimal fluid needed."

const pros = [
  {
    title: "EEG sensors",
    content: "5 channels: AF3, AF4, T7, T8, Pz\n\n2 references: CMS/DRL references on left mastoid process\n\nNew three prong gummy sensor: for better hair penetration on Pz\n\nSensor material: Hydrophilic semi-dry polymer"
  },
  {
    title: "EEG signals",
    content: "Sampling rate: 128 samples per second per channel\n\nResolution: 16 bits with 1 LSB = 0.1275μV\n\nFrequency response: 0.5-43Hz, digital notch filters at 50Hz and 60Hz\n\nFiltering: Built in digital 5th order Sinc filter\n\nDynamic range (input referred): 8400 μV(pp)\n\nCoupling mode: AC coupled"
  },
  {
    title: "Connectivity",
    content: "Wireless: Bluetooth Low Energy – Improved radio connectivity, updated antenna with Bluetooth 5 support."
  },
  {
    title: "Motion Sensor",
    content: "IMU part: ICM-20948\n\nAccelerometer: 3-axis +/-8g\n\nGyroscope: 3-axis +/-2000 dps (converted to 4 normalised quaternions)\n\nMagnetometer: 3-axis +/- 12 gauss\n\nSampling rate: 32 Hz\n\nResolution: 16 bits"
  },
  {
    title: "Power",
    content: "Battery: Internal Lithium Polymer battery 480mAh\n\nBattery life: Improve battery life up to 20hrs on a single charge."
  },
  {
    title: "Detection",
    content: "Mental commands: neutral + up to 4 pretrained items per training profile\n\nPerformance metrics: Excitement, Engagement, Relaxation, Interest, Stress, Focus\n\nFacial Expressions: Blink, Wink L/R, Surprise, Frown, Smile, Clench\n\n*Access subject to license. Raw EEG also available\n\nNotice: Limited beta support on Ubuntu & Raspberry Pi, subject to OS changes."
  }
]

const ability = {
  img: "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/5f0d2972-b8bb-4556-8abe-670862b687dd/touch+bg2.png"
}

export const SubContent: React.FC<SubContenttypes> = ({name}) => {
  if (name.includes("Insight")) {
    return(
      <>
        <Features features={emoInsightData}/>
        <TwoCols mainContent={mainContent} subContent={subContent} img={info} />
        <Faq  data={insightPros} data2={insightPros2} faq={false}/>
        <div className="-mx-4 flex flex-wrap justify-center w-full py-4 px-2 h-[500px]">
          {pros.map((pro, i) => (
            <div  key={i} className={"gap-y-3"}>
              <h3>{pro.title}</h3>
              <p>{pro.content}</p>
            </div>
          ))}
        </div>
      </>
    )
  } else if (name.includes("Ability")) {
    return(
      <>
        <CTA img={ability.img} />
      </>
    )
  } else if (name.includes("")) {
    return(
      <></>
    )
  }
}
/*

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Trusted by Global Companies.
            </h2>
            <p className="mx-auto lg:w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2">World Wide Clients</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Downloads</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                865
              </h3>
              <p className="text-lg lg:text-para2">Winning Award</p>
            </motion.div>
          </div>
        </div>
 */