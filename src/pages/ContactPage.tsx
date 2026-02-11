import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

/*  FAQ DATA  */

const faqs = [
  {
    question: 'How long does it take to get a response?',
    answer:
      'Our team typically responds within 24 hours on business days after receiving your message.'
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer:
      'Yes, we work with startups, SMEs, and enterprises, tailoring solutions based on budget and goals.'
  },
  {
    question: 'Is my information secure?',
    answer:
      'Absolutely. Your data is kept confidential and used only for communication related to your inquiry.'
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'Our team reviews your request and contacts you via email or phone to discuss the next steps.'
  }
];

/*  FAQ ITEM  */

function FaqItem({
  faq
}: {
  faq: { question: string; answer: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-[#1e2a3b]">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl text-black leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-gray-600 leading-relaxed overflow-hidden"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/*  MAIN PAGE  */

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    budget: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed');

      setSuccess(
        'Thanks for submitting! We will contact you as soon as possible.'
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        project_type: '',
        budget: '',
        message: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="min-h-screen pt-20">

      {/*  SEO FAQ SCHEMA  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          })
        }}
      />

      {/*  CONTACT SECTION  */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* INFO */}
            <AnimatedSection direction="left">
              <h1 className="text-5xl font-bold font-['Orbitron'] mb-6">
                Let's Build Something{' '}
                <span className="text-[#B4FF39]">Amazing</span> Together
              </h1>

              <p className="text-gray-400 text-lg mb-12">
                Have a project in mind? We'd love to hear about it. Send us a
                message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <Card className="flex items-center p-6 hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#B4FF39]">
                      info@navsantgroupofindustries.com
                    </p>
                  </div>
                </Card>

                <Card className="flex items-center p-6 hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#B4FF39]">
                      +91 809-115-9057
                    </p>
                  </div>
                </Card>

                <Card className="flex items-center p-6 hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#B4FF39]">
                      Plot 7, Vikas Nagar, Heritage Floors Jalpura, Greater Noida,
                      Sector-1, Uttar Pradesh – 201306
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedSection>

            {/* FORM */}
            <AnimatedSection direction="right" delay={0.2}>
              <Card className="p-8 md:p-10">
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                        placeholder="Enter Your Name/ Company Name "
                      />


                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                        placeholder="Enter The Email Here"
                      />


                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                        placeholder="+91 99999 99999"
                      />


                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Project Type
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="">Select Project Type</option>
                        <option className="bg-[#0a0a0a]">Web Development</option>
                        <option className="bg-[#0a0a0a]">App Development</option>
                        <option className="bg-[#0a0a0a]">UI/UX Design</option>
                        <option className="bg-[#0a0a0a]">Marketing</option>
                        <option className="bg-[#0a0a0a]">Other</option>
                      </select>

                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                    >
                      <option value="">Select Budget</option>
                      <option className="bg-[#0a0a0a]">Less than $1k</option>
                      <option className="bg-[#0a0a0a]">$1k - $5k</option>
                      <option className="bg-[#0a0a0a]">$5k - $10k</option>
                      <option className="bg-[#0a0a0a]">$10k+</option>
                    </select>

                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                      placeholder="Tell us about your project..."
                    />


                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 rounded border-gray-600 text-[#B4FF39] focus:ring-[#B4FF39]" />

                    <label htmlFor="terms" className="text-sm text-gray-400">
                      I agree to the{' '}
                      <a href="#" className="text-[#B4FF39] hover:underline">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>

                  <Button className="w-full" size="lg" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                  {success && (
                    <p className="text-green-400 text-sm font-medium">{success}</p>
                  )}

                  {error && (
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                  )}

                </form>
              </Card>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/*  Faq Section   */}
      <section className="relative py-20 bg-gradient-to-b from-[#f9fff0] via-white to-[#f9fff0]">
        {/* subtle lime glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#B4FF39]/10 blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#1e2a3b] mb-12"
          >
            Frequently Asked <span className="text-[#B4FF39]">Questions</span>
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
