// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Loader2 } from 'lucide-react';
// import { Button } from '../ui/Button';

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export function NewsletterModal({ open, onClose }: Props) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!name || !email) return;

//     try {
//       setLoading(true);

//       const res = await fetch('api/newsletter', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email }),
//       });

//       if (!res.ok) throw new Error('Failed');

//       setSuccess(true);
//       setName('');
//       setEmail('');

//       setTimeout(() => {
//         onClose();
//         setSuccess(false);
//       }, 1500);
//     } catch (err) {
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="bg-white w-full max-w-md rounded-xl p-6 relative"
//           >
//             {/* Close */}
//             <button
//               onClick={onClose}
//               className="absolute right-4 top-4 text-gray-500 hover:text-black"
//             >
//               <X />
//             </button>

//             <h3 className="text-2xl font-bold text-[#1e2a3b] mb-4">
//               Join Our Newsletter
//             </h3>

//             {success ? (
//               <p className="text-green-600 font-semibold">
//                  Successfully subscribed!
//               </p>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]"
//                   required
//                 />

//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]"
//                   required
//                 />

//                 <Button
//                   type="submit"
//                   className="w-full bg-[#ff4d4f] hover:bg-[#e64547]"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <Loader2 className="animate-spin" />
//                   ) : (
//                     'Subscribe'
//                   )}
//                 </Button>
//               </form>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


//


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NewsletterModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      setLoading(true);
      setError('');

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (!res.ok) throw new Error('Failed');

      setSuccess(true);
      setName('');
      setEmail('');

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1500);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-md rounded-xl p-6 relative"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold text-[#1e2a3b] mb-4">
              Join Our Newsletter
            </h3>

            {success ? (
              <p className="text-green-600 font-semibold">
                Thanks for subscribing! We’ll keep you updated.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-[#ff4d4f] hover:bg-[#e64547]"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin" /> : 'Subscribe'}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
