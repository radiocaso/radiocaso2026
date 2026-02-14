import type { ReactNode } from "react";

export default function HighlightedItem({ children }: { children: ReactNode }) {
  return (
    <div className="border border-white/40 px-2">
      <h3 className="text-2xl sm:text-4xl">{children}</h3>
    </div>
  );
}
