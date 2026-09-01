import { useQuery } from '@tanstack/react-query'
import userApi from '@root/api/user/userAxios.ts'
import type { User } from '@root/hooks/common/utils.ts'

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
