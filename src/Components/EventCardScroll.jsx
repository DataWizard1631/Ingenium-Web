import React, { useState, useEffect, useRef } from 'react';

const ServiceCarousel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  const items = [
    {
      id: 1,
      title: "Digital Design",
      description: "Creating beautiful and functional digital experiences through thoughtful design and innovation.",
      image: "/public/1.jpg"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building robust and scalable web applications with cutting-edge technologies.",
      image: "/public/2.jpg"
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Crafting intuitive mobile experiences that engage and delight users across platforms.",
      image: "/public/3.jpg"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces that combine aesthetics with seamless functionality.",
      image: "/public/4.jpg"
    },
    {
      id: 5,
      title: "Brand Identity",
      description: "Developing distinctive brand identities that resonate with your target audience.",
      image: "/public/5.jpg"
    }
  ];

  useEffect(() => {
    let lastScrollTop = 0;
    let accumulatedScroll = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        const currentScrollTop = window.pageYOffset;
        const scrollDelta = currentScrollTop - lastScrollTop;
        
        // Reduce scroll sensitivity for smoother movement
        accumulatedScroll += scrollDelta ;
        
        // Constrain accumulated scroll
        accumulatedScroll = Math.max(0, Math.min(accumulatedScroll, rect.height * 4));
        
        // Calculate progress
        const progress = (accumulatedScroll / (rect.height * 4)) * 100;
        
        // Apply easing for smoother movement
        const easedProgress = Math.pow(progress / 100, 1.5) * 100;
        setScrollProgress(Math.min(Math.max(easedProgress, 0), 100));
        
        lastScrollTop = currentScrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTranslate = (progress) => {
    const cardWidth = 600;
    const cardMargin = 32;
    const totalWidth = (items.length - 1) * (cardWidth + cardMargin);
    // Start with first card visible and move left
    return -((progress * totalWidth) / 100);
  };

  return (
    <div ref={containerRef} className="relative py-24">
      <div className="mx-auto">
        <div ref={carouselRef} className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-out"
            style={{
              transform: `translateX(${calculateTranslate(scrollProgress)}px)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-[600px] flex-shrink-0 mr-8 last:mr-0"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 text-white/30 text-xl">✦</div>
                  <div className="absolute top-4 left-4 text-white/30 text-xl">✦</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div style={{ height: '8vh' }} />
    </div>
  );
};

export default ServiceCarousel;