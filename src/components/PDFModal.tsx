import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';
interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  pdfUrl?: string; // In a real app, this would be the PDF URL
}
export function PDFModal({
  isOpen,
  onClose,
  projectTitle,
  pdfUrl
}: PDFModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          {/* Backdrop */}
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4" />


          {/* Modal */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          transition={{
            type: 'spring',
            duration: 0.5
          }}
          className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none p-4">

            <div className="bg-[#0a0a0a] border border-[#B4FF39]/30 w-full max-w-4xl h-[80vh] rounded-2xl shadow-[0_0_50px_rgba(180,255,57,0.15)] flex flex-col overflow-hidden pointer-events-auto relative">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B4FF39]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#B4FF39]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Orbitron'] text-white">
                      {projectTitle}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Project Documentation
                    </p>
                  </div>
                </div>
                <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#B4FF39] hover:text-black flex items-center justify-center transition-all duration-300">

                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content (PDF Viewer Placeholder) */}
              <div className="flex-1 bg-[#111] relative overflow-y-auto p-8 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#B4FF39]/5 flex items-center justify-center mb-6 animate-pulse">
                  <FileText className="w-10 h-10 text-[#B4FF39]/50" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  PDF Preview Mode
                </h4>
                <p className="text-gray-400 max-w-md mb-8">
                  This is a demonstration of the PDF viewer modal. In a
                  production environment, this would load the actual project
                  documentation PDF file.
                </p>
                <div className="flex space-x-4">
                  <Button variant="primary">Download PDF</Button>
                  <Button variant="secondary">
                    Open in New Tab <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 bg-white/5 flex justify-between items-center text-xs text-gray-500">
                <span>IR Tech Innovation Project Viewer v1.0</span>
                <span>Secure Document Preview</span>
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}