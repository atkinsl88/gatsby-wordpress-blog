import * as React from "react"
import { Link } from "gatsby"
import { HomeIcon, ChevronLeftIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';

const Header = ({ siteTitle }) => (

  <header
    style={{
      margin: `0 auto`,
      padding: `1rem`,
      background: `#222323`,
    }}
  >
    <div
      className="container"
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >

      <div>
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            color: `#FFFFFF`,
          }}
        >
          <HomeIcon />
        </Link>
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            color: `#FFFFFF`,
          }}
        >
          <ChevronLeftIcon />
        </Link>
      </div>

      <div>
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            color: `#FFFFFF`,
          }}
        >
          <QuestionMarkCircledIcon />
        </Link>
      </div>
      
    </div>
  </header>
)

export default Header
