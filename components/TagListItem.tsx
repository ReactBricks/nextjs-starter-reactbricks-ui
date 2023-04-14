import React from 'react'
import Link from 'next/link'

interface TagListItemProps {
  tag: string
}

const TagListItem: React.FC<TagListItemProps> = ({ tag }) => {
  return (
    <Link
      href={`/blog/tag/${tag}`}
      className="inline-block text-sm mr-2 mb-2 transform transition-all duration-200 text-sky-900 dark:text-gray-100 bg-sky-100 dark:bg-white/20 hover:bg-sky-200 dark:hover:hover:bg-sky-500/40  dark:hover:text-white hover:-translate-y-0.5 rounded-md py-1.5 px-2.5"
    >
      {tag}
    </Link>
  )
}

export default TagListItem
