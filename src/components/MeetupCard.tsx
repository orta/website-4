import { Link } from "gatsby";
import React from "react";

class MeetupCard extends React.Component {
  render() {
    return (
      <div className="meetup-card">
        <Link to="/meetup1">
          <h1>I am MeetupCard to meetup1</h1>
        </Link>
        <Link to="/meetup2">
          <h1>I am MeetupCard to meetup2</h1>
        </Link>
        <Link to="/meetup3">
          <h1>I am MeetupCard to meetup3</h1>
        </Link>
      </div>
    );
  }
}

export default MeetupCard;
