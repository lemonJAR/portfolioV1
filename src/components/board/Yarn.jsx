import { useEffect, useRef } from 'react'

// Draws a slack length of yarn between every element marked with
// data-yarn-pin inside `containerRef`, in DOM order. It sits behind the
// cards (the pins stay on top), and re-measures when the layout changes.
export default function Yarn({ containerRef }) {
  const shadowRef = useRef(null)
  const strandRef = useRef(null)
  const fiberRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const measure = () => {
      const box = container.getBoundingClientRect()
      const points = [...container.querySelectorAll('[data-yarn-pin]')].map(
        (pin) => {
          const r = pin.getBoundingClientRect()
          return [r.left - box.left + r.width / 2, r.top - box.top + r.height / 2]
        },
      )

      let d = ''
      if (points.length > 1) {
        d = `M${points[0][0]},${points[0][1]}`
        for (let i = 1; i < points.length; i++) {
          const [x0, y0] = points[i - 1]
          const [x1, y1] = points[i]
          const sag = Math.min(70, Math.hypot(x1 - x0, y1 - y0) * 0.16)
          d += ` Q${(x0 + x1) / 2},${(y0 + y1) / 2 + sag} ${x1},${y1}`
        }
      }

      for (const ref of [shadowRef, strandRef, fiberRef]) {
        ref.current?.setAttribute('d', d)
      }
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    document.fonts?.ready.then(measure)

    return () => observer.disconnect()
  }, [containerRef])

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
    >
      <g fill="none" strokeLinecap="round">
        <path ref={shadowRef} stroke="rgba(0,0,0,0.35)" strokeWidth="4" transform="translate(2 6)" />
        <path ref={strandRef} stroke="#b8322a" strokeWidth="4" />
        <path ref={fiberRef} stroke="#f2a49b" strokeWidth="1.5" strokeDasharray="1.5 5" opacity="0.7" />
      </g>
    </svg>
  )
}