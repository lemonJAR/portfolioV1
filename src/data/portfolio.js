// Everything pinned on the two boards lives here.
//
// MARAHAS is real (taken from your project slide). Entries marked
// PLACEHOLDER are stand-ins so you can see the layout. Replace them
// with your own projects and roles, or delete them.

import marahas from '../assets/projects/marahas.jpg'

export const projects = [
  {
    title: 'MARAHAS',
    subtitle: 'Maritime Reconnaissance and Anomaly Hunting using AI Swarms',
    blurb:
      'Smart drone swarms that watch the West Philippine Sea around the clock. They spot illegal fishing and militia vessels and alert AFP commanders within minutes.',
    tags: ['AI', 'Drone swarms', 'Maritime surveillance'],
    note: 'Team of five at the University of San Jose-Recoletos.',
    image: marahas,
    imageAlt:
      'Project slide for MARAHAS, showing its four benefits and the team of proponents.',
    featured: true,
  },
  {
    title: 'Portfolio site',
    blurb:
      'The site you’re reading. Built with React, Vite and Tailwind CSS, with projects and experience laid out as bulletin boards.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    note: 'Version 1. Still being built.',
  },
  {
    // PLACEHOLDER
    title: 'Project name',
    blurb: 'Two sentences on what it does and what you built.',
    tags: ['Tag', 'Tag'],
    note: 'What you learned goes here.',
    // href: 'https://github.com/your-name/your-repo',
  },
]

// Newest first. The yarn on the board follows this order.
export const experience = [
  {
    // PLACEHOLDER
    role: 'Role title',
    org: 'Company or organization',
    period: '2025 – Now',
    points: ['What you built or shipped.', 'A result you can point to.'],
  },
  {
    // PLACEHOLDER
    role: 'Previous role',
    org: 'Company or organization',
    period: '2024 – 2025',
    points: ['What you were responsible for.', 'Tools you used.'],
  },
  {
    role: 'Student, School of Computer Studies',
    org: 'University of San Jose-Recoletos, Cebu',
    period: 'In progress',
    points: ['Built MARAHAS with a team of five.'],
  },
]