import { ButtonComponent } from '@syncfusion/ej2-react-buttons'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages]
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    }

    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ]
  }

  const pages = getPages()

  return (
    <div className='flex items-center justify-between bg-white border-t border-light-200 px-6 py-4'>
      {/* Previous */}
      <ButtonComponent
        type='button'
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='!bg-white !border !border-light-400 !rounded-lg !px-3 !h-10'
      >
        <span className='text-sm font-medium text-dark-100'>← Previous</span>
      </ButtonComponent>

      {/* Pages */}
      <div className='flex items-center gap-1'>
        {pages.map((page, index) =>
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className='flex size-10 items-center justify-center text-gray-500'
            >
              ...
            </span>
          ) : (
            <ButtonComponent
              key={page}
              type='button'
              onClick={() => onPageChange(Number(page))}
              className={
                page === currentPage
                  ? '!bg-primary-100 !text-white !rounded-lg !size-10'
                  : '!bg-white !text-dark-100 !rounded-lg !size-10 !shadow-none'
              }
            >
              {page}
            </ButtonComponent>
          ),
        )}
      </div>

      {/* Next */}
      <ButtonComponent
        type='button'
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='!bg-white !border !border-light-400 !rounded-lg !px-3 !h-10'
      >
        <span className='text-sm font-medium text-dark-100'>Next →</span>
      </ButtonComponent>
    </div>
  )
}

export default Pagination
