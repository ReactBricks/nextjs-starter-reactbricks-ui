import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../../colors'
import { types } from 'react-bricks/frontend'
import Container from './Container'

export type Border = 'full' | 'boxed' | 'none'

interface SectionProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  className?: string
  children?: React.ReactNode
  noOverflowX?: boolean
}

const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  backgroundImageDark,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  noOverflowX = false,
  children,
}) => {
  const bgColor = backgroundColor.className

  let backgroundImageCss = `
      ${
        backgroundImage
          ? `.hero-bg-img { background-image: url(${backgroundImage.src}); background-repeat: no-repeat; background-size: cover; background-position: center}`
          : ``
      }

      ${
        backgroundImageDark
          ? `.dark .hero-bg-img { background-image: url(${backgroundImageDark.src}); background-repeat: no-repeat; background-size: cover; background-position: center}`
          : `.dark .hero-bg-img { background-image: none }`
      }
    `

  return (
    <>
      <style>{backgroundImageCss}</style>
      <section
        className={classNames(
          bgColor,
          className,
          {
            'hero-bg-img': backgroundImage || backgroundImageDark,
          },
          { 'overflow-x-hidden': noOverflowX }
        )}
      >
        {borderTop !== 'none' && (
          <Container
            size={borderTop === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
        {children}
        {borderBottom !== 'none' && (
          <Container
            size={borderBottom === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
      </section>
    </>
  )
}

export default Section
