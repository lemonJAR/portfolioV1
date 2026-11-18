// A wooden frame around a cork surface. Everything pinned goes inside.
export default function Board({ children, className = '' }) {
  return (
    <div className="board-frame">
      <div className={`cork ${className}`}>{children}</div>
    </div>
  )
}