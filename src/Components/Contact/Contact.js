import { Mail } from "lucide-react";
import { useState } from "react";
import InstagramIcon from '../../assests/PNG/Instagram.png'
import LinkedinIcon from '../../assests/PNG/Linkedin.png'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#FF5722] text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          Got questions? We're here to help!
        </p>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#FF5722] text-white py-3 rounded-md font-bold hover:bg-[#e64a19] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              {/* <div className="flex items-center">
                <Phone className="text-[#FF5722] mr-3" />
                <p className="text-gray-700">+1 123 456 7890</p>
              </div> */}
              <div className="flex items-center">
                <Mail className="text-[#FF5722] mr-3" />
                <p className="text-gray-700">support@scantodine.com</p>
              </div>
              <div className="flex items-center">
                <img 
                  alt="instagram"
                  src={InstagramIcon}
                  className="w-6 mr-3"
                />
                <p className="text-gray-700">scantodine</p>
              </div>
              <div className="flex items-center">
                <img 
                  alt="instagram"
                  src={LinkedinIcon}
                  className="w-6 mr-3"
                />
                <p className="text-gray-700">scantodine</p>
              </div>
              {/* <div className="flex items-center">
                <MapPin className="text-[#FF5722] mr-3" />
                <p className="text-gray-700">123 Main St, New York, NY 10001</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed (Optional) */}
      {/* <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Us Here</h2>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798893969!2d-74.25987561766786!3d40.6976700632244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6ff451c6071%3A0xa0b2850b0f3c5b5!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1645117512315!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-gray-700">
        &copy; {new Date().getFullYear()} ScanToDine. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
