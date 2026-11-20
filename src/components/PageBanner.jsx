export default function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-14 text-center text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-indigo-100">{subtitle}</p>}
    </section>
  );
}
