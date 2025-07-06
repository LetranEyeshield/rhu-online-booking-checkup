// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Link from "next/link";

// const allSlots = [
//   "8:00 AM - 9:00 AM",
//   "9:00 AM - 10:00 AM",
//   "10:00 AM - 11:00 AM",
//   "11:00 AM - 12:00 PM",
//   "12:00 PM - 1:00 PM",
//   "1:00 PM - 2:00 PM",
//   "2:00 PM - 3:00 PM",
//   "3:00 PM - 4:00 PM",
//   "4:00 PM - 5:00 PM",
// ];

// type SlotStatus = {
//   [slot: string]: number;
// };

// export default function BookPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     FirstName: "",
//     MiddleName: "",
//     LastName: "",
//     Address: "",
//     Age: "",
//     ContactNumber: "",
//     timeSlot: "",
//     date: "",
//   });

//   const [slotStatus, setSlotStatus] = useState<SlotStatus>({});

//   useEffect(() => {
//     if (form.date) {
//       fetch(`/api/slots?date=${form.date}`)
//         .then((res) => res.json())
//         .then((data) => setSlotStatus(data));
//     }
//   }, [form.date]);

//   // const handleChange = (
//   //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   // ) => {
//   //   setForm({ ...form, [e.target.name]: e.target.value });
//   // };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         name === "Age" || name === "ContactNumber"
//           ? value === ""
//             ? ""
//             : parseInt(value)
//           : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await fetch("/api/book", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       router.push(`/success?id=${data.id}`);
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="book-wrapper">
//       <Header />
//       <div className="book-form-div max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//         <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center">
//           Book a Check-Up
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="FirstName"
//             value={form.FirstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="MiddleName"
//             value={form.MiddleName}
//             onChange={handleChange}
//             placeholder="Middle Name"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="LastName"
//             value={form.LastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="Address"
//             value={form.Address}
//             onChange={handleChange}
//             placeholder="Address"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="Age"
//             value={form.Age}
//             onChange={handleChange}
//             placeholder="Age"
//             className="w-full p-2 border rounded mb-4"
//           />
//           <input
//             type="number"
//             name="ContactNumber"
//             value={form.ContactNumber}
//             onChange={handleChange}
//             placeholder="Contact Number"
//             className="w-full p-2 border rounded mb-4"
//           />
//           <input
//             type="date"
//             name="date"
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//           <select
//             name="timeSlot"
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//             disabled={!form.date}
//           >
//             <option value="">Select Time Slot</option>
//             {allSlots.map((slot, i) => {
//               const filled: number = slotStatus[slot] || 0;
//               const remaining: number = 6 - filled;
//               let getRemaining: string = "slots left";
//               if (remaining === 1) {
//                 getRemaining = "slot left";
//               }
//               return (
//                 <option key={i} value={slot} disabled={remaining <= 0}>
//                   {slot}{" "}
//                   {remaining <= 0 ? "(Full)" : `(${remaining} ${getRemaining})`}
//                 </option>
//               );
//             })}
//           </select>

//           <button
//             type="submit"
//             className="text-1xl md:text-2xl bg-blue-600 text-white px-4 py-2 rounded block mx-auto cursor-pointer hover:bg-blue-500"
//           >
//             Book
//           </button>
//         </form>
//       </div>
//       <Link
//         className="home-link text-blue-500 font-bold text-center block text-xl mt-6 mx-auto"
//         href={"/"}
//       >
//         Home
//       </Link>
//       <Footer />
//     </div>
//   );
// }
