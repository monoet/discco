'use client';

import { useState, useMemo } from 'react';
import { tracks } from '@/data/discco';

export default function RecordsPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Deterministic pseudo-random heights (no Math.random to avoid impure render)
  const barHeights = useMemo(() => (
    [...Array(20)].map((_, i) => {
      // Seeded pseudo-random using sine wave — deterministic, no side effects
      const seed = Math.sin(i * 1.7 + 0.3) * 40 + 50;
      return Math.round(seed);
    })
  ), []);

  return (
    <div className="max-w-[640px] mx-auto mb-16">
      {/* Player card */}
      <div className="bg-[var(--discco-charcoal)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
        {/* Waveform */}
        <div className="flex items-end justify-center gap-1 h-16 mb-6" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`w-1 rounded-full transition-all duration-300 ${isPlaying ? 'bg-[var(--discco-taupe)] animate-wave' : 'bg-[var(--discco-taupe)] opacity-40'}`}
              style={{
                height: isPlaying
                  ? `${barHeights[i]}%`
                  : `${20 + Math.sin(i * 0.5) * 15 + 20}%`,
                animationDelay: `${i * 40}ms`,
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            aria-label="Vista previa visual del reproductor"
            aria-pressed={isPlaying}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 flex items-center justify-center bg-[var(--discco-accent)] text-[var(--discco-ink)] rounded-full hover:bg-[var(--discco-accent-dk)] transition-colors"
          >
            {isPlaying ? (
              /* Pause icon */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              /* Play icon */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Track info */}
          <div className="flex-1">
            <p className="font-body text-sm text-[var(--discco-bone)] font-medium truncate">
              {tracks[0].title}
            </p>
            <p className="font-body text-xs text-[var(--discco-taupe)]">
              {tracks[0].type}
            </p>
          </div>

          {/* Duration */}
          <span className="font-body text-xs text-[var(--discco-taupe)]">
            {isPlaying ? tracks[0].duration : '0:00'}
          </span>
        </div>

        {/* Track list */}
        <div className="space-y-2">
          {tracks.map((track, i) => (
            <div
              key={track.id}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${i === 0 ? 'bg-[rgba(255,255,255,0.05)]' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-body text-xs text-[var(--discco-taupe)] w-4">{i + 1}</span>
                <div>
                  <p className="font-body text-sm text-[var(--discco-bone)]">{track.title}</p>
                  <p className="font-body text-[11px] text-[var(--discco-taupe)]">{track.type}</p>
                </div>
              </div>
              <span className="font-body text-xs text-[var(--discco-taupe)]">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Demo label */}
      <p className="text-center mt-3 font-body text-xs text-[var(--discco-taupe)]">
        Player demo
      </p>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .animate-wave {
            animation: wave 0.6s ease-in-out infinite alternate;
          }
        }
      `}</style>
    </div>
  );
}
