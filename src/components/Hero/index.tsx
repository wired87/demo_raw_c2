"use client"
import Image from "next/image";
import Link from "next/link";
import {Circles} from "@/components/Hero/circles";
import {OfferCarousel} from "@/components/Hero/OfferCarousel";
import {sliderData} from "@/components/Hero/data";

const Hero = () => {
  return (
    <>
      <section

        className="relative overflow-hidden bg-gradient-to-tr from-red-800 to-black pt-[120px] md:pt-[130px] lg:pt-[160px] min-h-[1300px]"
      >
        <Image alt={"image.kkk"} src={"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202211/MIT-Neural-Networks-01_0.gif?itok=JNbooIWQ"} className={"object-cover"} fill unoptimized />
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content relative z-10000 wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl z-1000 font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  The future is today!
                </h1>
                <h1 className="text-center text-6xl leading-tight font-bold text-gray-200 gap-y-4">
                  Explore the
                  <span
                    className="bg-clip-text
                    text-primary transition hover:brightness-125"
                  >{" "}worlds
                  </span>{" "}
                    most innovative


                  <span
                    className="bg-clip-text
                    text-primary transition hover:brightness-125"
                  >{" "}Brain Technologies
                  </span>{" "}

                  at One
                  <span
                    className="bg-clip-text
                    text-primary transition hover:brightness-125"
                  >{" "}Marketplace
                  </span>{" "}
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">

                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="/vision"
                      className="bg-tpBtn text-dark inline-flex items-center justify-center rounded-md bg-white
                      px-7 py-[14px] text-center text-base font-medium shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Explore our Products
                    </Link>
                  </li>
                </ul>
                <div>
                  {/*icon from every body part*/}
                </div>
              </div>
            </div>
            <Circles />
          </div>

        </div>
        <OfferCarousel data={sliderData}/>
      </section>
    </>
  );
};

export default Hero;
