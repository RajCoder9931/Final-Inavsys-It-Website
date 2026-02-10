import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Blog {
  title: string;
  department: string;
  description: string;
  created_at: string;
}

interface Props {
  blog: Blog | null;
  onClose: () => void;
}

export function BlogDetailsModal({ blog, onClose }: Props) {
  if (!blog) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#0a0a0a] border border-[#B4FF39]/20 rounded-2xl max-w-2xl w-full p-8 relative"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#B4FF39]"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
          <p className="text-sm text-[#B4FF39] mb-4">
            {blog.department} •{' '}
            {new Date(blog.created_at).toLocaleDateString()}
          </p>

          <p className="text-gray-400 leading-relaxed">
            {blog.description}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
