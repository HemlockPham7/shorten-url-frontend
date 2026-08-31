import { createBrowserRouter, redirect } from 'react-router'
import SignIn from '@root/routes/auth/SignIn.tsx'
import Navbar from '@root/routes/layout/Navbar.tsx'
import ShortenURL from '@root/routes/shortenurl/ShortenURL.tsx'
import Bookmarks from '@root/routes/bookmark/Bookmarks.tsx'
import ImportBookmarks from '@root/routes/bookmark/ImportBookmarks.tsx'
import SignUp from '@root/routes/auth/SignUp.tsx'

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
