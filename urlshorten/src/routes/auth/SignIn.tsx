import { Link, useNavigate } from 'react-router'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { useLogin } from '@root/hooks/user/useLogin.ts'

const SignIn = () => {
  const navigate = useNavigate()
  const { mutate: login, isPending } = useLogin()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const username = formData.get('username') as string
    const password = formData.get('password') as string

    login(
      {
        username,
        password,
      },
      {
        onSuccess: () => {
          navigate('/')
        },
      },
    )
  }

  return (
    <main className='auth'>
      <section className='size-full glassmorphism flex-center px-6'>
        <div className='sign-in-card'>
          <header className='header'>
            <Link to='/'>
              <img
                src='/assets/icons/shorten-url.svg'
                alt='logo'
                className='size-7.5'
              />
            </Link>
            <h1 className='p-28-bold text-dark-100'>Shorten URL</h1>
          </header>

          <article>
            <h2 className='p-28-semibold text-dark-100 text-center'>
              Start Your Shorten URL
            </h2>
          </article>

          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>

              <TextBoxComponent
                id='username'
                name='username'
                type='text'
                placeholder='Enter your username'
                cssClass='form-input'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>

              <TextBoxComponent
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password'
                cssClass='form-input'
              />
            </div>

            <div className='flex flex-col gap-3 mt-2'>
              <ButtonComponent
                type='submit'
                className='button-class h-12 w-full'
              >
                <span className='p-18-semibold text-white'>
                  {isPending ? 'Loading...' : 'Sign In'}
                </span>
              </ButtonComponent>

              <ButtonComponent
                type='button'
                className='button-class-google h-12 w-full'
                // onClick={loginWithGoogle}
              >
                <img
                  src='/assets/icons/google.svg'
                  className='size-5'
                  alt='google'
                />

                <span className='p-18-semibold text-white'>
                  Sign in with Google
                </span>
              </ButtonComponent>

              <ButtonComponent
                type='button'
                className='button-class-secondary h-12 w-full'
                onClick={() => navigate('/sign-up')}
              >
                <span className='p-18-semibold text-dark-100'>Sign Up</span>
              </ButtonComponent>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
export default SignIn
