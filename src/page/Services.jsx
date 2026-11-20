import PageBanner from "../components/PageBanner.jsx";
import Card from "../components/Card.jsx";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    text: "Modern websites and web apps built with React and Next.js.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    text: "User-friendly and attractive designs.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    text: "Perfect layouts on every screen size.",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    text: "Optimization for better search engine rankings.",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    text: "Online stores and payment solutions.",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    text: "Regular updates and technical support.",
  },
];

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" subtitle="What we do" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </section>
    </>
  );
}
