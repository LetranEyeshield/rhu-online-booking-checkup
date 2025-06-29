import Link from "next/link";
import { connectDB } from "../lib/mongodb";
import { Booking } from "@/models/Booking";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  await connectDB();
  const booking = await Booking.findById(searchParams.id);

  if (!booking) return <div>Booking not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      <p>
        <strong>Name:</strong> {booking.firstName} {booking.middleName}{" "}
        {booking.lastName}
      </p>
      <p>
        <strong>Address:</strong> {booking.address}
      </p>
      <p>
        <strong>Age:</strong> {booking.age}
      </p>
      <p>
        <strong>Contact:</strong> {booking.contactNumber}
      </p>
      <p>
        <strong>Time Slot:</strong> {booking.timeSlot}
      </p>
      <p>
        <strong>Date:</strong> {booking.date}
      </p>
      <p className="text-sm text-gray-500 mt-4">
        Please take a screenshot of this booking slip.
      </p>
      <Link href={"/book"}>Go Back</Link>
    </div>
  );
}
