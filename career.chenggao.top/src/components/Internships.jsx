import React from 'react'
import { Calendar, MapPin, Briefcase, Trophy } from 'lucide-react'
import { internshipData } from '../data/resumeData.js'

const Internships = () => {

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "progressing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "current":
        return "在职"
      case "completed":
        return "已完成"
      case "progressing":
        return "进行中"
      default:
        return "未知"
    }
  }

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">实习经历</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            在多家知名金融机构的实习经历，积累了丰富的行业经验和专业技能
          </p>
        </div>

        <div className="space-y-8">
          {internshipData.map((internship) => (
            <div
              key={internship.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={internship.image}
                      alt={internship.company}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(internship.status)}`}>
                        {getStatusText(internship.status)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar size={16} />
                    <span>{internship.period}</span>
                    <MapPin size={16} className="ml-2" />
                    <span>{internship.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{internship.position}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-1">{internship.company}</h4>
                  <p className="text-gray-600 mb-4">{internship.department}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Briefcase size={16} className="text-blue-500" />
                        主要职责
                      </h5>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Trophy size={16} className="text-green-500" />
                        收获成果
                      </h5>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">实习经历总结</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">18个月</div>
              <div className="text-sm text-gray-600">累计实习时长</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4个</div>
              <div className="text-sm text-gray-600">覆盖金融领域</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3名</div>
              <div className="text-sm text-gray-600">AI团队管理</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">雇主好评率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internships