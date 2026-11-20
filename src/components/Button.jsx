export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-5 py-2.5 font-medium transition active:scale-95 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
