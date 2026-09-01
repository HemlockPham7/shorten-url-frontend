import { useEffect } from 'react'
import { useParams } from 'react-router'
import { BASE_LINK_URL } from '@root/api/utils/basePath.ts'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'

const BookmarkRedirect = () => {
  const { code } = useParams()

  useEffect(() => {
    if (!code) {
      return
    }

    window.location.href = `${BASE_LINK_URL}/links/redirect/${code}`
  }, [code])

  return (
    <main className='auth'>
      <section className='size-full glassmorphism flex-center px-6'>
        <div className='sign-in-card'>
          <header className='header'>
            <img
              src='/assets/icons/shorten-url.svg'
              alt='logo'
              className='size-7.5'
            />
            <h1 className='p-28-bold text-dark-100'>Shorten URL</h1>
          </header>

          <ButtonComponent disabled={true} className='button-class h-12 w-full'>
            <span className='p-18-semibold text-white'>Redirecting...</span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  )
}

export default BookmarkRedirect
