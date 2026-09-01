import { useSearchParams } from 'react-router'
import { useListBookmarks } from '@root/hooks/bookmark/useListBookmarks.ts'
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids'
import {
  DeleteBookmarkModal,
  EditBookmarkModal,
  Header,
  Pagination,
} from '@root/components'
import { Pencil, Trash2 } from 'lucide-react'
import type { Bookmark } from '@root/hooks/common/utils.ts'
import { useEffect, useRef, useState } from 'react'
import { useTableSettings } from '@root/context/TableSettingsContext.tsx'
import TableToolbar from '@root/components/TableToolbar.tsx'

const BookmarksDashboard = () => {
  const { pageSize } = useTableSettings()
  const [searchParams, setSearchParams] = useSearchParams()
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null)
  const [deletingBookmark, setDeletingBookmark] = useState<Bookmark | null>(
    null,
  )
  const previousPageSize = useRef(pageSize)

  const pageFromUrl = Number(searchParams.get('page') || '1')
  const currentPage = Math.max(pageFromUrl, 1)

  const { data, isLoading, isError } = useListBookmarks({
    page: currentPage,
    limit: pageSize,
  })

  const bookmarks = data?.data ?? []
  const totalPages = Math.ceil((data?.pagination.total ?? 0) / pageSize)

  const safeCurrentPage = totalPages > 0 ? Math.min(currentPage, totalPages) : 1

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: String(page),
    })
  }

  useEffect(() => {
    if (previousPageSize.current !== pageSize) {
      setSearchParams({
        page: '1',
      })

      previousPageSize.current = pageSize
    }
  }, [pageSize, setSearchParams])

  if (isError) {
    return (
      <main className='all-users wrapper'>
        <Header
          title='Manage Bookmarks'
          description='Filter, sort, and access your bookmarks'
          ctaText='Create a bookmark'
          ctaUrl='/bookmarks-creation'
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
        ctaUrl='/bookmarks-creation'
      />

      <section>
        <TableToolbar title='Table Bookmarks' />

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
                    onClick={() => setDeletingBookmark(bookmark)}
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

      {deletingBookmark && (
        <DeleteBookmarkModal
          bookmark={deletingBookmark}
          onClose={() => setDeletingBookmark(null)}
        />
      )}
    </main>
  )
}

export default BookmarksDashboard
