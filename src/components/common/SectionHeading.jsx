import React from 'react';

/**
 * Standardized Section Heading Component
 * Enforces editorial serif styling for titles and clean sans-serif for descriptions.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = ''
}) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3 ${
            light
              ? 'bg-white/10 text-light-blue border border-white/15'
              : 'bg-light-blue text-navy-primary'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
            light ? 'text-white' : 'text-navy-primary'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? 'text-slate-300' : 'text-body-text'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
