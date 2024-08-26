import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Klaus Schäfer",
    designation: "Customer",
    content:
      "Very cool Marketplace with a lot of possibilities within the future! ",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Yusuf Ramirez",
    designation: "Customer",
    content:
      "The process of order was super uncomplicated and I received good help from the support.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "unknown",
    content:
      "Im looking forward to the own BCI product line!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full h-[700px] flex items-center justify-center flex-col">

        <SectionTitle
          title="What our Customers Say"
          des="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
