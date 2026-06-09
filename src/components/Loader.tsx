import React from 'react';

interface LoaderProps {
  progress: number;
  fadeOut: boolean;
}

export default function Loader({ progress, fadeOut }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Glow effect in background */}
      <div className="absolute w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[100px] animate-pulse"></div>

      <div className="relative flex flex-col items-center select-none text-center">
        {/* Glowing Logo */}
        <div className="relative mb-8 h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,157,0.1)] hover:shadow-[0_0_30px_rgba(0,255,157,0.2)] transition-shadow duration-500">
          <svg
            className="w-10 h-10 text-accent-cyan animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <div className="absolute -inset-1 rounded-full border border-accent-cyan/25 animate-ping opacity-75" style={{ animationDuration: '2.5s' }}></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl md:text-3xl font-black tracking-[0.25em] uppercase bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent mb-2">
          SOWRAVU SURESH
        </h1>
        <p className="text-[11px] text-gray-500 uppercase tracking-[0.4em] mb-12">
          Portfolio Loading
        </p>

        {/* Progress Display */}
        <div className="relative flex flex-col items-center">
          <span className="text-4xl font-extrabold text-white tracking-widest tabular-nums leading-none">
            {progress}%
          </span>

          {/* Sleek Progress Bar */}
          <div className="w-56 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-teal rounded-full shadow-[0_0_8px_rgba(0,255,157,0.6)] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
