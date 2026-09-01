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

export interface Bookmark extends Base {
  description: string
  url: string
  code: string
  user_id: string
}

export interface Pagination {
  page: number
  limit: number
  total: number
}
