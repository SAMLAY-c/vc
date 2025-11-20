import React, { useState } from 'react'

const AISection = () => {
  const [activeTab, setActiveTab] = useState('tools')

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我与AI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">从2024年3月开始深度使用AI工具，探索AI时代的工作方式和技术理念</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('tools')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'tools'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
                AI工具箱
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'philosophy'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
                AI理念
              </button>
              <button
                onClick={() => setActiveTab('journey')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'journey'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                AI历程
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'tools' && (
          <div className="space-y-8">
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🤖</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Claude Code</h3>
                        <p className="text-sm text-blue-600">终端AI工具</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">主力AI工具，终端命令行AI助手，深度集成开发工作流</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">日常编程、系统管理、问题解决</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">命令行集成</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">代码生成</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">系统诊断</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">工作流优化</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🧠</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">GLM-4.6</h3>
                        <p className="text-sm text-blue-600">国产大模型</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">智谱AI的旗舰大模型，中文理解和生成能力出色，支持多轮对话</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">中文对话、内容创作、知识问答</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">中文优化</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">长文本处理</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">多模态理解</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">代码生成</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-500">备注：</span>
                        <span className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">Z.ai</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">💬</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Claude (网页版)</h3>
                        <p className="text-sm text-blue-600">对话AI</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">最早接触的AI工具，用于学习、研究和内容创作</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">学术研究、文档写作、思维整理</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">长文本处理</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">逻辑推理</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">创意写作</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">学术讨论</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">⚡</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Cursor AI IDE</h3>
                        <p className="text-sm text-blue-600">开发工具</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">AI驱动的代码编辑器，提升编程效率</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">代码编写、重构、调试</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">智能补全</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">代码解释</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">自动重构</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">错误修复</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🔗</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">DeepSeek API</h3>
                        <p className="text-sm text-blue-600">API服务</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">集成到项目中的AI能力，用于智能化系统开发</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">系统集成、数据处理、智能分析</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">API集成</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">批量处理</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">智能识别</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">自动化流程</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🌟</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Gemini</h3>
                        <p className="text-sm text-blue-600">多模态AI</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">用于多媒体内容处理和创作</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">图像分析、内容生成、多模态交互</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">图像理解</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">多模态输入</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">创意生成</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">内容优化</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">⚡</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Bolt</h3>
                        <p className="text-sm text-blue-600">开发工具</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">AI驱动的快速应用开发平台，能够快速构建全栈应用</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">MVP快速发布、内部工具开发、AI应用原型</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">快速原型设计</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">全栈应用开发</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">AI/ML项目实验</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">编程教育学习</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🔄</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">n8n</h3>
                        <p className="text-sm text-blue-600">自动化工具</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">混合无代码/低代码工作流自动化平台，拥有400多个原生集成</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">潜在客户生成、客户支持自动化、内容管理</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">400+原生集成</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">内置AI节点</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">自定义代码支持</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">自托管或云端</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🎨</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Gamma</h3>
                        <p className="text-sm text-blue-600">设计工具</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">AI演示文稿、文档和网页生成器，快速创建设计精美的内容</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">销售演示、产品概述、教育材料</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">文本提示生成</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">专业模板库</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">嵌入丰富媒体</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">响应式设计</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🎤</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Wispr Flow</h3>
                        <p className="text-sm text-blue-600">效率工具</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">语音驱动的听写工具，具备上下文感知能力，比打字快4倍</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">撰写邮件报告、编程听写、快速捕捉想法</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">跨应用语音听写</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">上下文感知</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">实时自动编辑</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">支持100+语言</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📖</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">NotebookLM</h3>
                        <p className="text-sm text-blue-600">知识管理</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">Google的AI驱动笔记和研究助手，能够理解和分析文档</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">熟练度</span>
                        <span className="text-sm font-bold text-blue-600">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                      <p className="text-sm text-gray-600">文档分析、研究整理、知识提取</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">文档理解</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">智能摘要</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">问答系统</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">知识图谱</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-gray-300 mb-4">⋯</div>
                      <h3 className="text-lg font-bold text-gray-600 mb-2">更多工具</h3>
                      <p className="text-sm text-gray-500">持续探索AI新工具</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>
              <div className="mt-4 px-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  defaultValue="0"
                  style={{
                    background: 'linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) 0%, rgb(229, 231, 235) 0%, rgb(229, 231, 235) 100%)'
                  }}
                  readOnly
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'philosophy' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">💻</div>
                  <h3 className="text-xl font-bold text-gray-900">AI时代的编程观</h3>
                </div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">传统编程是写代码，AI时代的编程更像是写文档</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">通过自然语言描述需求和逻辑</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">让AI理解意图并生成代码</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">人类专注于架构设计和业务逻辑</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">AI负责具体实现和优化细节</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">👥</div>
                  <h3 className="text-xl font-bold text-gray-900">技术平权的实现者</h3>
                </div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">AI工具降低了技术门槛，让更多人能够实现想法</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">非技术背景的人也能开发应用</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">快速原型验证和迭代</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">专注创意而非技术细节</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">促进跨领域合作和创新</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900">超级个体的赋能工具</h3>
                </div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">AI让个人具备了团队级别的能力</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">一个人完成多角色工作</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">大幅提升工作效率和质量</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">拓展个人能力边界</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">实现更大规模的项目</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">📈</div>
                  <h3 className="text-xl font-bold text-gray-900">输出力的核心价值</h3>
                </div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">AI时代最重要的能力是将想法转化为作品</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">从想法到产品的快速转化</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">持续的内容创作和分享</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">建立个人品牌和影响力</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-gray-700">通过作品展示能力和价值</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">AI理念总结</h3>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                AI不是替代人类的工具，而是增强人类能力的伙伴。通过合理运用AI，我们能够突破传统限制，
                实现更高效的创作、更深入的学习和更广阔的创新。在AI时代，最重要的是保持开放的心态，
                拥抱变化，专注于创造真正的价值。
              </p>
            </div>
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI历程</h3>
            <div className="text-center">
              <p className="text-gray-600 text-lg">AI历程内容正在完善中...</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI使用统计</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10个月</div>
              <div className="text-sm text-gray-600">深度使用时长</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">常用AI工具</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">AI辅助项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">工作流AI化</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI合作与咨询</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">基于深度的AI应用经验，为您提供专业的AI技术咨询和解决方案</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path>
                </svg>
                AI工具星云
              </button>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                预约AI咨询
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                查看AI项目案例
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection