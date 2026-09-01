import { createBrowserRouter, redirect } from 'react-router'
import SignIn from '@root/routes/auth/SignIn.tsx'
import Navbar from '@root/routes/layout/Navbar.tsx'
import ShortenURL from '@root/routes/shortenurl/ShortenURL.tsx'
import BookmarksDashboard from '@root/routes/bookmark/BookmarksDashboard.tsx'
import BookmarksCreation from '@root/routes/bookmark/BookmarksCreation.tsx'
import SignUp from '@root/routes/auth/SignUp.tsx'
import BookmarkRedirect from '@root/routes/bookmark/BookmarkRedirect.tsx'

const getAccessToken = () => {
  return localStorage.getItem('accessToken')
}

const requireAuth = () => {
  const token = getAccessToken()

  if (!token) {
    throw redirect('/sign-in')
  }

  return null
}

const redirectIfAuthenticated = () => {
  const token = getAccessToken()

  if (token) {
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
    path: '/sign-up',
    Component: SignUp,
    loader: redirectIfAuthenticated,
  },
  {
    path: '/',
    Component: Navbar,
    loader: requireAuth,
    children: [
      {
        index: true,
        Component: ShortenURL,
      },
      {
        path: 'bookmarks-dashboard',
        Component: BookmarksDashboard,
      },
      {
        path: 'bookmarks-creation',
        Component: BookmarksCreation,
      },
      {
        path: 'bookmark-creation/:code',
        Component: BookmarkRedirect,
      },
    ],
  },
])

export default routes
