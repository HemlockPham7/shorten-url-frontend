import { formatDate } from '@root/lib/utils.ts'

export const sidebarItems = [
  {
    id: 1,
    icon: '/assets/icons/home.svg',
    label: 'Shorten URL',
    href: '/shortenurl',
  },
  {
    id: 2,
    icon: '/assets/icons/users.svg',
    label: 'Bookmarks',
    href: '/bookmarks',
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

export const allTrips = [
  {
    id: 1,
    name: 'Tropical Rewind',
    imageUrls: ['/assets/images/sample1.jpg'],
    itinerary: [{ location: 'Thailand' }],
    tags: ['Adventure', 'Culture'],
    travelStyle: 'Solo',
    estimatedPrice: '$1,000',
  },
  {
    id: 2,
    name: 'French Reverie',
    imageUrls: ['/assets/images/sample2.jpg'],
    itinerary: [{ location: 'Paris' }],
    tags: ['Relaxation', 'Culinary'],
    travelStyle: 'Family',
    estimatedPrice: '$2,000',
  },
  {
    id: 3,
    name: 'Zen Break',
    imageUrls: ['/assets/images/sample3.jpg'],
    itinerary: [{ location: 'Japan' }],
    tags: ['Shopping', 'Luxury'],
    travelStyle: 'Couple',
    estimatedPrice: '$3,000',
  },
  {
    id: 4,
    name: 'Adventure in Westeros',
    imageUrls: ['/assets/images/sample4.jpg'],
    itinerary: [{ location: 'Croatia' }],
    tags: ['Historical', 'Culture'],
    travelStyle: 'Friends',
    estimatedPrice: '$4,000',
  },
]

export const dashboardStats = {
  totalUsers: 12450,
  usersJoined: {
    currentMonth: 218,
    lastMonth: 176,
  },
  totalTrips: 3210,
  tripsCreated: {
    currentMonth: 150,
    lastMonth: 250,
  },
  userRole: {
    total: 62,
    currentMonth: 25,
    lastMonth: 15,
  },
}

export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-01'),
    itineraryCreated: 10,
    status: 'user',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-02'),
    itineraryCreated: 4,
    status: 'user',
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john.smith@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-03'),
    itineraryCreated: 8,
    status: 'admin',
  },
  {
    id: 4,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-05'),
    itineraryCreated: 15,
    status: 'user',
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-08'),
    itineraryCreated: 7,
    status: 'user',
  },
  {
    id: 6,
    name: 'Daniel Wilson',
    email: 'daniel.wilson@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-10'),
    itineraryCreated: 12,
    status: 'user',
  },
  {
    id: 7,
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-12'),
    itineraryCreated: 5,
    status: 'user',
  },
  {
    id: 8,
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-15'),
    itineraryCreated: 18,
    status: 'admin',
  },
  {
    id: 9,
    name: 'Sophia Anderson',
    email: 'sophia.anderson@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-18'),
    itineraryCreated: 9,
    status: 'user',
  },
  {
    id: 10,
    name: 'William Thomas',
    email: 'william.thomas@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-20'),
    itineraryCreated: 6,
    status: 'user',
  },
  {
    id: 11,
    name: 'Isabella Jackson',
    email: 'isabella.jackson@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-22'),
    itineraryCreated: 11,
    status: 'user',
  },
  {
    id: 12,
    name: 'Benjamin White',
    email: 'benjamin.white@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-25'),
    itineraryCreated: 14,
    status: 'user',
  },
  {
    id: 13,
    name: 'Mia Harris',
    email: 'mia.harris@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-01-28'),
    itineraryCreated: 3,
    status: 'user',
  },
  {
    id: 14,
    name: 'Lucas Martin',
    email: 'lucas.martin@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-01'),
    itineraryCreated: 20,
    status: 'admin',
  },
  {
    id: 15,
    name: 'Charlotte Thompson',
    email: 'charlotte.thompson@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-04'),
    itineraryCreated: 8,
    status: 'user',
  },
  {
    id: 16,
    name: 'Henry Garcia',
    email: 'henry.garcia@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-07'),
    itineraryCreated: 13,
    status: 'user',
  },
  {
    id: 17,
    name: 'Amelia Martinez',
    email: 'amelia.martinez@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-10'),
    itineraryCreated: 6,
    status: 'user',
  },
  {
    id: 18,
    name: 'Alexander Robinson',
    email: 'alexander.robinson@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-13'),
    itineraryCreated: 16,
    status: 'user',
  },
  {
    id: 19,
    name: 'Harper Clark',
    email: 'harper.clark@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-16'),
    itineraryCreated: 4,
    status: 'user',
  },
  {
    id: 20,
    name: 'Ethan Rodriguez',
    email: 'ethan.rodriguez@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-19'),
    itineraryCreated: 10,
    status: 'user',
  },
  {
    id: 21,
    name: 'Evelyn Lewis',
    email: 'evelyn.lewis@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-22'),
    itineraryCreated: 7,
    status: 'user',
  },
  {
    id: 22,
    name: 'Matthew Lee',
    email: 'matthew.lee@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-25'),
    itineraryCreated: 17,
    status: 'admin',
  },
  {
    id: 23,
    name: 'Grace Walker',
    email: 'grace.walker@example.com',
    imageUrl: '/assets/images/david.webp',
    dateJoined: formatDate('2025-02-28'),
    itineraryCreated: 9,
    status: 'user',
  },
]
