import React from 'react'
import Link from 'next/link'
import { types, Image } from 'react-bricks/frontend'
import dayjs from 'dayjs'

interface PostListItemProps {
  title: string
  href: string
  content: string
  author: types.Author
  date: string
  featuredImg?: types.IImageSource
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
      <Image
        readonly
        source={featuredImg}
        alt="Blog article featured image"
        imageClassName="aspect-video object-cover rounded-sm"
      />

      {/* justify-between */}
      <div className="flex flex-col h-full">
        <div className="my-6">
          <h3 className="font-bold text-xl dark:text-white">{title}</h3>
          <p className="mt-2 leading-6 text-gray-800 dark:text-gray-100">
            {content}
          </p>
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
    </Link>
  )
}

export default PostListItem
