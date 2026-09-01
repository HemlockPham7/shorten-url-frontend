export const sidebarItems = [
  {
    id: 1,
    icon: '/assets/icons/home.svg',
    label: 'Shorten URL',
    href: '/',
  },
  {
    id: 2,
    icon: '/assets/icons/users.svg',
    label: 'Bookmarks Dashboard',
    href: '/bookmarks-dashboard',
  },
  {
    id: 3,
    icon: '/assets/icons/users.svg',
    label: 'Bookmarks Creation',
    href: '/bookmarks-creation',
  },
]

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ['#ff0', '#ff7f00', '#ff0044', '#4c94f4', '#f4f4f4'], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
}

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
}

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
}
