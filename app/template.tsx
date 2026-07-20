// Remounts on every route change, giving each page a soft entrance transition.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
