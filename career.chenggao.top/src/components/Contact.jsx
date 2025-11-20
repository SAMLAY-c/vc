import React from 'react'

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

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">联系信息</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 text-blue-600 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">学术邮箱</div>
                    <a href="mailto:224040166@link.cuhk.edu.cn" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      224040166@link.cuhk.edu.cn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 text-green-600 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">现居地</div>
                    <div className="text-gray-600">北京市朝阳区</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 text-purple-600 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">可约时间</div>
                    <div className="text-gray-600">工作日 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">社交媒体</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Cheng-hun-gu-ren"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/Gary_Chen9527"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <button
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-green-600 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label="微信"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">快速联系</h4>
              <p className="text-gray-600 mb-4 text-sm">
                如需紧急联系或预约面谈，请直接发送邮件至学术邮箱，我会在24小时内回复。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:224040166@link.cuhk.edu.cn"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  发送邮件
                </a>
                <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                  奖项证书
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact