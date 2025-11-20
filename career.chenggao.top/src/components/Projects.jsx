import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExternalLink, Calendar, Users, Building, CheckCircle } from 'lucide-react'
import { projectData } from '../data/resumeData.js'
import { links } from '../data/resumeData.js'

// SVG Icons for projects
const AIEducationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    style={{ width: '24px', height: '24px' }}
  >
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
)

const GrowthStrategyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    style={{ width: '24px', height: '24px' }}
  >
    <path d="M3 3V18C3 19.1046 3.89543 20 5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 13L15 10L12 13L9 10L6 13L3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const DataScienceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    style={{ width: '24px', height: '24px' }}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 1V6M12 18V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12" stroke="currentColor" strokeWidth="2" strokeDasharray="0.5 1.5"/>
  </svg>
)

const getProjectIcon = (category) => {
  switch (category) {
    case "ai-pm":
      return <AIEducationIcon />
    case "growth":
      return <GrowthStrategyIcon />
    case "data-science":
      return <DataScienceIcon />
    default:
      return <CheckCircle size={24} />
  }
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const navigate = useNavigate()

  const categories = [
    { id: "all", label: "全部项目" },
    { id: "ai", label: "AI应用" },
    { id: "ai-pm", label: "AI产品" },
    { id: "growth", label: "增长策略" },
    { id: "fintech", label: "金融科技" },
    { id: "data-science", label: "数据科学" }
  ]

  const filteredProjects = activeFilter === "all"
    ? projectData
    : projectData.filter(project => project.category === activeFilter)

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "planning":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "已完成"
      case "in-progress":
        return "进行中"
      case "planning":
        return "规划中"
      default:
        return "未知"
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">项目经历</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从AI应用到金融科技，从学术研究到实际产品，展示技术实力与创新能力
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              onClick={() => {
                if (project.link && project.link !== "#") {
                  navigate(project.link)
                }
              }}
            >
              {/* Project Header with Icon */}
              <div className="relative h-20 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md text-blue-600">
                    {getProjectIcon(project.category)}
                  </div>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 flex items-center gap-2">
                  {project.title}
                  {project.link && project.link !== "#" && (
                    <ExternalLink size={16} className="flex-shrink-0 text-blue-600" />
                  )}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Meta */}
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building size={14} />
                    <span>{project.company}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    关键成果
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects