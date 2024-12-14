type Author = {
  id: string
  name: string
}

export type Item = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}


export type Decks = {
  items: Item[]
  pagination: Pagination
}
