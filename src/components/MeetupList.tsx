import React from "react"
import { Link } from "gatsby"

export default function MeetupList() {
  return (
    <div className="meetup-list">
      <Link to="/meetup1"><h1>Meetup 1</h1></Link>
      <Link to="/meetup2"><h1>Meetup 2</h1></Link>
      <Link to="/meetup3"><h1>Meetup 3</h1></Link>
    </div>
  )
}
