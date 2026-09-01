import { useUpdateBookmark } from '@root/hooks/bookmark/useUpdateBookmark.ts'
import type { Bookmark } from '@root/hooks/common/utils.ts'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { useEffect, useState } from 'react'

interface EditBookmarkModalProps {
  bookmark: Bookmark
  onClose: () => void
}

const EditBookmarkModal = ({ bookmark, onClose }: EditBookmarkModalProps) => {
  const updateBookmarkMutation = useUpdateBookmark()

  const [description, setDescription] = useState(bookmark.description)
  const [url, setUrl] = useState(bookmark.url)

  useEffect(() => {
    setDescription(bookmark.description)
    setUrl(bookmark.url)
  }, [bookmark])

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    updateBookmarkMutation.mutate(
      {
        id: bookmark.id,
        payload: {
          description,
          url,
        },
      },
      {
        onSuccess: () => {
          onClose()
        },
      },
    )
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
          <h2 className='p-24-semibold text-dark-100'>Edit Bookmark</h2>

          <p className='mt-2 text-sm text-gray-500'>
            Update your bookmark information
          </p>
        </header>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>

            <TextBoxComponent
              id='description'
              value={description}
              placeholder='Enter bookmark description'
              cssClass='form-input'
              change={(args) => setDescription(args.value)}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='url' className='form-label'>
              URL
            </label>

            <TextBoxComponent
              id='url'
              value={url}
              placeholder='Enter bookmark URL'
              cssClass='form-input'
              change={(args) => setUrl(args.value)}
            />
          </div>

          {updateBookmarkMutation.isError && (
            <p className='error'>Failed to update bookmark</p>
          )}

          <div className='flex gap-3 pt-2'>
            <ButtonComponent
              type='button'
              className='button-class-secondary h-12 flex-1'
              onClick={onClose}
            >
              <span className='p-18-semibold text-dark-100'>Cancel</span>
            </ButtonComponent>

            <ButtonComponent
              type='submit'
              className='button-class h-12 flex-1'
              disabled={updateBookmarkMutation.isPending}
            >
              <span className='p-18-semibold text-white'>
                {updateBookmarkMutation.isPending
                  ? 'Saving...'
                  : 'Save Changes'}
              </span>
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBookmarkModal
