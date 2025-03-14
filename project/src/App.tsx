import React from 'react';
import { Building2, Users, BarChart3, PhoneCall, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold text-white">FIRST SALES</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-white hover:text-gray-300">About</a>
                <a href="#services" className="text-white hover:text-gray-300">Services</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)] flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transforming Business<br />Through Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              We help companies achieve unprecedented growth through strategic sales solutions and cutting-edge methodologies.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 mb-6 text-blue-600" />,
                title: "Sales Consulting",
                description: "Strategic guidance to optimize your sales processes and maximize revenue potential."
              },
              {
                icon: <BarChart3 className="h-12 w-12 mb-6 text-blue-600" />,
                title: "Performance Analytics",
                description: "Data-driven insights to measure and improve your sales team's effectiveness."
              },
              {
                icon: <CheckCircle2 className="h-12 w-12 mb-6 text-blue-600" />,
                title: "Sales Training",
                description: "Comprehensive training programs to enhance your team's selling capabilities."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Company</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in sales optimization, we've helped hundreds of companies achieve their growth targets. Our approach combines proven methodologies with innovative solutions tailored to your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Clients" },
                  { number: "15+", label: "Years Experience" },
                  { number: "98%", label: "Success Rate" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <PhoneCall className="h-6 w-6 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>contact@firstsales.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>123 Business Street, Tokyo, Japan</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold text-white">FIRST SALES</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 First Sales. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;