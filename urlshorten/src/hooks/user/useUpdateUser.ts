import { useMutation, useQueryClient } from '@tanstack/react-query'
import userApi from '@root/api/axios'

export interface UpdateUserPayload {
  display_name: string
  email: string
}

const updateUser = async (payload: UpdateUserPayload): Promise<void> => {
  await userApi.put('/users/update', payload)
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['auth', 'user'],
      })
    },
  })
}
