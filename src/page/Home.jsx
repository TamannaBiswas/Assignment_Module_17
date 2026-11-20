import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Home() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Take your business to the{" "}
              <span className="text-indigo-600">next level</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We build modern, fast and responsive websites that make your brand
              stand out.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button>Contact Us</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">View Services</Button>
              </Link>
              <Button variant="outline" onClick={() => setLikes(likes + 1)}>
                👍 Like ({likes})
              </Button>
            </div>
          </div>
          <img
            src="https://picsum.photos/seed/hero/700/500"
            alt="Hero"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle title="Why Choose Us?" subtitle="Our core strengths" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon="⚡"
            title="Fast Delivery"
            text="We complete every project within the agreed deadline."
          />
          <Card
            icon="📱"
            title="Responsive Design"
            text="Looks great on mobile, tablet and desktop."
          />
          <Card
            icon="🛠️"
            title="Ongoing Support"
            text="We stay by your side even after the project is done."
          />
        </div>
      </section>
    </>
  );
}
