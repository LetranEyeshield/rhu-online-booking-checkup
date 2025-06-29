"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const timeSlots = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

export default function BookPage() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    age: "",
    contactNumber: "",
    timeSlot: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      router.push(`/success?id=${data.id}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Book a Check-Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          "firstName",
          "middleName",
          "lastName",
          "address",
          "age",
          "contactNumber",
        ].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            value={(form as any)[field]}
            onChange={handleChange}
            required={field !== "middleName"}
            className="w-full border p-2 rounded"
          />
        ))}
        <select
          name="timeSlot"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot, i) => (
            <option key={i} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Book
        </button>
      </form>
    </div>
  );
}
