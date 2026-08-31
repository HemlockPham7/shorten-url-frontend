import { useMutation } from '@tanstack/react-query'
import userApi from '@root/api/user/userAxios.ts'

export interface LoginPayload {
  username: string
  password: string
}

export interface LoginResponse {
  data: string
  message: string
}

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await userApi.post<LoginResponse>('/users/login', payload)
  return response.data
}

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,

    onSuccess: (response) => {
      localStorage.setItem('accessToken', response.data)
    },
  })
}
