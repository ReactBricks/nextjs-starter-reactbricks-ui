import Link from 'next/link'
import { useRouter } from 'next/router'
import { types } from 'react-bricks/frontend'

const NextLink: types.RenderLocalLink = ({
  href,
  target,
  rel,
  className,
  activeClassName,
  isAdmin,
  children,
}) => {
  const router = useRouter()

  let anchorClassName = ''

  if (router.asPath === href) {
    anchorClassName = `${className} ${activeClassName}`
  } else {
    anchorClassName = className
  }

  if (isAdmin) {
    return (
      <Link href={href} target={target} rel={rel} className={anchorClassName}>
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} target={target} rel={rel} className={anchorClassName}>
      {children}
    </Link>
  )
}

export default NextLink
