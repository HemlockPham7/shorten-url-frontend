import bookmarkApi from '@root/api/bookmark/bookmarkAxios.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export interface CreateBookmarkPayload {
  description: string
  url: string
}

export interface CreateBookmarkResponse {
  data: {
    id: string
    created_at: string
    updated_at: string
    description: string
    url: string
    code: string
    user_id: string
  }
  message: string
}

const createBookmark = async (
  payload: CreateBookmarkPayload,
): Promise<CreateBookmarkResponse> => {
  const response = await bookmarkApi.post('/bookmarks', payload)

  return response.data
}

export const useCreateBookmark = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: CreateBookmarkPayload) => createBookmark(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      })
    },
  })
}
