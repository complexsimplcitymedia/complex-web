import React from 'react';

export function HeroTitle() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
        Complex Simplicity Media
      </h1>
      <div className="text-xl md:text-2xl lg:text-3xl flex flex-col items-center space-y-3">
        <span className="text-white font-bold">
          Masters of the
        </span>
        <div className="relative">
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 blur-2xl opacity-30" 
                style={{ clipPath: 'inset(0)' }} />
          <span className="relative inline-block bg-gradient-to-r from-white/30 to-white/20 text-white px-6 py-2 transform -skew-x-12 font-bold backdrop-blur-sm border border-white/10 shadow-2xl">
            Complexity
          </span>
        </div>
        <span className="text-white font-bold">
          of Simplicity
        </span>
      </div>
    </div>
  );
}
