import PageBanner from "../components/PageBanner.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";

const stats = [
  { n: "50+", l: "Projects" },
  { n: "30+", l: "Clients" },
  { n: "5+", l: "Years of Experience" },
  { n: "10+", l: "Team Members" },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Get to know us" />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <img
          src="https://picsum.photos/seed/about/700/500"
          alt="About"
          className="w-full rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="mb-3 text-slate-600">
            We are a team of passionate developers and designers who love
            solving people's problems with technology.
          </p>
          <p className="text-slate-600">
            Our goal is to create simple, beautiful and effective digital
            experiences.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-4xl font-extrabold text-indigo-600">{s.n}</p>
              <p className="text-slate-600">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle title="Our Values" />
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            icon="🎯"
            title="Mission"
            text="Deliver the best service without compromising on quality."
          />
          <Card
            icon="👁️"
            title="Vision"
            text="Become the leading web solutions company in the country."
          />
          <Card
            icon="🤝"
            title="Trust"
            text="Stand by our clients with transparency and sincerity."
          />
        </div>
      </section>
    </>
  );
}
