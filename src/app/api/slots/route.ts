import { connectDB } from "../../lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextResponse } from "next/server";

const slots = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) return NextResponse.json({});

  await connectDB();
  const bookings = await Booking.find({ date });

  const counts: Record<string, number> = {};
  slots.forEach((slot) => (counts[slot] = 0));

  for (const booking of bookings) {
    if (booking.timeSlot in counts) {
      counts[booking.timeSlot]++;
    }
  }

  return NextResponse.json(counts);
}
