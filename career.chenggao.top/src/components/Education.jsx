import React from 'react'
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react'
import { educationData } from '../data/resumeData.js'

const Education = () => {

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教育背景</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            持续关注AI前沿知识
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden lg:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block" />

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.school}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-80`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <GraduationCap size={48} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                        <MapPin size={16} className="ml-2" />
                        <span>{item.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">{item.school}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Award size={16} className="text-yellow-500" />
                          主要成就
                        </h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Space for Layout */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">核心技能与特长</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">个人技能</h4>
                <p className="text-sm text-gray-600 leading-relaxed">SQL, Excel, Power BI, Tableau, Python<br />HTML/CSS/JavaScript, React Hooks, 前端开发<br />响应式设计, API集成, 版本控制</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">AI相关能力</h4>
                <p className="text-sm text-gray-600 leading-relaxed">AIGC技术落地, 大语言模型应用, Prompt工程, 机器学习, AI产品化与商业化, API调用</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">产品经理（PM）相关能力</h4>
                <p className="text-sm text-gray-600 leading-relaxed">用户洞察, 需求分析, 数据分析, 用户增长策略, A/B测试, 全流程项目管理, 跨团队协作, 产品方案设计</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education