"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const allSlots = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

type SlotStatus = {
  [slot: string]: number;
};

export default function BookPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    age: "",
    contactNumber: "",
    timeSlot: "",
    date: "",
  });

  const [slotStatus, setSlotStatus] = useState<SlotStatus>({});

  useEffect(() => {
    if (form.date) {
      fetch(`/api/slots?date=${form.date}`)
        .then((res) => res.json())
        .then((data) => setSlotStatus(data));
    }
  }, [form.date]);

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
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

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
          disabled={!form.date}
        >
          <option value="">Select Time Slot</option>
          {allSlots.map((slot, i) => {
            const filled = slotStatus[slot] || 0;
            const remaining = 4 - filled;
            return (
              <option key={i} value={slot} disabled={remaining <= 0}>
                {slot} {remaining <= 0 ? "(Full)" : `(${remaining} spots left)`}
              </option>
            );
          })}
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
