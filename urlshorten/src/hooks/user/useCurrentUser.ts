import { useQuery } from '@tanstack/react-query'
import userApi from '@root/api/axios.ts'

export interface Base {
  id: string
  created_at: string
  updated_at: string
}

export interface User extends Base {
  display_name: string
  username: string
  email: string
}

const getSelfInfo = async (): Promise<User> => {
  const response = await userApi.get<User>('/self/info')

  return response.data
}

export const useCurrentUser = () => {
  return useQuery<User, Error>({
    queryKey: ['auth', 'user'],
    queryFn: getSelfInfo,
    enabled: !!localStorage.getItem('accessToken'),
  })
}
