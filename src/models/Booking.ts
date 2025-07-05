import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  bookingId: String,
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

export const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
