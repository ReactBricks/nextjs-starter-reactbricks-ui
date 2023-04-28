import blockNames from '../blockNames'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Text, Repeater, types, Link, Plain } from 'react-bricks/frontend'
import useOnClickOutside from './useClickOutside'
import { textColors } from '../colors'

interface HeaderMenuItemProps {
  linkPath: string
  linkText: any
  submenuItems?: any
  mobileRef?: React.MutableRefObject<HTMLDivElement>
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderMenuItem: types.Brick<HeaderMenuItemProps> = ({
  linkPath,
  linkText,
  submenuItems,
  mobileRef,
  setMobileMenuOpen,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setOpen(false))
  useOnClickOutside(mobileRef, () => setMobileMenuOpen(false))
  if (!submenuItems || !submenuItems.length) {
    return (
      <div>
        <Link
          href={linkPath}
          className="hidden lg:inline-flex justify-center items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out text-gray-600 dark:text-white hover:bg-sky-500/20 dark:hover:bg-sky-500/40 hover:text-sky-600"
          activeClassName="text-sky-600 bg-sky-500/10 dark:bg-sky-500/30"
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderBlock={({ children }) => <span>{children}</span>}
          />
        </Link>
        <Link
          href={linkPath}
          className="block lg:hidden text-sm mb-3 transition-colors ease-out text-gray-800 hover:text-sky-600"
        >
          <div onClick={() => setMobileMenuOpen(false)}>
            {' '}
            {typeof linkText === 'string'
              ? linkText
              : Plain.serialize(linkText)}
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div ref={ref} className="hidden lg:block relative">
        <button
          className={classNames(
            'text-gray-600 dark:text-white hover:bg-sky-500/20 hover:text-sky-600 dark:hover:bg-sky-500/40 inline-flex justify-center items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out',
            { 'bg-sky-500/20 dark:bg-sky-500/40 text-sky-600': open }
          )}
          onClick={() => setOpen((current) => !current)}
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderBlock={({ children }) => <div>{children}</div>}
          />
          {open ? (
            <svg
              viewBox="0 0 14 14"
              width="14px"
              height="14px"
              className="inline-block w-[10px] h-[10px] ml-[5px]"
            >
              <path
                d="m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 14 14"
              width="14px"
              height="14px"
              className="inline-block w-[10px] h-[10px] ml-[5px]"
            >
              <path
                d="m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>
        {open && (
          <div className="w-64 bg-white p-3 border rounded-md shadow-lg absolute top-9 z-[1000]">
            <Repeater
              propName="submenuItems"
              renderItemWrapper={(item) => (
                <div
                  key={item.key}
                  onClick={() => setOpen((current) => !current)}
                >
                  {item}
                </div>
              )}
            />
          </div>
        )}
      </div>

      <div className="lg:hidden mb-6" role="group">
        <div
          className={`text-xs font-extrabold text-gray-500 uppercase tracking-[0.35rem] mb-4`}
        >
          {typeof linkText === 'string' ? linkText : Plain.serialize(linkText)}
        </div>
        <Repeater
          propName="submenuItems"
          renderItemWrapper={(item) => (
            <div key={item.key} onClick={() => setMobileMenuOpen(false)}>
              {item}
            </div>
          )}
        />
      </div>
    </div>
  )
}

HeaderMenuItem.schema = {
  name: blockNames.HeaderMenuItem,
  label: 'Menu Item',
  category: 'layout',
  hideFromAddMenu: true,

  repeaterItems: [
    {
      name: 'submenuItems',
      itemType: blockNames.HeaderMenuSubItem,
    },
  ],

  getDefaultProps: () => ({
    linkPath: '/about-us',
    linkText: 'About us',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuItem
