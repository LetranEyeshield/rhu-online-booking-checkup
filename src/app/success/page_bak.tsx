// import Link from "next/link";
// import Image from "next/image";
// import { connectDB } from "../lib/mongodb";
// import { Booking } from "@/models/Booking";

// export default async function SuccessPage({
//   searchParams,
// }: {
//   searchParams: { id: string };
// }) {
//   await connectDB();
//   const booking = await Booking.findById(searchParams.id);

//   if (!booking) return <div>Booking not found.</div>;

//   return (
//     <>
//       <div className="success-div max-w-xl mx-auto p-6 bg-white shadow-xl border-1 border-yellow-300 rounded-lg mt-10 text-center">
//         <Image
//           className="best-rhu-logo mx-auto"
//           src={"/best-rhu-logo.jpg"}
//           alt={"Best RHU-Manaoag Logo"}
//           width={80}
//           height={800}
//         />
//         <h1 className="text-2xl font-bold mb-4 mt-7">Booking Confirmation</h1>
//         <p>
//           <strong>Booking ID:</strong> {booking.bookingId}
//         </p>
//         <p>
//           <strong>Name:</strong> {booking.FirstName} {booking.MiddleName}{" "}
//           {booking.LastName}
//         </p>
//         <p>
//           <strong>Address:</strong> {booking.Address}
//         </p>
//         <p>
//           <strong>Age:</strong> {booking.Age}
//         </p>
//         <p>
//           <strong>Contact:</strong> {booking.ContactNumber}
//         </p>
//         <p>
//           <strong>Time Slot:</strong> {booking.timeSlot}
//         </p>
//         <p>
//           <strong>Date:</strong> {booking.date}
//         </p>
//         <p className="text-sm text-gray-500 mt-6">
//           Please take a screenshot of this booking slip or Write down the
//           Booking ID
//         </p>
//       </div>
//       <div className="text-center">
//         <Link
//           className="text-white inline-block py-3 px-5 rounded bg-blue-600 text-1xl mt-6"
//           href={"/book"}
//         >
//           Go Back
//         </Link>
//       </div>
//     </>
//   );
// }
