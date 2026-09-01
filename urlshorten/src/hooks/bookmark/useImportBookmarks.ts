import { useMutation, useQueryClient } from '@tanstack/react-query'
import multipartBookmarkApi from '@root/api/bookmark/multipartBookmarkAxios.ts'

interface ImportBookmarksResponse {
  message: string
}

const importBookmarks = async (
  file: File,
): Promise<ImportBookmarksResponse> => {
  const formData = new FormData()

  formData.append('file', file)

  const response = await multipartBookmarkApi.post<ImportBookmarksResponse>(
    '/bookmarks/import',
    formData,
  )

  return response.data
}

export const useImportBookmarks = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: importBookmarks,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      })
    },
  })
}
