import React from 'react'
import { links } from '../data/links'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">联系方式</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            欢迎与我联系，期待与您的交流与合作
          </p>
        </div>

        <div className="text-center py-12">
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>邮箱：</strong>
              <a href="mailto:15396631779@163.com" className="text-blue-600 hover:text-blue-700">
                15396631779@163.com
              </a>
            </p>
            <p className="text-gray-600">
              <strong>GitHub：</strong>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                github.com/SAM-yuan-shan
              </a>
            </p>
            <p className="text-gray-600">
              <strong>个人网站：</strong>
              <a href={links.personalWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                life.chenggao.top
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact