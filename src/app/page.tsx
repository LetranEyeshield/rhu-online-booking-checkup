import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper flex flex-col">
      <Header />
      <Banner />
      <main className="flex items-center flex-col">
        <h2 className="main-h2 text-2xl md:text-4xl mt-6">
          Online Check-up Booking System
        </h2>
        <div className="guidelines-div flex flex-col text-center bg-yellow-100 px-12 py-5 mt-6">
          <h3 className="text-2xl md:text-3xl">
            Guidelines for filling the form
          </h3>
          <ol className="text-left mt-4">
            <li>Fill the First Name, Middle Name and Last Name fields</li>
            <li>Fill the Address field</li>
            <li>Age field must be number only</li>
            <li>Number field must be number only</li>
          </ol>
        </div>
        <Link
          className="book-link text-2xl bg-blue-600 text-white py-2 px-3 hover:bg-blue-500 mt-6 rounded"
          href={"/book"}
        >
          Book Now
        </Link>
      </main>
      <Footer />
    </div>
  );
}
