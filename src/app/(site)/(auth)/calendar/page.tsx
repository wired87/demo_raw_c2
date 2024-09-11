import Calendar from "@/components/Dashboard/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Dashboard/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
