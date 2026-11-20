export default function Card({ icon, title, text }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
      {icon && <div className="mb-3 text-4xl">{icon}</div>}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
