import React, { useState } from "react";

const DealerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    medicineRequest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle API call or email here
    console.log("Form submitted", formData);
  };

  return (
    <section className="min-h-[90vh] bg-[#fdfbf7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl md:text-2xl font-semibold mb-8 text-center text-teal-800">
          Dealer Enquiry & Medicine Order Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full md:col-span-2"
          />
          <textarea
            name="medicineRequest"
            placeholder="Medicines Required / Order List"
            value={formData.medicineRequest}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full md:col-span-2 h-28"
            required
          ></textarea>
          <textarea
            name="message"
            placeholder="Additional Notes / Enquiry"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full md:col-span-2 h-24"
          ></textarea>

          <button
            type="submit"
            className="bg-green-800 hover:bg-green-700 text-white font-medium py-3 rounded-xl transition md:col-span-2"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default DealerForm;
