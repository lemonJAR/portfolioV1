import { PINS } from './pinColors'

// Purely decorative. Set `yarn` to make the yarn attach to this pin.
export default function Pin({ color = 'red', yarn = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      data-yarn-pin={yarn ? '' : undefined}
      className={`pin ${className}`}
      style={{ '--pin': PINS[color] ?? PINS.red }}
    />
  )
}