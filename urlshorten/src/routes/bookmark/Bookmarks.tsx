import { useSearchParams } from 'react-router'
import { useListBookmarks } from '@root/hooks/bookmark/useListBookmarks.ts'
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids'
import { EditBookmarkModal, Header, Pagination } from '@root/components'
import { Pencil, Trash2 } from 'lucide-react'
import type { Bookmark } from '@root/hooks/common/utils.ts'
import { useState } from 'react'

const PAGE_SIZE = 5

const Bookmarks = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null)

  const pageFromUrl = Number(searchParams.get('page') || '1')
  const currentPage = Math.max(pageFromUrl, 1)

  const { data, isLoading, isError } = useListBookmarks({
    page: currentPage,
    limit: PAGE_SIZE,
  })

  const bookmarks = data?.data ?? []
  const totalPages = Math.ceil((data?.pagination.total ?? 0) / PAGE_SIZE)

  const safeCurrentPage = totalPages > 0 ? Math.min(currentPage, totalPages) : 1

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: String(page),
    })
  }

  const handleDelete = (id: string) => {
    console.log('Delete bookmark:', id)
  }

  if (isError) {
    return (
      <main className='all-users wrapper'>
        <Header
          title='Manage Bookmarks'
          description='Filter, sort, and access your bookmarks'
          ctaText='Create a bookmark'
          ctaUrl='/bookmarks/create'
        />

        <p className='mt-6 text-red-500'>Failed to load bookmarks.</p>
      </main>
    )
  }

  return (
    <main className='all-users wrapper'>
      <Header
        title='Manage Bookmarks'
        description='Filter, sort, and access your bookmarks'
        ctaText='Create a bookmark'
        ctaUrl='/bookmarks/create'
      />

      <section>
        <GridComponent dataSource={bookmarks} gridLines='None'>
          <ColumnsDirective>
            <ColumnDirective
              field='description'
              headerText='Description'
              width='200'
              textAlign='Left'
            />

            <ColumnDirective
              field='url'
              headerText='URL'
              width='300'
              textAlign='Left'
            />

            <ColumnDirective
              field='code'
              headerText='Code'
              width='140'
              textAlign='Left'
            />

            <ColumnDirective
              headerText='Actions'
              width='120'
              textAlign='Center'
              template={(bookmark: Bookmark) => (
                <div className='flex items-center justify-center gap-3'>
                  <button
                    type='button'
                    className='text-gray-500 hover:text-primary-500 transition-colors'
                    onClick={() => setEditingBookmark(bookmark)}
                    aria-label='Edit bookmark'
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    type='button'
                    className='text-gray-500 hover:text-red-500 transition-colors'
                    onClick={() => handleDelete(bookmark.id)}
                    aria-label='Delete bookmark'
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            />
          </ColumnsDirective>
        </GridComponent>

        {isLoading ? (
          <div className='py-6 text-center text-gray-500'>
            Loading bookmarks...
          </div>
        ) : (
          <Pagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>

      {editingBookmark && (
        <EditBookmarkModal
          bookmark={editingBookmark}
          onClose={() => setEditingBookmark(null)}
        />
      )}
    </main>
  )
}

export default Bookmarks
