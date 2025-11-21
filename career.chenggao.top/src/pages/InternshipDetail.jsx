import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar, Users, Building, Award, Target, Code, BarChart, Briefcase } from 'lucide-react'

const InternshipDetail = () => {
  const { internshipId } = useParams()
  const navigate = useNavigate()

  const internshipDetails = {
    '17qi-tech': {
      title: 'AI产品经理实习',
      company: '一起科技教育',
      department: 'AI产品部',
      location: '北京 朝阳区',
      timeline: '2025.07 - 至今',
      status: '进行中',
      image: '/images/一起科技教育.jpg',
      responsibilities: [
        '负责AI内容生成（AIGC）产品从0到1的规划与设计，主导AI语音克隆与个性化报告两大核心项目，输出MVP及最终产品方案。',
        '跟进研发与算法团队，解决音画同步、模型TPM限制等技术瓶颈，负责产品方案评审与落地，确保项目按期高质量交付。',
        '基于核心增长目标，结合数据分析与用户反馈，设计并推动产品迭代优化，为批量化内容生产和精细化运营提供支持。'
      ],
      achievements: [
        '主导2个核心AI项目从0到1的商业化落地，包括个性化报告与AI语音克隆工具。',
        '通过引入AIGC技术，将核心内容生产效率提升300%，语音克隆准确率提升30%。',
        '成功构建自动化内容生产工作流，显著降低关键系统失败率，已稳定应用于商业化场景。'
      ],
      technologies: ['AI产品设计', 'AIGC', '语音克隆', '用户体验', '数据分析', '项目管理'],
      details: [
        {
          title: '产品规划',
          content: '深入分析教育行业痛点，设计AI驱动的个性化学习内容生成解决方案，制定详细的产品路线图和里程碑。',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: '技术协作',
          content: '与算法工程师团队紧密合作，参与技术选型和架构设计，解决音画同步、模型优化等关键技术挑战。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: '用户体验',
          content: '通过用户调研和数据分析，持续优化产品体验，设计直观易用的AI交互界面，降低用户学习成本。',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: '业务价值',
          content: '实现产品商业化落地，为公司创造可观的效率提升和成本节约，获得管理层和用户的高度认可。',
          icon: <Award className="w-5 h-5" />
        }
      ]
    },
    'zhao-index': {
      title: '数据分析实习生',
      company: 'Zhao-index赵指数基金公司',
      department: '数据分析部',
      location: '远程',
      timeline: '2024.12 - 2025.03',
      status: '已完成',
      image: '/images/赵标科技（北京）有限公司.png',
      responsibilities: [
        '负责数据驱动的策略评估与监控体系搭建',
        '主导开发Python自动化脚本，调用Baostock API实现海量金融数据的每日自动化清洗与处理',
        '基于处理后的数据，构建包含关键风险与收益指标（如夏普比率）的监控看板',
        '实现对多支基金策略表现的实时追踪与异常预警'
      ],
      achievements: [
        '将数据准备效率提升了约50%',
        '成功构建了多维度基金策略实时监控系统'
      ],
      technologies: ['Python', 'Baostock API', 'Pandas', '数据分析', '金融建模', '可视化'],
      details: [
        {
          title: '数据架构设计',
          content: '设计并实现了高效的数据ETL流程，确保金融数据的准确性和实时性，为策略分析提供可靠数据基础。',
          icon: <BarChart className="w-5 h-5" />
        },
        {
          title: '算法开发',
          content: '开发了多种金融指标计算算法，包括夏普比率、最大回撤、波动率等关键风险评估指标。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: '监控系统',
          content: '构建了实时监控看板，提供多维度的基金表现分析，支持异常检测和预警机制。',
          icon: <BarChart className="w-5 h-5" />
        },
        {
          title: '优化改进',
          content: '通过自动化脚本和优化算法，将数据处理时间从原来的3小时缩短到1.5小时，效率提升100%。',
          icon: <Target className="w-5 h-5" />
        }
      ]
    }
  }

  const internship = internshipDetails[internshipId]

  const handleGoBack = () => {
    navigate('/')
  }

  if (!internship) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleGoBack}
            className="mb-8 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            返回主页
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">实习经历未找到</h1>
            <p className="text-gray-600">请检查链接是否正确</p>
          </div>
        </div>
      </div>
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "进行中":
        return "bg-blue-100 text-blue-800"
      case "已完成":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="mb-8 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          返回主页
        </button>

        {/* Internship Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-r from-purple-400 to-pink-500">
            <img
              src={internship.image}
              alt={internship.company}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">{internship.title}</h1>
                <p className="text-xl">{internship.company} · {internship.department}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Internship Meta */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{internship.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building size={16} />
                <span>{internship.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(internship.status)}`}>
                  {internship.status}
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">核心技能</h3>
              <div className="flex flex-wrap gap-2">
                {internship.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">工作职责</h3>
              <ul className="space-y-3">
                {internship.responsibilities.map((responsibility, index) => {
                  if (internshipId === '17qi-tech') {
                    // 一起科技教育的特殊处理
                    const projectLinks = [
                      '/project/ai-voice-teaching',
                      '/project/ai-learning-report',
                      '/project/ai-live-grading'
                    ];

                    const highlightTexts = [
                      '个性化AI语音讲题服务',
                      '个性化AI学习报告',
                      '直播间AI批改'
                    ];

                    return (
                      <li key={index} className="flex items-start gap-3">
                        <Briefcase size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>
                          {index < 3 ? highlightTexts.map((text, textIndex) => {
                            if (responsibility.includes(text)) {
                              return (
                                <span key={textIndex}>
                                  {responsibility.split(text)[0]}
                                  <span
                                    className="cursor-pointer hover:text-blue-600 transition-colors font-medium"
                                    style={{
                                      borderBottom: '2px solid #3B82F6',
                                      textDecoration: 'none',
                                      paddingBottom: '2px'
                                    }}
                                    onClick={() => navigate(projectLinks[textIndex])}
                                  >
                                    {text}
                                  </span>
                                  {responsibility.split(text)[1]}
                                </span>
                              );
                            }
                            return null;
                          }) : responsibility}
                        </span>
                      </li>
                    )
                  }

                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Briefcase size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">主要成就</h3>
              <ul className="space-y-3">
                {internship.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Work Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internship.details.map((detail, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  {detail.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{detail.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{detail.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InternshipDetail