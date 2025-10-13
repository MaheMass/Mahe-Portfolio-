import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your EmailJS credentials
    const SERVICE_ID = "service_3ezcn8d";
    const TEMPLATE_ID = "template_grxdt09";
    const PUBLIC_KEY = "hKFcL2hi1t9cLfnCL";

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    ).then(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      toast({
        title: "Error Sending Message",
        description: "Please try again later.",
      });
      console.error("EmailJS error:", error);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mahendhiran_Resume.pdf'; // Ensure this file is in /public
    link.download = 'Mahendhiran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Resume Download",
      description: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahendhiran23092003@gmail.com",
      href: "mailto:mahendhiran23092003@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6383781018",
      href: "tel:+916383781018"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MaheMass",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahendhiran-sakthivel-50ab5a255/",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mahendhiran23092003@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg">
                        <IconComponent className="text-black" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume Download */}
            <div>
              <button
                onClick={handleDownloadResume}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 ${social.color} group`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
