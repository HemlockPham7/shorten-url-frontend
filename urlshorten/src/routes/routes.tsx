import { createBrowserRouter, redirect } from 'react-router'
import SignIn from '@root/routes/auth/SignIn.tsx'
import Navbar from '@root/routes/layout/Navbar.tsx'
import ShortenURL from '@root/routes/shortenurl/ShortenURL.tsx'
import Bookmarks from '@root/routes/bookmark/Bookmarks.tsx'
import ImportBookmarks from '@root/routes/bookmark/ImportBookmarks.tsx'

const getCurrentUser = () => {
  const user = localStorage.getItem('user')

  return user ? JSON.parse(user) : null
}

const requireAuth = () => {
  const user = getCurrentUser()

  if (!user) {
    throw redirect('/sign-in')
  }

  return null
}

const redirectIfAuthenticated = () => {
  const user = getCurrentUser()

  if (user) {
    throw redirect('/')
  }

  return null
}

const routes = createBrowserRouter([
  {
    path: '/sign-in',
    Component: SignIn,
    loader: redirectIfAuthenticated,
  },
  {
    path: '/',
    Component: Navbar,
    loader: requireAuth,
    children: [
      {
        path: 'shortenurl',
        Component: ShortenURL,
      },
      {
        path: 'bookmarks',
        Component: Bookmarks,
      },
      {
        path: 'import',
        Component: ImportBookmarks,
      },
    ],
  },
])

export default routes
