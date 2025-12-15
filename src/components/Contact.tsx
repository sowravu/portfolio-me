import { useState } from 'react';
import type { FormEvent } from 'react';
import { personalInfo } from '../data/portfolio';
import type { ContactFormData } from '../types';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<ContactFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send email using EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Sowravu Suresh",
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <section id="contact" className="section-container">
            <div className="max-w-5xl mx-auto w-full px-4">
                <h2 className="section-title text-center mb-12">
                    <span className="text-accent-cyan tracking-wider">Get In Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-400 leading-relaxed text-lg mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-xl hover:border-accent-cyan/30 transition-all group"
                            >
                                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                                    <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                                    <p className="text-white text-base font-medium group-hover:text-accent-cyan transition-colors">
                                        {personalInfo.email}
                                    </p>
                                </div>
                            </a>

                            {personalInfo.phone && (
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    className="flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-xl hover:border-accent-cyan/30 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                                        <FaPhoneAlt className="w-4 h-4 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                                        <p className="text-white text-base font-medium group-hover:text-accent-cyan transition-colors">
                                            {personalInfo.phone}
                                        </p>
                                    </div>
                                </a>
                            )}

                            {personalInfo.location && (
                                <div className="flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-xl hover:border-accent-cyan/30 transition-all group">
                                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                                        <FaMapMarkerAlt className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">Location</p>
                                        <p className="text-white text-base font-medium group-hover:text-accent-cyan transition-colors">
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#050505] border border-white/10 rounded-2xl p-5 md:p-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className={`w-full px-4 py-2.5 bg-[#1a1a1a] border rounded-lg outline-none text-white text-sm
                                             transition-all focus:bg-[#222] ${errors.name
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-white/5 focus:border-accent-cyan/50'
                                        }`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className={`w-full px-4 py-2.5 bg-[#1a1a1a] border rounded-lg outline-none text-white text-sm
                                             transition-all focus:bg-[#222] ${errors.email
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-white/5 focus:border-accent-cyan/50'
                                        }`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    rows={4}
                                    className={`w-full px-4 py-2.5 bg-[#1a1a1a] border rounded-lg outline-none text-white text-sm
                                             transition-all focus:bg-[#222] resize-none ${errors.message
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-white/5 focus:border-accent-cyan/50'
                                        }`}
                                    placeholder="Your message..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded-lg bg-accent-cyan/10 text-accent-cyan font-bold border border-accent-cyan/20 
                                         hover:bg-accent-cyan hover:text-black transition-all duration-300 flex items-center justify-center gap-2
                                         disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in">
                                    <p className="text-green-400 text-sm text-center">
                                        Message sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-fade-in">
                                    <p className="text-red-400 text-sm text-center">
                                        Oops! Something went wrong. Please try again.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500">
                    <p className="text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
