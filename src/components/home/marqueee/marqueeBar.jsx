import React from "react";

function MarqueeBar() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-800 text-white py-2">
      <div className="animate-marquee inline-block">
        New Arrivals: Marble Shine | Weekly Feature: Modern Geometric Patterns |
        Join the Community...
      </div>
    </div>
  );
}

export default MarqueeBar;
