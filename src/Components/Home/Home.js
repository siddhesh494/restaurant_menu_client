import { Link } from "react-router-dom";
import { QrCode, CheckCircle, ShieldCheck, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#FF5722] text-white">
        <h1 className="text-4xl font-bold">Welcome to ScanToDine</h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          Effortless QR-based digital menus for restaurants.
        </p>
        <Link to="/register">
          <button className="mt-6 px-6 py-3 bg-white text-[#FF5722] font-bold rounded-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <QrCode size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Scan QR Code</h3>
            <p className="text-gray-600">Customers scan the QR code to access your menu.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckCircle size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Browse & Order</h3>
            <p className="text-gray-600">They explore your menu and place orders effortlessly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ShieldCheck size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Secure & Contactless</h3>
            <p className="text-gray-600">Hassle-free ordering with safety and speed.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose ScanToDine?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <QrCode size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Instant QR Menus</h3>
            <p className="text-gray-600">Generate custom QR codes for your restaurant instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">User-Friendly</h3>
            <p className="text-gray-600">Designed for easy access and seamless browsing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Easy Management</h3>
            <p className="text-gray-600">Update your menu in real-time with zero hassle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ShieldCheck size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Secure & Reliable</h3>
            <p className="text-gray-600">Ensuring data security and reliability for restaurants.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
        <div className="container mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"ScanToDine made our restaurant so much more efficient!"</p>
            <h4 className="mt-4 font-bold">- Emily R.</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"Customers love how easy it is to use our QR menu."</p>
            <h4 className="mt-4 font-bold">- David M.</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"No more paper menus! We love this system."</p>
            <h4 className="mt-4 font-bold">- Sarah P.</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-[#FF5722] text-white">
        <h2 className="text-3xl font-bold">Ready to Go Digital?</h2>
        <p className="text-lg mt-2">Sign up today and transform your restaurant experience.</p>
        <Link to="/register">
          <button className="mt-6 px-6 py-3 bg-white text-[#FF5722] font-bold rounded-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-gray-700">
        &copy; {new Date().getFullYear()} ScanToDine. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;