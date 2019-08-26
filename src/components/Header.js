import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <Link to="/"><h1>header</h1></Link>
      </div>
    )
  }
}

export default Header