import { connectDB } from "../../lib/mongodb";
import { Booking } from "../../../models/Booking";
import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     await connectDB();

//     const existing = await Booking.findOne({
//       date: new Date().toISOString().split("T")[0],
//       timeSlot: body.timeSlot,
//     });

//     if (existing) {
//       return NextResponse.json(
//         { message: "Time slot already booked!" },
//         { status: 400 }
//       );
//     }

//     const booking = await Booking.create({
//       ...body,
//       date: new Date().toISOString().split("T")[0],
//     });

//     return NextResponse.json(
//       { message: "Booked successfully!", id: booking._id },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to book! Try again later!", error },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();

    const date = new Date().toISOString().split("T")[0];

    // Count existing bookings for the same time slot and date
    const count = await Booking.countDocuments({
      date: date,
      timeSlot: body.timeSlot,
    });

    if (count >= 4) {
      return NextResponse.json(
        { message: "Time slot is already full. Please choose another one." },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      ...body,
      date,
    });

    return NextResponse.json(
      { message: "Booked successfully!", id: booking._id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to book! Try again later!", error },
      { status: 500 }
    );
  }
}
