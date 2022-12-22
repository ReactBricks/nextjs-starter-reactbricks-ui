import Link from 'next/link'
import { useRouter } from 'next/router'
import { types } from 'react-bricks/frontend'

const NextLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children,
}) => {
  const router = useRouter()

  let anchorClassName = ''

  if (router.pathname === href) {
    anchorClassName = activeClassName
  } else {
    anchorClassName = className
  }

  if (isAdmin) {
    return (
      <Link href={href} className={anchorClassName}>
        {children}
      </Link>
    )
  }
  return (
    <Link href="/[slug]" as={href} className={anchorClassName}>
      {children}
    </Link>
  )
}

export default NextLink
