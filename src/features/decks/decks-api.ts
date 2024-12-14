import axios from 'axios'
import { Decks } from './Decks-api-type'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


// Create object request
export const decksApi = {
  fetchDecks() {
    return instance.get<Decks>('/v2/decks')
  },




  
  // updateTodolist(payload: { id: string; title: string }) {
  //   const { title, id } = payload
  //   return instance.put<BaseResponse>(`todo-lists/${id}`, { title })
  // },
  // createTodolist(title: string) {
  //   return instance.post<BaseResponse<{ item: Todolist }>>("todo-lists", { title })
  // },
  // deleteTodolist(id: string) {
  //   return instance.delete<BaseResponse>(`todo-lists/${id}`)
  // },
}