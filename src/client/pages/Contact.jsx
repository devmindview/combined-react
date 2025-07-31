import React from 'react';
import hero from '../../assets/aesthetic-bg.webp';
import Faq from '../components/Faq';
import FadeInFromBottom from '../components/elements/FadeInFromBottom';

function Contact() {
    return (
        <div>
            {/* Top Hero Section */}
            <section
                className="h-[30vh] md:h-[35vh] container max-w-[95%] rounded-tl-3xl rounded-b-3xl rounded-tr-[5rem] md:rounded-tr-[8rem] mx-auto flex items-center justify-center"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(8, 30, 15, 0.85), rgba(8, 30, 15, 0.85)),
            url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <FadeInFromBottom>
                    <h1 className="text-2xl sm:text-3xl text-white text-center">
                        Contact Us
                    </h1>
                </FadeInFromBottom>
            </section>


            <section className="w-full max-w-7xl mx-auto px-4 my-5 md:my-20">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Image */}
                    <div
                        className="md:w-1/2 w-full h-auto rounded-tl-3xl rounded-b-3xl rounded-tr-[8rem]"
                        style={{
                            backgroundImage: `url(${hero})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>

                    {/* Form */}
                    <div className="md:w-1/2 w-full">
                        {/* <h6 className="mt-10 font-semibold">Connect with us</h6> */}
                        <FadeInFromBottom>
                            <h3 className="text-2xl md:text-3xl leading-snug pt-2 mb-4">
                                Tell Us What You’re Looking For
                            </h3>
                        </FadeInFromBottom>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="mt-1 w-full p-2.5 border rounded-lg text-sm bg-gray-50"
                                    required
                                />

                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Your phone number"
                                    className="mt-1 w-full p-2.5 border rounded-lg text-sm bg-gray-50"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="City / Town"
                                    className="mt-1 w-full p-2.5 border rounded-lg text-sm bg-gray-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your message"
                                    rows="4"
                                    className="mt-1 w-full p-2.5 border rounded-lg text-sm bg-gray-50"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto my-10 px-4">
                <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4916.733312066819!2d76.30611727589321!3d9.992585773160439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2309e7870b%3A0x898993a479ca8935!2sCombined%20Pharmaceuticals%20Ayurvedic%20Medicines!5e1!3m2!1sen!2sin!4v1751272944695!5m2!1sen!2sin&layer=sat"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <Faq />

        </div>
    );
}

export default Contact;
