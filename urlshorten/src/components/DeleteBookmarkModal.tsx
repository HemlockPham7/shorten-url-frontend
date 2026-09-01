import { useDeleteBookmark } from '@root/hooks/bookmark/useDeleteBookmark.ts'
import type { Bookmark } from '@root/hooks/common/utils.ts'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'

interface DeleteBookmarkModalProps {
  bookmark: Bookmark
  onClose: () => void
}

const DeleteBookmarkModal = ({
  bookmark,
  onClose,
}: DeleteBookmarkModalProps) => {
  const deleteBookmarkMutation = useDeleteBookmark()

  const handleDelete = () => {
    deleteBookmarkMutation.mutate(bookmark.id, {
      onSuccess: () => {
        onClose()
      },
    })
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6'
      onClick={onClose}
    >
      <div
        className='w-full max-w-125 rounded-2xl bg-white p-6 shadow-200'
        onClick={(e) => e.stopPropagation()}
      >
        <header className='mb-6'>
          <h2 className='p-24-semibold text-dark-100'>Delete Bookmark</h2>

          <p className='mt-2 text-sm text-gray-500'>
            Are you sure you want to delete this bookmark?
          </p>
        </header>

        <div className='mb-6 flex flex-col gap-2 rounded-xl bg-light-300 p-4'>
          <p className='font-semibold text-dark-100'>{bookmark.description}</p>

          <p className='truncate text-sm text-gray-500'>{bookmark.url}</p>
        </div>

        {deleteBookmarkMutation.isError && (
          <p className='error mb-4'>Failed to delete bookmark</p>
        )}

        <div className='flex gap-3'>
          <ButtonComponent
            type='button'
            className='button-class-secondary h-12 flex-1'
            onClick={onClose}
            disabled={deleteBookmarkMutation.isPending}
          >
            <span className='p-18-semibold text-dark-100'>Cancel</span>
          </ButtonComponent>

          <ButtonComponent
            type='button'
            className='!bg-red-100 h-12 flex-1 !rounded-lg'
            onClick={handleDelete}
            disabled={deleteBookmarkMutation.isPending}
          >
            <span className='p-18-semibold text-white'>
              {deleteBookmarkMutation.isPending ? 'Deleting...' : 'Delete'}
            </span>
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}

export default DeleteBookmarkModal
