import bookmarkApi from '@root/api/bookmark/bookmarkAxios.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const deleteBookmark = async (id: string) => {
  const response = await bookmarkApi.delete(`/bookmarks/${id}`)

  return response.data
}

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteBookmark,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      })
    },
  })
}
