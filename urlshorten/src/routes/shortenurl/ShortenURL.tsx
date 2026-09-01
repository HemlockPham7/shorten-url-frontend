import { Header } from '@root/components'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { useState } from 'react'
import { useShortenUrl } from '@root/hooks/bookmark/useShortenURL.ts'

const ShortenURL = () => {
  const [url, setUrl] = useState('')
  const [expiry, setExpiry] = useState('60')
  const { data, mutate, isPending, isError } = useShortenUrl()

  const [shortenUrl, setShortenUrl] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')

  const handleGenerate = () => {
    mutate({ url, exp: Number(expiry) })
  }

  const handleGetRedirectUrl = () => {
    setRedirectUrl(`http://localhost:8081/bookmark-creation/${shortenUrl}`)
  }

  return (
    <main className='all-users wrapper'>
      <Header
        title='Shorten URL'
        description='Create a shorten url with expiry time'
      />

      <section className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* Generate Short URL */}
        <article className='rounded-2xl bg-white p-6 shadow-400'>
          <header className='mb-6'>
            <h2 className='p-24-semibold text-dark-100'>Generate Short URL</h2>

            <p className='mt-2 text-sm text-gray-500'>
              Enter a URL and set an expiry time to generate a shortened link.
            </p>
          </header>

          <div className='flex flex-col gap-5'>
            {/* Row 1 */}
            <div className='flex flex-col gap-5 sm:flex-row'>
              <div className='flex min-w-0 flex-1 flex-col gap-2'>
                <label htmlFor='url' className='form-label'>
                  URL
                </label>

                <TextBoxComponent
                  id='url'
                  placeholder='https://example.com'
                  cssClass='form-input2'
                  value={url}
                  change={(args) => setUrl(args.value)}
                />
              </div>

              <div className='flex w-full flex-col gap-2 sm:w-32'>
                <label htmlFor='expiry' className='form-label'>
                  Expiry
                </label>

                <TextBoxComponent
                  id='expiry'
                  type='number'
                  placeholder='60'
                  cssClass='form-input2'
                  value={expiry}
                  change={(args) => setExpiry(args.value)}
                />
              </div>
            </div>

            {/* Row 2 */}
            <ButtonComponent
              type='button'
              className='button-class h-12 w-full'
              onClick={handleGenerate}
              disabled={isPending}
            >
              <span className='p-18-semibold text-white'>
                {isPending ? 'Generating...' : 'Generate'}
              </span>
            </ButtonComponent>

            {/* Row 3 */}
            <div className='flex min-h-12 items-center rounded-xl border border-light-400 bg-light-200 px-4'>
              {isError ? (
                <span className='text-sm text-red-500'>
                  Failed to generate shortened URL.
                </span>
              ) : data ? (
                <span className='text-sm font-medium text-dark-100'>
                  {data.code}
                </span>
              ) : (
                <span className='truncate text-sm text-gray-500'>
                  Your shortened URL will appear here
                </span>
              )}
            </div>
          </div>
        </article>

        {/* Get Redirect URL */}
        <article className='rounded-2xl bg-white p-6 shadow-400'>
          <header className='mb-6'>
            <h2 className='p-24-semibold text-dark-100'>Get Redirect URL</h2>

            <p className='mt-2 text-sm text-gray-500'>
              Enter a shorten code to retrieve the original URL.
            </p>
          </header>

          <div className='flex flex-col gap-5'>
            {/* Row 1 */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='shortenCode' className='form-label'>
                Shorten Code
              </label>

              <TextBoxComponent
                id='shortenCode'
                placeholder='Enter shorten code'
                cssClass='form-input2'
                value={shortenUrl}
                change={(args) => setShortenUrl(args.value)}
              />
            </div>

            {/* Row 2 */}
            <ButtonComponent
              type='button'
              className='button-class h-12 w-full'
              onClick={handleGetRedirectUrl}
            >
              <span className='p-18-semibold text-white'>Get Redirect URL</span>
            </ButtonComponent>

            {/* Row 3 */}
            <div className='flex min-h-12 items-center rounded-xl border border-light-400 bg-light-200 px-4'>
              {redirectUrl ? (
                <span className='truncate text-sm text-gray-500'>
                  {redirectUrl}
                </span>
              ) : (
                <span className='truncate text-sm text-gray-500'>
                  The original URL will appear here
                </span>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default ShortenURL
