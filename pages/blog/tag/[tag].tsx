import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  PageViewer,
  cleanPage,
  fetchPage,
  fetchPages,
  fetchTags,
  types,
  useReactBricksContext,
} from 'react-bricks/frontend'

import PostListItem from '../../../components/PostListItem'
import TagListItem from '../../../components/TagListItem'
import ErrorNoFooter from '../../../components/errorNoFooter'
import ErrorNoHeader from '../../../components/errorNoHeader'
import ErrorNoKeys from '../../../components/errorNoKeys'
import Layout from '../../../components/layout'
import config from '../../../react-bricks/config'

interface PageProps {
  pagesByTag: types.Page[]
  popularPosts: types.Page[]
  errorNoKeys: string
  errorHeader: string
  errorFooter: string
  filterTag: string
  allTags: string[]
  header: types.Page
  footer: types.Page
}

const Page: React.FC<PageProps> = ({
  filterTag,
  pagesByTag,
  allTags,
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
            <title>{filterTag}</title>
            <meta name="description" content={filterTag} />
          </Head>
          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} />
          ) : (
            <ErrorNoHeader />
          )}
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-8 py-16">
              <div className="flex items-center justify-between  text-gray-900 dark:text-white pb-4 mt-10 sm:mt-12 mb-4">
                <h1 className="max-w-2xl text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight">
                  {filterTag} articles
                </h1>

                <Link
                  href="/blog"
                  className="hover:-translate-x-2 transition-transform duration-300"
                >
                  &laquo; Return to blog
                </Link>
              </div>

              <div className="flex flex-wrap items-center">
                {allTags?.map((tag) => (
                  <TagListItem tag={tag} key={tag} />
                ))}
              </div>

              <hr className="mt-6 mb-10 dark:border-gray-600" />

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-12">
                {pagesByTag?.map((post) => (
                  <PostListItem
                    key={post.id}
                    title={post.meta.title}
                    href={post.slug}
                    content={post.meta.description}
                    author={post.author}
                    date={post.publishedAt}
                    featuredImg={post.meta.image}
                  />
                ))}
              </div>
            </div>
          </div>
          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} />
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
  let errorNoKeys: boolean = false
  let errorPage: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { error: 'NOKEYS' } }
  }

  const { tag } = context.params

  try {
    const [pagesByTag, tagsResult, header, footer] = await Promise.all([
      fetchPages(config.apiKey, {
        tag: tag.toString(),
        type: 'blog',
        pageSize: 100,
        sort: '-publishedAt',
      }),
      fetchTags(process.env.API_KEY),
      fetchPage('header', config.apiKey, context.locale)
        .then(({ author, ...page }) => page)
        .catch(() => {
          errorHeader = true
          return {}
        }),
      fetchPage('footer', config.apiKey, context.locale)
        .then(({ author, ...page }) => page)
        .catch(() => {
          errorFooter = true
          return {}
        }),
    ])

    return {
      props: {
        pagesByTag,
        filterTag: tag,
        allTags: tagsResult.items.sort(),
        header,
        footer,
        errorNoKeys,
        errorPage,
        errorHeader,
        errorFooter,
      },
    }
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
