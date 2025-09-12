import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h2 className="text-4xl font-bold text-teal-800 mb-6">Contact Us</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We’d love to hear from you! Fill out the form and our team will get
                        back to you shortly.
                    </p>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info + Map */}
                <div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-4">
                        Get in Touch
                    </h3>
                    <p className="text-gray-600 mb-6">
                        You can also reach us via phone, email, or visit us at our office.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-2">
                            <MdOutlineLocationOn className="text-teal-500 text-5xl" />
                            <span className="flex flex-col gap-2">
                                <span className="font-semibold">Address:</span> Omaxe Marketing
                                & Sales, OMAXE WORLD STREET, Ashray Bhavan Road, Sector 79,
                                Faridabad, Haryana 121004
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <MdOutlinePhone className="text-teal-500 text-3xl" />
                            <span className="flex flex-col gap-2">
                                <span className="font-semibold">Phone:</span> (+91) 9899921209
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <MdOutlineEmail className="text-teal-500 text-3xl" />
                            <span className="flex flex-col">
                                <span className="font-semibold">Email:</span>{" "}
                                khuban.ksd@gmail.com
                            </span>
                        </li>
                    </ul>

                    {/* Google Map Embed */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8971529263097!2d77.36210327529433!3d28.66602158230674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbdb79e4ff8b%3A0x45fa9535c7b41d79!2sOmaxe%20World%20Street%2C%20Sector%2079%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1726069330000!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
