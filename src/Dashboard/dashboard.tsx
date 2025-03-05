import { AboutUs } from "../Dashboard/aboutUs";
import { FAQ } from "../Dashboard/FAQ";

export function Dashboard() {
  return (
    <div className="dark:from-[#343438] dark:to-[#1c1c27] dark:text-white bg-linear-to-b from-[#ffffff] to-[#74748b]">
      <AboutUs />
      <FAQ />
    </div>
  );
}