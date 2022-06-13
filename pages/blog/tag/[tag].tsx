import classNames from 'classnames'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { fetchPages, fetchTags, types } from 'react-bricks/frontend'
import PostListItem from '../../../components/PostListItem'
import ErrorNoPage from '../../../components/errorNoPage'
import Layout from '../../../components/layout'
import config from '../../../react-bricks/config'

interface PageProps {
  pagesByTag: types.Page[]
  popularPosts: types.Page[]
  error: string
  filterTag: string
  allTags: string[]
}

const Page: React.FC<PageProps> = ({ filterTag, pagesByTag, popularPosts, allTags, error }) => {
  return (
    <Layout>
      <Head>
        <title>{filterTag}</title>
        <meta name="description" content={filterTag} />
      </Head>
      <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4">
        Blog
      </h1>
      <div className="max-w-6xl mx-auto px-8 py-16 flex space-x-24">
        <section className="flex-[2] space-y-8">
          <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">{filterTag}</h2>
          {pagesByTag?.map((post) => (
            <PostListItem
              key={post.id}
              title={post.name}
              href={post.slug}
              content={post.meta.description}
            />
          ))}
        </section>
        <section className="flex-1 space-y-16">
          <div>
            <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">Tags</h2>
            <div className="flex flex-wrap items-center">
              {/* T A G  */}
              {allTags
                ?.filter((tag) => tag !== 'popular')
                .map((tag) => (
                  <Link href={tag === filterTag ? '/blog' : `/blog/tag/${tag}`} key={tag}>
                    <a
                      className={classNames(
                        'inline-block text-sm font-bold mr-2 mb-2 transform duration-200  rounded-md px-2 py-1',
                        tag === filterTag
                          ? 'text-blue-800 bg-blue-100 hover:bg-blue-200 hover:text-blue-900'
                          : 'text-cyan-800 bg-cyan-100 hover:bg-cyan-200 hover:text-cyan-900'
                      )}
                    >
                      <div className="" style={{ zIndex: -1 }} />
                      {tag}
                    </a>
                  </Link>
                ))}
              {/*  */}
            </div>
          </div>
          <div>
            <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">Most Popular</h2>
            <ul>
              {popularPosts?.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/posts/${post.slug}`}>
                    <a className="text-gray-900 hover:text-cyan-600 font-bold text-lg leading-10 transition-colors">
                      {post.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      {error === 'NOKEYS' && <ErrorNoPage />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } }
  }
  const { tag } = context.params
  try {
    const { items: tags } = await fetchTags(process.env.API_KEY)
    tags.sort()

    const pagesByTag = await fetchPages(config.apiKey, {
      tag: tag.toString(),
      type: 'blog',
      pageSize: 1000,
      sort: '-publishedAt',
    })
    const popularPosts = await fetchPages(config.apiKey, {
      type: 'blog',
      tag: 'popular',
      sort: '-publishedAt',
    })
    return { props: { pagesByTag, filterTag: tag, popularPosts, allTags: tags } }
  } catch {
    return { props: {} }
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  if (!config.apiKey) {
    return { paths: [], fallback: false }
  }

  const { items: tags } = await fetchTags(process.env.API_KEY)

  const paths = tags.map((tag) => `/blog/tag/${tag}`)

  return { paths, fallback: false }
}

export default Page
