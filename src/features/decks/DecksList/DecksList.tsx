import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const decks = useAppSelector((state: AppRootState) => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // request
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])

  const mappedDecks = decks.map(el => {
    return (
      <DeckItem key={el.id} deck={el}/>
    )
  })

  return (
  <ul className={s.list}>
    {mappedDecks}
  </ul>)
}