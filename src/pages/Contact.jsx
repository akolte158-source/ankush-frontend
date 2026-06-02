import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '478, vikas nagar, airport road, Indore, Madhya Pradesh, 452005',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 9691889878, +91 9753124787',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'ankush.kirana2022@gmail.com',
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      content: 'Mon-Sun: 8:00 AM - 10:00 PM',
    },
  ];

  const faqs = [
    {
      question: 'What is your delivery time?',
      answer:
        'We offer same-day delivery for orders placed before 2 PM.',
    },
    {
      question: 'Do you deliver outside the city?',
      answer:
        'Currently, we deliver within city limits.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer 7-day returns on unopened products.',
    },
    {
      question: 'Are your products organic?',
      answer:
        'We offer both organic and conventional products.',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="mb-5 text-5xl font-bold">
            Get in Touch
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8">
            We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">
                {info.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {info.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {info.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">

          {/* Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-4xl font-bold">
              Send us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {submitted && (
                <div className="rounded-lg bg-green-100 px-4 py-3 text-green-700">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Name */}
              <div>
                <label className="mb-2 block font-semibold">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block font-semibold">
                  Subject *
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-semibold">
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please enter your message here..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="flex items-center justify-center rounded-2xl bg-white p-10 shadow-lg">
            <div className="text-center">
              <div className="mb-5 text-7xl">
                📍
              </div>

              <h3 className="mb-3 text-3xl font-bold">
                Visit Us
              </h3>

              <p className="mb-2 text-lg text-gray-600">
               478, vikas nagar, airport road, Indore, Madhya Pradesh
              </p>

              <p className="mb-6 text-lg text-gray-600">
                City - 452005
              </p>

              <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
                View on Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-100 p-8 shadow-md"
              >
                <h4 className="mb-4 text-2xl font-bold">
                  {faq.question}
                </h4>

                <p className="leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            Multiple Ways to Reach Us
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-4 text-3xl font-bold">
                💬 Live Chat
              </h3>

              <p className="mb-6 text-gray-600">
                Chat with our support team in real-time
              </p>

              <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
                Start Chat
              </button>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-4 text-3xl font-bold">
                📧 Email Support
              </h3>

              <p className="mb-6 text-gray-600">
                Send us your queries via email
              </p>

              <a
                href="mailto:ankush.kirana2022@gmail.com"
                className="rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
              >
                Email Us
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-4 text-3xl font-bold">
                📱 WhatsApp
              </h3>

              <p className="mb-6 text-gray-600">
                Message us on WhatsApp for quick response
              </p>

              <a
                href="https://wa.me9691889878"
                className="rounded-lg bg-green-500 px-6 py-3 text-white transition hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-4 text-3xl font-bold">
                📞 Phone Support
              </h3>

              <p className="mb-6 text-gray-600">
                Call us during business hours
              </p>

              <a
                href="tel:+919691889878"
                className="rounded-lg bg-red-500 px-6 py-3 text-white transition hover:bg-red-600"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;