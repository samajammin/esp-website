import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Nav = ({ hasShadow }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "favicons/114.png" }) {
        childImageSharp {
          fixed(width: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <nav
      className={hasShadow ? "nav-shadow" : ""}
      style={{
        position: `fixed`,
        zIndex: `100`,
        background: `#ffffff`,
        width: `100%`,
        padding: `15px 60px 5px 15px`,
        backgroundColor: `white`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Ethereum Ecosystem Support Program Logo"
          />
          <div
            className="nav-logo-text"
            style={{ margin: 0, marginLeft: `5px` }}
          >
            Ecosystem Support
          </div>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" activeClassName="nav-link-active">
          Home
        </Link>
        <Link to="/faq/" activeClassName="nav-link-active">
          FAQ
        </Link>
      </div>
    </nav>
  )
}

export default Nav
