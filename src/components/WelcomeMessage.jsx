import { useEffect, useState } from "react";

export default function WelcomeMessage() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="bg-emerald-500 px-4 py-2 text-center text-sm font-medium text-white">
      🎉 Welcome to our website!
      <button onClick={() => setShow(false)} className="ml-3 underline">
        Close
      </button>
    </div>
  );
}
