import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  address: String,
  age: Number,
  contactNumber: String,
  timeSlot: String,
  date: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
