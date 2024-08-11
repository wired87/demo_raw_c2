import Image from "next/image";

const imgStuff: string[] = [
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/02a88e19-e8be-48d4-a4ac-dc73dd2f0ee7/DSC05378.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/ca3b0476-9c95-414c-be39-0219d2383914/DSC05388.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/1437e960-a8cc-40c7-abcf-dd6b8ddf5a7e/DSC05400.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/ea3d4097-a65a-4aee-90d3-6011a76cab72/DSC05413.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/263df330-49a0-4711-b9f6-ff56459cc919/DSC05419.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/ff265371-accc-4ea0-85dc-a09bcc38e717/DSC05420.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/d7553cd3-c0dd-4d80-90b6-507e389d3cd7/DSC05422.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/6ea7e2fc-bb3b-41b7-afe7-14d9eb864474/DSC05423.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/3cf0d347-3d85-42a4-9bf5-b45c0253c3b4/DSC05424.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/af6d985d-00fb-4570-856d-7497c1f2cf83/DSC05427.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/b5d8c991-368c-4305-9224-25471c3d8c77/DSC05429.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/a5827963-e552-49e8-ac8f-151c71216c60/DSC05430.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/0215cdde-88d4-43cc-b4fc-39a92df531d0/DSC05438.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/ab748103-5227-4bc4-98dc-e9e02f123ecd/DSC05439.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/d4dc8130-500c-4b63-9e7c-27627fb1e8d8/DSC05441.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/286fe770-46bc-4788-aca7-1afe50b16d2a/DSC05445.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/1cc985ef-c779-4876-b88c-a7c8e0bbd53d/DSC05446.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/41fd194d-bc8e-4eae-a893-24a3c8264ca2/DSC05453.jpg.png?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/37402095-0aae-42b6-9706-aeebcc72a58d/DSC05449.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/b462b161-3a15-4977-ab67-c4767544d760/DSC05452.jpg.png?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/b462b161-3a15-4977-ab67-c4767544d760/DSC05452.jpg.png?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/21c5f535-5489-4cbc-9465-2867a03b4799/DSC05447.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/222c3f22-7617-4239-a263-197abbce2712/DSC05448.jpg.png?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/7d1683e3-88d2-41a5-8204-eec5355b5652/DSC05455.jpg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/7d1683e3-88d2-41a5-8204-eec5355b5652/DSC05455.jpg?format=500w",
];

export const GripSection = () => {
  return(
    <div className={"flex flex-col justify-center items-center w-full py-10"}>
      <div className={"flex mb-10 px-20 justify-start items-start w-full"}>
        <h1 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
          ... and the Grip!
        </h1>
      </div>
      <div className={"grid lg:grid-cols-4 grid-cols-3 md:grid-cols-3 gap-3"}>
        {imgStuff.map((item: string, i:number) => (
          <div className={"w-[150px] h-[150px]"} key={i}>
            <Image src={item} alt={"item.ongwIEFB"} width={150} height={150} className={"absolute object-cover"} />
          </div>
        ))}
      </div>
    </div>
  )
}