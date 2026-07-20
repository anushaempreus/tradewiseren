type Segment = { text: string; brand?: boolean };

/**
 * Per-character masked swing-in headline, replicating the official site's
 * Slider Revolution chars animation. Server-rendered: each character gets a
 * staggered animation-delay; screen readers get the plain sentence.
 */
export default function AnimatedHeadline({
  segments,
  className = "",
  baseDelay = 250,
  stagger = 22,
}: {
  segments: Segment[];
  className?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const full = segments.map((s) => s.text).join("");
  let charIndex = 0;

  return (
    <h1 className={className} aria-label={full}>
      <span aria-hidden>
        {segments.map((seg, si) =>
          seg.text.split(/(\s+)/).map((word, wi) => {
            if (/^\s+$/.test(word)) return " ";
            if (!word) return null;
            return (
              <span key={`${si}-${wi}`} className="char-mask whitespace-nowrap">
                {word.split("").map((ch, ci) => (
                  <span
                    key={ci}
                    className={`char ${seg.brand ? "text-brand" : ""}`}
                    style={{ animationDelay: `${baseDelay + charIndex++ * stagger}ms` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            );
          })
        )}
      </span>
    </h1>
  );
}
