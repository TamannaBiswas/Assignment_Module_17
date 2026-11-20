import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">MyBrand</h3>
          <p className="text-sm">Beautiful and modern web solutions.</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Contact</h4>
          <p className="text-sm">hello@mybrand.com</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
