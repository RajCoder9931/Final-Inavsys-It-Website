import  { useEffect, useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { BlogDetailsModal } from '../components/BlogsDetails';

interface Blog {
  id: string;
  title: string;
  department: string;
  description: string;
  created_at: string;
}

export function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs'); 
        if (!res.ok) throw new Error('Failed to fetch');
  
        const data = await res.json();
  
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Unexpected API response:', data);
          setBlogs([]);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);
  

  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0a] text-white">

      {/* ================= HEADER ================= */}
      <section className="py-24 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] mb-6">
            Our <span className="text-[#B4FF39]">Blogs</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Latest insights from our IT & MSP experts.
          </p>
        </AnimatedSection>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">

          {loading && (
            <p className="text-center text-gray-400">Loading blogs...</p>
          )}

          {error && (
            <p className="text-center text-red-400">
              Failed to load blogs. Please try again.
            </p>
          )}

          {!loading && blogs.length === 0 && (
            <p className="text-center text-gray-400">
              No blogs available.
            </p>
          )}

          {!loading && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <AnimatedSection key={blog.id} delay={index * 0.08}>
                  <div
                    onClick={() => setSelectedBlog(blog)}
                    className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#B4FF39]/40 hover:-translate-y-2 transition-all duration-300"
                  >
                    <p className="text-xs text-[#B4FF39] mb-2 uppercase tracking-wide">
                      {blog.department}
                    </p>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-4">
                      {blog.description}
                    </p>

                    <p className="mt-4 text-xs text-gray-500">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= MODAL ================= */}
      <BlogDetailsModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
}
