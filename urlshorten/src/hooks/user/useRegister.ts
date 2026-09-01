import { useMutation } from '@tanstack/react-query'
import userApi from '@root/api/user/userAxios.ts'

export interface RegisterPayload {
  username: string
  password: string
  display_name: string
  email: string
}

export interface RegisterResponse {
  data: {
    id: string
    created_at: string
    updated_at: string
    display_name: string
    username: string
    email: string
  }
  message: string
}

const register = async (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  const response = await userApi.post<RegisterResponse>(
    '/users/register',
    payload,
  )

  return response.data
}

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: register,
  })
}
