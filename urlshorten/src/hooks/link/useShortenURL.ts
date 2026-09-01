import linkApi from '@root/api/link/linkAxios.ts'
import { useMutation } from '@tanstack/react-query'

interface ShortenUrlPayload {
  exp: number
  url: string
}

interface ShortenUrlResponse {
  code: string
}

const shortenUrl = async (
  payload: ShortenUrlPayload,
): Promise<ShortenUrlResponse> => {
  const response = await linkApi.post(
    '/links/shorten',
    payload
  )
  return response.data
}

export const useShortenUrl = () => {
  return useMutation<ShortenUrlResponse, unknown, ShortenUrlPayload>({
    mutationFn: shortenUrl,
  })
}