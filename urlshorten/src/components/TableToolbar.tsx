import { Search, Settings } from 'lucide-react'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { useTableSettings } from '@root/context/TableSettingsContext.tsx'

interface TableToolbarProps {
  title: string
}

const TableToolbar = ({ title }: TableToolbarProps) => {
  const { openSettings } = useTableSettings()

  return (
    <div className='flex items-center justify-between bg-white border-t border-light-200 px-6 py-1'>
      <h2 className='text-lg font-semibold text-dark-100'>{title}</h2>

      <div className='flex items-center gap-3'>
        <button
          type='button'
          onClick={openSettings}
          className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-light-400 bg-white text-gray-500 transition-colors hover:text-dark-100'
          aria-label='Table settings'
        >
          <Settings size={20} />
        </button>

        <div className='relative w-72'>
          <TextBoxComponent placeholder='Search...' cssClass='form-input' />

          <Search
            size={18}
            className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
          />
        </div>
      </div>
    </div>
  )
}

export default TableToolbar
