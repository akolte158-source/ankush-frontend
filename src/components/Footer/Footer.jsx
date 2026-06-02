import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 lg:grid-cols-5">

        {/* About Section */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-yellow-400">
            About Ankush Kirana
          </h3>

          <p className="text-sm leading-6 text-gray-300">
            Your trusted online grocery store delivering fresh, quality
            products right to your doorstep. Serving the community with
            excellence since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="transition hover:text-yellow-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition hover:text-yellow-300"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-yellow-300"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="transition hover:text-yellow-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-yellow-400">
            Categories
          </h3>

          <ul className="space-y-2">
            <li>
              <Link
                to="/category/groceries"
                className="transition hover:text-yellow-300"
              >
                Groceries
              </Link>
            </li>

            <li>
              <Link
                to="/category/dairy-eggs"
                className="transition hover:text-yellow-300"
              >
                Dairy & Eggs
              </Link>
            </li>

            <li>
              <Link
                to="/category/vegetables"
                className="transition hover:text-yellow-300"
              >
                Vegetables
              </Link>
            </li>

            <li>
              <Link
                to="/category/beverages"
                className="transition hover:text-yellow-300"
              >
                Beverages
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-yellow-400">
            Contact Info
          </h3>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <span>📍</span>
              478, vikas nagar, airport road, Indore, Madhya Pradesh, 452005
            </p>

            <p className="flex items-center gap-2">
              <span>📞</span>
              +91 9691889878, +91 9753124787
            </p>

            <p className="flex items-center gap-2">
              <span>✉️</span>
              ankush.kirana2022@gmail.com
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-yellow-400">
            Newsletter
          </h3>

          <p className="mb-4 text-sm text-gray-300">
            Subscribe to get special offers and updates
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black transition hover:bg-yellow-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex justify-center gap-5">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black"
          aria-label="Facebook"
        >
          f
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black"
          aria-label="Twitter"
        >
          𝕏
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black"
          aria-label="Instagram"
        >
          📷
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black"
          aria-label="LinkedIn"
        >
          in
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; {currentYear} Ankush Kirana Store. All rights reserved.
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <Link
            to="/privacy"
            className="transition hover:text-yellow-300"
          >
            Privacy Policy
          </Link>

          <span>|</span>

          <Link
            to="/terms"
            className="transition hover:text-yellow-300"
          >
            Terms & Conditions
          </Link>

          <span>|</span>

          <Link
            to="/shipping"
            className="transition hover:text-yellow-300"
          >
            Shipping Info
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;