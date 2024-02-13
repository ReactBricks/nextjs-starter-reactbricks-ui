import { GetStaticProps } from 'next'
import Head from 'next/head'
import {
  PageViewer,
  cleanPage,
  fetchPage,
  fetchPages,
  fetchTags,
  types,
  useReactBricksContext,
} from 'react-bricks/frontend'

import PostListItem from '../../components/PostListItem'
import TagListItem from '../../components/TagListItem'
import ErrorNoFooter from '../../components/errorNoFooter'
import ErrorNoHeader from '../../components/errorNoHeader'
import ErrorNoKeys from '../../components/errorNoKeys'
import Layout from '../../components/layout'
import config from '../../react-bricks/config'

interface HomeProps {
  errorNoKeys: string
  errorHeader: string
  errorFooter: string
  tags: string[]
  posts: types.Page[]
  header: types.Page
  footer: types.Page
}

const BlogList: React.FC<HomeProps> = ({
  tags,
  posts,
  errorNoKeys,
  errorHeader,
  errorFooter,
  header,
  footer,
}) => {
  const { pageTypes, bricks } = useReactBricksContext()
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      {!errorNoKeys && (
        <>
          <Head>
            <title>Post List</title>
            <meta name="description" content="React Bricks blog starter" />
          </Head>
          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} showClickToEdit={false} />
          ) : (
            <ErrorNoHeader />
          )}
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-8 py-16">
              <h1 className="max-w-2xl text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white pb-4 mt-10 sm:mt-12 mb-4">
                Our latest articles
              </h1>

              <div className="flex flex-wrap items-center">
                {tags?.map((tag) => (
                  <TagListItem tag={tag} key={tag} />
                ))}
              </div>

              <hr className="mt-6 mb-10 dark:border-gray-600" />

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-12">
                {posts?.map((post) => {
                  return (
                    <PostListItem
                      key={post.id}
                      title={post.meta.title}
                      href={post.slug}
                      content={post.meta.description}
                      author={post.author}
                      date={post.publishedAt}
                      featuredImg={post.meta.image}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} showClickToEdit={false} />
          ) : (
            <ErrorNoFooter />
          )}
        </>
      )}
      {errorNoKeys && <ErrorNoKeys />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let header: {} | types.Page
  let footer: {} | types.Page
  let errorNoKeys: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { errorNoKeys } }
  }
  try {
    const { items: tags } = await fetchTags(process.env.API_KEY)
    tags.sort()

    const posts = await fetchPages(process.env.API_KEY, {
      type: 'blog',
      pageSize: 1000,
      sort: '-publishedAt',
    })

    header = await fetchPage('header', config.apiKey, context.locale)
      .then(({ author, ...page }) => page)
      .catch(() => {
        errorHeader = true
        return {}
      })

    footer = await fetchPage('footer', config.apiKey, context.locale)
      .then(({ author, ...page }) => page)
      .catch(() => {
        errorFooter = true
        return {}
      })

    return { props: { posts, tags, header, footer, errorHeader, errorFooter } }
  } catch {
    return { props: { header, footer, errorHeader, errorFooter } }
  }
}

export default BlogList
