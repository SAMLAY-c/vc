import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 林承列. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="/contact-form"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              🤝 合作表单
            </a>
            <a
              href="https://github.com/SAM-yuan-shan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.41-5.59 5.59-5.41S8 2.59S3 11.18 2.59S0 0c-4.09 0-7.59-4.09-17.18 8.09-8.09-17.18-8.09-17.18-17.18 8.09-17.18c0-8.09 0-8.09 8.09 0 7.59 4.09 12.59 2.59 17.18 2.59 12.59 5.41 19 5.41 19 19 5.41c0 0-8.09 0-8.09 8.09 17.18c0-8.09 8.09 17.18 0 8.09 8.09 17.18 8.09z"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer