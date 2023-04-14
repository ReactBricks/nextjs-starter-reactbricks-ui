import React from 'react'
import Link from 'next/link'
import { types } from 'react-bricks/frontend'
import dayjs from 'dayjs'

interface PostListItemProps {
  title: string
  href: string
  content: string
  author: types.Author
  date: string
  featuredImg?: string
}

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  href,
  content,
  author,
  date,
  featuredImg,
}) => {
  return (
    <Link
      href={`/blog/post/${href}`}
      className="flex flex-col hover:-translate-y-2 transition-transform duration-300"
    >
      <img src={featuredImg} className="aspect-video object-cover rounded-sm" />

      {/* justify-between */}
      <div className="flex flex-col h-full">
        <div className="my-6">
          <h3 className="font-bold text-xl dark:text-white">{title}</h3>
          <p className="mt-2 leading-6 text-gray-800 dark:text-gray-100">{content}</p>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src={author.avatarUrl}
            alt={author.firstName + ' ' + author.lastName}
            className="w-8 rounded-full"
          />
          <div>
            <div className="text-sm text-gray-800 dark:text-gray-100">
              {author.firstName} {author.lastName}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {dayjs(date).format('DD MMM YYYY')}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex-1 my-4 bg-gray-100 block group py-4 text-gray-900 hover:bg-gray-50 transition-colors duration-300 p-6 -m-6 rounded">
        <div className="flex items-center space-x-4">
        <div className="flex items-center mt-4 text-cyan-500 group-hover:text-cyan-600 font-semibold">
          <div className="mr-2 group-hover:mr-4 transition-all duration-300">
            Read More
          </div>
          &raquo;
        </div>
        </div>
      </div> */}
    </Link>
  )
}

export default PostListItem
