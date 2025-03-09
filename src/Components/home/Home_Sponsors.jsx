import { useState } from "react";

const logoImgs = [
  { imgUrl: "/Logos/1.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/2.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/3.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/4.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/5.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/6.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/7.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/8.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/9.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/10.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/11.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/12.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/13.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/14.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/15.png", altText: "React Bits Logo" },
  { imgUrl: "/Logos/16.png", altText: "React Bits Logo" },
];

function Sponsors({
  direction = "horizontal",
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
  pauseOnHover = true
}) {
  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        ["--size"]: size,
        ["--duration"]: duration,
        ["--color-text"]: textColor,
        ["--color-bg"]: bgColor,
        ["--color-bg-accent"]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)"
      }}
    >
      <div
        className={marqueeClass}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {logoImgs.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {logoImgs.map((item, idx) => (
            <img
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>

      <div
        className={marqueeClass + " marquee--reverse"}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" && "flex-col min-h-full animate-scrollY reverse-x"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {logoImgs.map((item, idx) => (
            <img
              key={`rev-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" && "flex-col min-h-full animate-scrollY reverse-x"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {logoImgs.map((item, idx) => (
            <img
              key={`dup2-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default Sponsors;