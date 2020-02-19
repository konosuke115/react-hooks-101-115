import React from 'react'
import Event from './Event'

const EventList = ({ state, dispatch }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.map((event, index) => {
          return <Event key={index} event={event} dispatch={dispatch} />
        })}
      </tbody>
    </table>
  )
}

export default EventList