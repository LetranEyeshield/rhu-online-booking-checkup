// import mongoose, { Schema } from "mongoose";

// const BookingSchema = new Schema({
//   bookingId: String,
//   FirstName: String,
//   MiddleName: String,
//   LastName: String,
//   Address: String,
//   Age: Number,
//   ContactNumber: String,
//   timeSlot: String,
//   date: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export const Booking =
//   mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
import mongoose, { Schema, Document, Model } from "mongoose";

// Step 1: Define the TypeScript interface
export interface BookingType extends Document {
  BookingId: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Address: string;
  Age: number;
  ContactNumber: string;
  timeSlot: string;
  date: string;
  createdAt: Date;
}

// Step 2: Define the schema with the correct types
const BookingSchema = new Schema<BookingType>({
  // bookingId: { type: String, required: true },
  BookingId: String,
  FirstName: String,
  MiddleName: String,
  LastName: String,
  Address: String,
  Age: Number,
  ContactNumber: String,
  timeSlot: String,
  date: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Step 3: Export the typed model
export const Booking: Model<BookingType> =
  mongoose.models.Booking ||
  mongoose.model<BookingType>("Booking", BookingSchema);
