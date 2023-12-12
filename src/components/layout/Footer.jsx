import React from 'react'

const Footer = ({footerNavigation}) => {
  return (
    <footer
          className="bg-white border-t border-gray-200 fixed left-0 bottom-0 w-[100vw] z-50"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8">
            <div className="pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                &copy; 2023 KanBan App, Inc. Developed for Ironhacks mini-project.
              </p>
            </div>
          </div>
        </footer>
  )
}

export default Footer