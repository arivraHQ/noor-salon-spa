import React from "react";

interface OffsetFrameProps {
  children: React.ReactNode;
  className?: string;
  frameOffset?: "sm" | "md" | "lg";
  frameDirection?: "bottom-right" | "bottom-left" | "top-right";
}

export function OffsetFrame({
  children,
  className = "",
  frameOffset = "md",
  frameDirection = "bottom-right",
}: OffsetFrameProps) {
  const offsetMap = {
    sm: "translate-x-2 translate-y-2",
    md: "translate-x-3 translate-y-3",
    lg: "translate-x-4 translate-y-4",
  };

  const directionMap = {
    "bottom-right": offsetMap[frameOffset],
    "bottom-left": `-translate-x-${frameOffset === "sm" ? "2" : frameOffset === "md" ? "3" : "4"} translate-y-${frameOffset === "sm" ? "2" : frameOffset === "md" ? "3" : "4"}`,
    "top-right": `translate-x-${frameOffset === "sm" ? "2" : frameOffset === "md" ? "3" : "4"} -translate-y-${frameOffset === "sm" ? "2" : frameOffset === "md" ? "3" : "4"}`,
  };

  return (
    <div className={`relative ${className}`}>
      {/* 1px Champagne Offset Frame */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 border border-champagne pointer-events-none transition-transform duration-editorial ease-editorial ${directionMap[frameDirection]}`}
      />
      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full bg-bg">
        {children}
      </div>
    </div>
  );
}
