import type { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return <button className="border border-white/40 px-2">{children}</button>;
}
