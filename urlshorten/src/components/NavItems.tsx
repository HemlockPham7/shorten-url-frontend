import { Link, NavLink, useNavigate } from 'react-router'
import { sidebarItems } from '@root/constants'
import { cn } from '@root/lib/utils.ts'
import { useCurrentUser } from '@root/hooks/useCurrentUser.ts'

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const navigate = useNavigate()
  const { data: user, isLoading } = useCurrentUser()

  const handleLogout = async () => {
    localStorage.removeItem('accessToken')
    navigate('/sign-in')
  }

  return (
    <section className='nav-items'>
      <Link to='/' className='link-logo'>
        <img
          src='/assets/icons/shorten-url.svg'
          alt='logo'
          className='size-7.5'
        />
        <h1>Shorten URL</h1>
      </Link>

      <div className='container'>
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn('group nav-item', {
                    'bg-primary-100 text-white!': isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className='nav-footer'>
          {isLoading ? (
            <img src='/assets/icons/loader.svg' alt='loading' />
          ) : (
            <>
              <img src={'/assets/images/david.webp'} alt={user?.display_name} />

              <article>
                <h2>{user?.display_name}</h2>
                <p>{user?.email}</p>
              </article>
            </>
          )}

          <button onClick={handleLogout} className='cursor-pointer'>
            <img
              src='/assets/icons/logout.svg'
              alt='logout'
              className='size-6'
            />
          </button>
        </footer>
      </div>
    </section>
  )
}

export default NavItems
