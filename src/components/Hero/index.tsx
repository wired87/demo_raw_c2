"use client"
import Image from "next/image";
import {newsData} from "@/components/Hero/data";
import {NewsCarousel} from "@/components/Hero/OfferCarousel";
const text= "Explore unprecedented comfort with the C-1, the most comfortable and Innovative device" +
  "in a new world of BCI "

const Hero = () => {
  return (
    <>
      <section

        className="relative w-full overflow-hidden bg-gradient-to-tr from-red-800 to-black pt-[120px] md:pt-[130px] lg:pt-[160px] min-h-[1100px]"
      >
        <Image alt={"image.kkk"} src={"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202211/MIT-Neural-Networks-01_0.gif?itok=JNbooIWQ"} className={"object-cover"} fill unoptimized />
        <div className="w-full">
          <div className="-mx-4 flex flex-wrap w-full items-center">
            <div className="w-full px-4">
              <div
                className="hero-content w-full relative z-10000 wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className={"w-full flex flex-col justify-center items-center"}>
                  <h1
                    className="mb-6 z-1000 text-center md:max-w-[1000px] text-6xl text-gray-200 gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                    Most Innovative Brain Computer Interface for your daily life
                  </h1>
                  <p className="text-center text-3xl font-bold tracking-[0.05em] leading-slug  text-gray-400 md:max-w-[800px]">
                    Explore unprecedented comfort
                   with the
                    <span
                      className="bg-clip-text
                    text-gray-200 transition hover:brightness-125"
                    >{" "}C-1
                  </span>{" "}, the
                    <span
                      className="bg-clip-text
                    text-gray-200 transition hover:brightness-125"
                    >{" "}most comfortable and Innovative
                  </span>{" "}
                     device in a
                    <span
                      className="bg-clip-text
                    text-gray-200 transition hover:brightness-125"
                    >{" "}new world of BCI
                  </span>{" "}
                  </p>
                </div>



                {/*<div className="justify-center flex w-full">
                  <Suspense fallback={ <SearchSkeleton /> }>
                    <Search formClass={"mb-9 relative w-full lg:w-80 xl:w-full max-w-[800px]"}/>
                  </Suspense>
                </div>
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
                </ul>*/}
                <div>
                  {/*icon from every body part <Circles />*/}
                </div>
              </div>
            </div>

          </div>

        </div>
        <h1
          className="mb-6 z-1000 text-left text-6xl text-gray-200 gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
          Whats new?
        </h1>
        <NewsCarousel data={newsData}/>
      </section>
    </>
  );
};

export default Hero;
/*
  <div className={"w-full flex flex-col justify-center items-center"}>

                  <h1
                    className="mb-6 z-1000 text-center md:max-w-[1000px] text-6xl text-gray-200 gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                    Most Innovative Brain Computer Interface for your daily life
                  </h1>

                  <p className="text-center text-2xl leading-tight font-bold text-gray-200 gap-y-6 md:max-w-[800px]">
                    Explore unprecedented comfort
                    <span
                      className="bg-clip-text
                    text-primary transition hover:brightness-125"
                    >{" "}with the C-1, the
                  </span>{" "}
                    most comfortable and Innovative device
                    <span
                      className="bg-clip-text
                    text-primary transition hover:brightness-125"
                    >{" "}in a new world of BCI
                  </span>{" "}
                  </p>

                </div>
 */