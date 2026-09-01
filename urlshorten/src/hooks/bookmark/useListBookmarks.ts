import type { Bookmark, Pagination } from '@root/hooks/common/utils.ts'
import bookmarkApi from '@root/api/bookmark/bookmarkAxios.ts'
import { useQuery } from '@tanstack/react-query'

export interface GetBookmarksPayload {
  page: number
  limit: number
}

export interface GetBookmarksResponse {
  data: Bookmark[]
  pagination: Pagination
}

const getBookmarks = async (
  payload: GetBookmarksPayload,
): Promise<GetBookmarksResponse> => {
  const response = await bookmarkApi.get<GetBookmarksResponse>(
    '/bookmarks/get',
    { params: payload },
  )
  return response.data
}

export const useListBookmarks = (payload: GetBookmarksPayload) => {
  return useQuery<GetBookmarksResponse, Error>({
    queryKey: ['bookmarks', payload.page, payload.limit],
    queryFn: () => getBookmarks(payload),
  })
}
