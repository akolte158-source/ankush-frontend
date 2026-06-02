const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ankush kolte',
      role: 'Founder & CEO',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Operations Manager',
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Supply Chain Lead',
      image: '👨‍🔧',
    },
    {
      id: 4,
      name: 'Neha Singh',
      role: 'Customer Support Head',
      image: '👩‍🎓',
    },
  ];

  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description:
        'Same-day delivery available for orders within city limits',
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description:
        'All products sourced from verified and trusted suppliers',
    },
    {
      icon: '💳',
      title: 'Easy Payment',
      description:
        'Multiple payment options including UPI, cards, and wallets',
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description:
        '7-day return policy for guaranteed customer satisfaction',
    },
    {
      icon: '🌱',
      title: 'Fresh Produce',
      description:
        'Direct from farms - ensuring maximum freshness',
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description:
        'Competitive pricing with regular discounts and offers',
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="mb-6 text-5xl font-bold">
            About Ankush Kirana Store
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8">
            Your trusted online grocery destination for quality
            products and exceptional service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Story
          </h2>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Story Text */}
            <div className="space-y-6 text-lg leading-8">
              <p>
                Ankush Kirana Store was founded in 2024 with a mission
                to revolutionize grocery shopping. What started as a
                small local initiative has grown into a thriving online
                platform serving thousands of customers.
              </p>

              <p>
                We believe everyone deserves access to fresh and quality
                groceries at fair prices. Our platform supports local
                farmers and trusted suppliers.
              </p>

              <p>
                Today, we are proud to be one of the most trusted online
                grocery stores in the region.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <h3 className="text-4xl font-bold text-blue-600">
                  10K+
                </h3>
                <p className="mt-2 text-gray-600">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <h3 className="text-4xl font-bold text-green-600">
                  500+
                </h3>
                <p className="mt-2 text-gray-600">
                  Products
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <h3 className="text-4xl font-bold text-red-500">
                  50+
                </h3>
                <p className="mt-2 text-gray-600">
                  Suppliers
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <h3 className="text-4xl font-bold text-yellow-500">
                  24/7
                </h3>
                <p className="mt-2 text-gray-600">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2">

          <div className="rounded-2xl bg-blue-50 p-8 shadow-md">
            <h3 className="mb-4 text-3xl font-bold text-blue-700">
              🎯 Our Mission
            </h3>

            <p className="text-lg leading-7 text-gray-700">
              To provide affordable and high-quality grocery products
              while supporting local farmers and sustainable practices.
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-50 p-8 shadow-md">
            <h3 className="mb-4 text-3xl font-bold text-indigo-700">
              🔮 Our Vision
            </h3>

            <p className="text-lg leading-7 text-gray-700">
              To become the most trusted and customer-centric online
              grocery platform recognized for quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            Why Choose Us?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 text-5xl">
                  {feature.icon}
                </div>

                <h4 className="mb-3 text-2xl font-bold">
                  {feature.title}
                </h4>

                <p className="leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Meet Our Team
          </h2>

          <p className="mb-14 text-lg text-gray-600">
            A dedicated team committed to bringing the best grocery
            shopping experience.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl bg-gray-100 p-8 shadow-md transition hover:shadow-xl"
              >
                <div className="mb-4 text-6xl">
                  {member.image}
                </div>

                <h4 className="text-2xl font-bold">
                  {member.name}
                </h4>

                <p className="mt-2 text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            Our Core Values
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Integrity',
                desc: 'Honest dealings and transparency in business.',
              },
              {
                title: 'Quality',
                desc: 'Delivering only the best products.',
              },
              {
                title: 'Customer Focus',
                desc: 'Customer satisfaction is our top priority.',
              },
              {
                title: 'Innovation',
                desc: 'Improving services through technology.',
              },
              {
                title: 'Sustainability',
                desc: 'Supporting eco-friendly practices.',
              },
              {
                title: 'Excellence',
                desc: 'Striving for perfection in every service.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 shadow-md transition hover:shadow-xl"
              >
                <h4 className="mb-4 text-2xl font-bold text-blue-600">
                  {value.title}
                </h4>

                <p className="leading-7 text-gray-600">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-5 text-5xl font-bold">
            Join Our Growing Community
          </h2>

          <p className="mb-8 text-lg">
            Experience quality, freshness, and exceptional service.
          </p>

          <button className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 transition hover:bg-gray-200">
            Start Shopping Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;