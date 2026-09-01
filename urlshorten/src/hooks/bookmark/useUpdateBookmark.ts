import bookmarkApi from '@root/api/bookmark/bookmarkAxios.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export interface UpdateBookmarkPayload {
  description: string
  url: string
}

export interface UpdateBookmarkResponse {
  message: string
}

const updateBookmark = async (
  id: string,
  payload: UpdateBookmarkPayload,
): Promise<UpdateBookmarkResponse> => {
  const response = await bookmarkApi.put<UpdateBookmarkResponse>(
    `/bookmarks/${id}`,
    payload,
  )
  return response.data
}

export const useUpdateBookmark = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string
      payload: UpdateBookmarkPayload
    }) => updateBookmark(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      })
    },
  })
}
