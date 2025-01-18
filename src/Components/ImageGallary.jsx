import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const ParallaxScrollSecond = ({ images = [], className = "" }) => {
  if (!images || images.length === 0) {
    return (
      <div className={cn("h-[40rem] w-full flex justify-center items-center", className)}>
        <p>No images to display</p>
      </div>
    );
  }

  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
    smooth: 0.5, // Add smoothing to the scroll measurement
  });

  // Create spring animations for smoother movement
  const springConfig = { mass: 1, stiffness: 100, damping: 30 };

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Create smoother transforms with springs
  const translateYFirst = useTransform(smoothProgress, [0, 1], [0, -150]);
  const translateXFirst = useTransform(smoothProgress, [0, 1], [0, -100]);
  const rotateFirst = useTransform(smoothProgress, [0, 1], [0, -10]);

  const translateYSecond = useTransform(smoothProgress, [0, 1], [0, -50]);
  const rotateSecond = useTransform(smoothProgress, [0, 1], [0, 5]);

  const translateYThird = useTransform(smoothProgress, [0, 1], [0, -150]);
  const translateXThird = useTransform(smoothProgress, [0, 1], [0, 100]);
  const rotateThird = useTransform(smoothProgress, [0, 1], [0, 10]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const Image = ({ src, className, alt }) => (
    <img
      src={src}
      className={className}
      alt={alt}
      loading="lazy"
      style={{ maxWidth: "100%", height: "auto" }}
      onError={(e) => {
        e.target.src = 'https://via.placeholder.com/400x320?text=Image+Not+Found';
      }}
    />
  );

  return (
    <div
      className={cn("h-[100rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-[10vw] gap-10 py-40 px-10">
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotate: rotateFirst,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 hover:scale-[1.02]"
                alt={`Gallery image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYSecond,
                rotate: rotateSecond,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={"grid-2" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 hover:scale-[1.02]"
                alt={`Gallery image ${idx + third + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotate: rotateThird,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 hover:scale-[1.02]"
                alt={`Gallery image ${idx + (2 * third) + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxScrollSecond;