import { useState } from "react";
import PageBanner from "../components/PageBanner.jsx";
import Button from "../components/Button.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form); // No backend, so we only log the data
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch with us" />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p>📍 Dhaka, Bangladesh</p>
          <p>📧 hello@mybrand.com</p>
          <p>📞 +880 1234-567890</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl bg-white p-6 shadow"
        >
          {sent && (
            <p className="rounded-lg bg-emerald-100 px-4 py-2 text-emerald-700">
              ✅ Your message has been sent successfully!
            </p>
          )}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className={inputClass}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
            className={inputClass}
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </section>
    </>
  );
}
