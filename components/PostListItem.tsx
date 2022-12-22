import React from 'react'
import Link from 'next/link'

interface PostListItemProps {
  title: string
  href: string
  content: string
}

const PostListItem: React.FC<PostListItemProps> = ({ title, href, content }) => {
  return (
    <Link href={`/blog/post/${href}`}>
      <div className="flex-1 block group py-4 text-gray-900 hover:bg-gray-50 transition-colors duration-300 p-6 -m-6 rounded">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="mt-4 leading-6 text-lg">{content}</p>
        <div className="flex items-center mt-4 text-cyan-500 group-hover:text-cyan-600 font-semibold">
          <div className="mr-2 group-hover:mr-4 transition-all duration-300">Read More</div>
          &raquo;
        </div>
      </div>
    </Link>
  )
}

export default PostListItem
