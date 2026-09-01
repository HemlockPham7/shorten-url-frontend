import { Outlet } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import {
  EditProfileModal,
  NavItems,
  TableSettingsModal,
} from '@root/components'
import { useState } from 'react'
import { useCurrentUser } from '@root/hooks/user/useCurrentUser.ts'

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const { data: user } = useCurrentUser()

  return (
    <div className='admin-layout'>
      <aside className='w-full max-w-67.5 hidden lg:block'>
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems onProfileClick={() => setIsProfileOpen(true)} />
        </SidebarComponent>
      </aside>
      <aside className='children'>
        <Outlet />
      </aside>

      {isProfileOpen && user && (
        <EditProfileModal user={user} onClose={() => setIsProfileOpen(false)} />
      )}

      <TableSettingsModal />
    </div>
  )
}

export default Navbar
