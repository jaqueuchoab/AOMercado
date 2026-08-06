import type { ReactNode } from 'react';

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative h-full w-full rounded-[2.2rem] border-[5px] border-[#2a1a3a] bg-white shadow-[0_20px_60px_-12px_rgba(75,39,107,0.4)]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#2a1a3a]" />
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.9rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
