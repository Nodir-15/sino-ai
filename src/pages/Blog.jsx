import { useEffect, useState, useRef } from "react";
import { useTranslation } from "../components/i18n"; 

const Blog = () => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);
  
  // modal state to track which article is currently open
  const [activeArticleId, setActiveArticleId] = useState(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimated(entry.isIntersecting);
      },
      { 
        threshold: 0.05,              
        rootMargin: "-5% 0px -5% 0px" 
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // block scrolling when modal is open
  useEffect(() => {
    if (activeArticleId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeArticleId]);

  // safety check in case translation data is not loaded yet
  if (!t || !t.blog || !t.blog.articles) return null;

  // Define the cards with their corresponding image paths
  const cards = [
    { id: 'art1', img: './an.webp' }, 
    { id: 'art2', img: './b.webp' },
    { id: 'art3', img: './navigatr.webp' }
  ];

  return (
    <section 
      id="blog" 
      ref={sectionRef} 
      className="blog-section-wrapper w-full bg-gray-50/50 py-20 relative overflow-hidden text-left"
    >
      {/* Main animated container */}
      <div className={`blog-animated-container max-w-6xl mx-auto px-4 md:px-8 transition-all duration-[900ms] ease-out will-change-[transform,opacity] ${
        isAnimated 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-12 scale-[0.98]"
      }`}>
        
        {/* Header */}
        <div className="blog-header-block text-center mb-16">
          <p className="blog-subtitle text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
            • {t.blog.subtitle}
          </p>
          <h1 className="blog-main-title text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-950 whitespace-pre-line tracking-tight">
            {t.blog.title}
          </h1>
          <p className="blog-description text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.blog.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="blog-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const articleData = t.blog.articles[card.id];
            if (!articleData) return null;

            return (
              <div 
                key={card.id}
                onClick={() => setActiveArticleId(card.id)}
                className="blog-single-card bg-white rounded-3xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col group"
              >
                {/* Card image */}
                <div className="blog-card-media h-52 w-full overflow-hidden bg-gray-100 relative">
                  <img 
                    src={card.img} 
                    alt={articleData.title} 
                    className="blog-card-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Card text */}
                <div className="blog-card-body p-6 flex flex-col flex-grow">
                  <span className="blog-card-tag text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2.5 block">
                    {articleData.category}
                  </span>
                  
                  <h3 className="blog-card-title text-xl font-bold text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                    {articleData.title}
                  </h3>
                  
                  <p className="blog-card-preview text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {articleData.preview}
                  </p>
                  
                  {/*Read button */}
                  <div className="blog-card-footer mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-emerald-600 font-bold text-sm">
                    <span className="blog-card-btn-text flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.blog.buttonRead || "Читать"} <span>→</span>
                    </span>
                    <span className="blog-card-time text-gray-400 text-xs font-medium">{articleData.readTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {activeArticleId && t.blog.articles[activeArticleId] && (
        <div 
          className="blog-modal-backdrop fixed inset-0 bg-gray-950/40 backdrop-blur-md z-[999] flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setActiveArticleId(null)}
        >
          <div 
            className="blog-modal-window bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-12 relative shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setActiveArticleId(null)}
              className="blog-modal-close-btn absolute top-6 right-6 text-gray-400 hover:text-gray-950 text-3xl font-light transition-colors leading-none"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal content */}
            <div className="blog-modal-tag uppercase text-emerald-600 text-xs font-bold tracking-widest mb-3">
              # {t.blog.articles[activeArticleId].category}
            </div>
            
            <h2 className="blog-modal-title text-2xl md:text-4xl font-black text-gray-950 leading-tight mb-4 tracking-tight">
              {t.blog.articles[activeArticleId].title}
            </h2>

            <div className="blog-modal-meta text-xs font-medium text-gray-400 mb-8 border-b border-gray-100 pb-4">
              {t.blog.articles[activeArticleId].date} • {t.blog.articles[activeArticleId].readTime}
            </div>

            <div className="blog-modal-content text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
              <p className="blog-modal-lead font-semibold text-gray-900 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                {t.blog.articles[activeArticleId].preview}
              </p>
              <p className="blog-modal-p1">
                {t.blog.articles[activeArticleId].paragraph1}
              </p>
              <p className="blog-modal-p2">
                {t.blog.articles[activeArticleId].paragraph2}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
