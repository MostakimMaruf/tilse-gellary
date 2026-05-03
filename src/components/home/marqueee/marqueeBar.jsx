import React from "react";

function MarqueeBar() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-800 text-white py-2">
      <div className="animate-marquee inline-block">
        Discover Our New Arrivals: Elegant Marble Shine Collection | Weekly Feature: Stunning Modern Geometric Patterns for Contemporary Spaces | Join Our Growing Community and Elevate Your Interior Style Today....
      </div>
    </div>
  );
}

export default MarqueeBar;
