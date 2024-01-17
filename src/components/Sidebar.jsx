import React from 'react'
import SmallCalendar from './SmallCalendar'
import MyCalendars from './MyCalendars'

export default function Sidebar() {
  return (
    <aside className="border p-5 w-72 h-screen bg-white">
      {/* <CreateEventButton /> */}
      <SmallCalendar />
      <MyCalendars />
      {/* <Labels /> */}
    </aside>
  )
}