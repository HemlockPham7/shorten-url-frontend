import { Header } from '@root/components'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { useState } from 'react'
import { useCreateBookmark } from '@root/hooks/bookmark/useCreateBookmark.ts'
import { useImportBookmarks } from '@root/hooks/bookmark/useImportBookmarks.ts'

const BookmarksCreation = () => {
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const {
    mutate: importBookmarks,
    data: importData,
    isPending: isImporting,
    isError: isImportError,
  } = useImportBookmarks()
  const { data, mutate, isPending, isError } = useCreateBookmark()

  const handleCreate = () => {
    mutate(
      { description, url },
      {
        onSuccess: () => {
          setDescription('')
          setUrl('')
        },
      },
    )
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null

    setSelectedFile(file)
  }

  const handleImport = () => {
    if (!selectedFile) {
      return
    }

    importBookmarks(selectedFile)
  }

  return (
    <main className='all-users wrapper'>
      <Header
        title='Bookmarks Creation'
        description='Create and Import your bookmarks'
      />

      <section className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* Create Bookmark */}
        <article className='rounded-2xl bg-white p-6 shadow-400'>
          <header className='mb-6'>
            <h2 className='p-24-semibold text-dark-100'>Create Bookmark</h2>

            <p className='mt-2 text-sm text-gray-500'>
              Create a new bookmark by entering its description and URL.
            </p>
          </header>

          <div className='flex flex-col gap-5'>
            {/* Row 1 - Description */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='description' className='form-label'>
                Description
              </label>

              <TextBoxComponent
                id='description'
                placeholder='Enter bookmark description'
                cssClass='form-input2'
                value={description}
                change={(args) => setDescription(args.value)}
              />
            </div>

            {/* Row 2 - URL */}
            <div className='flex flex-col gap-2'>
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

            {/* Row 3 - Create */}
            <ButtonComponent
              type='button'
              className='button-class h-12 w-full'
              onClick={handleCreate}
              disabled={isPending}
            >
              <span className='p-18-semibold text-white'>
                {isPending ? 'Creating...' : 'Create Bookmark'}
              </span>
            </ButtonComponent>

            {/* Row 4 - Result */}
            <div className='flex min-h-12 items-center justify-between gap-4 rounded-xl border border-light-400 bg-light-200 px-4'>
              {isError ? (
                <span className='text-sm text-red-500'>
                  Failed to create bookmark.
                </span>
              ) : data ? (
                <>
                  <span className='text-sm text-success-700'>
                    {data.message}
                  </span>

                  <div className='shrink-0 rounded-lg border border-light-400 bg-white px-3 py-1.5'>
                    <span className='font-mono text-sm font-medium text-dark-100'>
                      {data.data.code}
                    </span>
                  </div>
                </>
              ) : (
                <span className='text-sm text-gray-500'>
                  Creation result will appear here.
                </span>
              )}
            </div>
          </div>
        </article>

        {/* Import Bookmarks */}
        <article className='rounded-2xl bg-white p-6 shadow-400'>
          <header className='mb-6'>
            <h2 className='p-24-semibold text-dark-100'>Import Bookmarks</h2>

            <p className='mt-2 text-sm text-gray-500'>
              Upload a CSV file to import multiple bookmarks at once.
            </p>
          </header>

          <div className='flex flex-col gap-5'>
            {/* Row 1 - File */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='csvFile' className='form-label'>
                CSV File
              </label>

              <input
                id='csv-file'
                type='file'
                accept='.csv,text/csv'
                onChange={handleFileChange}
                className='form-input2 h-12 w-full cursor-pointer text-sm'
              />
            </div>

            {/* Row 2 - Upload */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='uploadCsv' className='form-label'>
                Button to load file csv
              </label>

              <ButtonComponent
                id='uploadCsv'
                type='button'
                className='button-class-secondary h-12 w-full'
                onClick={() => document.getElementById('csv-file')?.click()}
              >
                <span className='p-18-semibold text-dark-100'>
                  {selectedFile ? selectedFile.name : 'Choose CSV File'}
                </span>
              </ButtonComponent>
            </div>

            {/* Row 3 - Import */}
            <ButtonComponent
              type='button'
              className='button-class h-12 w-full'
              disabled={!selectedFile || isImporting}
              onClick={handleImport}
            >
              <span className='p-18-semibold text-white'>
                {isImporting ? 'Importing...' : 'Import Bookmarks'}
              </span>
            </ButtonComponent>

            {/* Row 4 - Result */}
            <div className='flex min-h-12 items-center rounded-xl border border-light-400 bg-light-200 px-4'>
              {isImportError ? (
                <span className='text-sm text-red-500'>
                  Failed to import bookmarks.
                </span>
              ) : importData ? (
                <span className='text-sm font-medium text-green-600'>
                  {importData.message}
                </span>
              ) : (
                <span className='text-sm text-gray-500'>
                  Import result will appear here.
                </span>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default BookmarksCreation
