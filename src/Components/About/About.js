import { Users, CheckCircle, QrCode, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#FF5722] text-white">
        <h1 className="text-4xl font-bold">About ScanToDine</h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          Revolutionizing the dining experience with seamless QR code-based menus.
        </p>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At ScanToDine, we aim to enhance restaurant operations and improve customer experiences by providing a digital menu solution that is fast, secure, and easy to use.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <QrCode size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Instant QR Menus</h3>
            <p className="text-gray-600 mt-2">
              Generate QR codes for your restaurant menu instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Easy Management</h3>
            <p className="text-gray-600 mt-2">
              Add, update, or remove menu items in real-time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Better Customer Experience</h3>
            <p className="text-gray-600 mt-2">
              Contactless, fast, and user-friendly experience for diners.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ShieldCheck size={40} className="text-[#FF5722] mx-auto mb-3" />
            <h3 className="text-xl font-bold">Secure & Reliable</h3>
            <p className="text-gray-600 mt-2">
              Data security and reliability are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Passionate individuals committed to revolutionizing the dining experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-4">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-4">Michael Lee</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-gray-700">
        &copy; {new Date().getFullYear()} ScanToDine. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
