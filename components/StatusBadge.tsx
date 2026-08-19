import React from 'react';

interface StatusBadgeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Signature element used across Header, Hero, and Footer.
 * A real functional signal (open to work), not decoration —
 * this is what ties the three sections into one identity.
 */
const StatusBadge: React.FC<StatusBadgeProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border font-mono text-[11px] uppercase tracking-[0.15em] font-bold ${
        isDark
          ? 'border-white/10 bg-white/[0.03] text-gray-300'
          : 'border-black/10 bg-black/[0.02] text-[#111111]'
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Available for work
    </div>
  );
};

export default StatusBadge;