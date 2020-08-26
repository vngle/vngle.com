import React from "react"
import { Link as GatsbyLink } from "gatsby"

/**
 * Wrapper around gatsby-link to return normal anchor element when "to" attribute is an external link
 *
 * Since DOM elements <a> cannot receive activeClassName
 * and partiallyActive, destructure the prop here and
 * pass it only to GatsbyLink
 *
 * @param {JSX} children - children of link elements (Gatsby Link or <a>)
 * @param {String} to - route to this link
 * @param {String} activeClassName - class name that will only be added to the Link when the current item is active
 * @param {Boolean} partiallyActive - set whether active style should be shown for partially matched links
 * @param {Boolean} external - explicitly use anchor element
 * @param {Object} other - other attributes passed to gatsby-link
 */
const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  external,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const isGatsbyLink = /^\/(?!\/)/.test(to) && !external

  // Use Gatsby Link for internal links, and <a> for others
  if (isGatsbyLink) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
