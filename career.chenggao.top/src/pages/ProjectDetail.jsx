import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar, Users, Building, Award, Target, Code, BarChart, Lightbulb, TrendingUp } from 'lucide-react'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const projectDetails = {
    'dataease-ai-analysis': {
      title: 'Dataease看板AI帮助流分析',
      subtitle: '一起科技教育AI产品',
      description: '主导Dataease看板AI帮助流分析，通过AI技术精准定位"沟通质量参差不齐"是转化率的核心瓶颈，创新性地提出"用AI模拟优秀辅导的结构化思考"作为解决方案。',
      image: '/images/一起科技教育.jpg',
      technologies: ['数据分析', 'AI产品', '产品设计', '业务洞察', 'SOP设计', '用户研究'],
      achievements: [
        '成功定位转化率核心瓶颈，提出AI结构化思考解决方案',
        '设计"AI沟通卡片"三大核心模块，将数据洞察转化为可执行行动项',
        '成为管理者追踪续报战役进度的"单一事实来源"'
      ],
      timeline: '2025.07 - 至今',
      role: 'AI产品经理',
      details: [
        {
          title: 'S (Situation) - 背景痛点',
          content: '核心痛点：公司的续报战役缺乏统一、实时、准确的数据监控工具。旧的"历史学季续报大屏"无法满足"25秋续报"需求。业务挑战：管理层无法高效、直观地追踪团队和个人的续报目标完成情况，导致决策滞后。',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: 'T (Task) - 核心任务',
          content: '设计并上线全新的"25秋续报大屏"数据看板。定义看板背后所需的数据集，确保数据的准确性、实时性和业务相关性，为管理层提供可靠的决策驾驶舱。',
          icon: <Award className="w-5 h-5" />
        },
        {
          title: 'A (Action) - AI解决方案',
          content: '主导核心功能设计：定义"AI沟通卡片"产品形态，设计每日变化摘要(What)、SOP外沟通要点(Why & How)、智能话术参考(Example)三大核心模块，将数据洞察转化为可执行的行动项。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: 'A (Action) - 项目推动',
          content: '设计用户交互流程：规划从"筛选学生 -> 触发生成 -> 异步等待 -> 查看使用"的完整工作流。识别并解决核心依赖：敏锐识别"学情表系统化"是关键前置依赖，为AI应用构建数据基础设施。',
          icon: <Lightbulb className="w-5 h-5" />
        }
      ]
    },
    'powerbank-location': {
      title: '共享充电宝选址优化',
      subtitle: '全国大学生统计建模大赛项目',
      description: '为提升共享充电宝使用频次与用户留存，主导数据驱动的选址优化项目。通过Python爬取并分析超1000条用户反馈，精准定位了"高峰期网点供不应求"是用户流失的关键环节。',
      image: '/images/全国大学生统计建模大赛项目.png',
      technologies: ['Python', '机器学习', 'LSTM', '随机森林', '高德地图API', '数据可视化'],
      achievements: [
        '荣获天津赛区二等奖',
        '利用高德地图API与机器学习模型，量化预测了20个最优投放点位',
        '项目旨在有效提升网点的订单转化率和用户满意度'
      ],
      timeline: '2025.03 - 2025.05',
      role: '项目负责人',
      details: [
        {
          title: '问题分析',
          content: '通过数据分析和用户反馈调研，发现共享充电宝在不同区域的使用率存在显著差异，特别是在高峰期，部分网点供不应求，而其他网点利用率偏低。',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: '数据收集',
          content: '使用Python爬虫技术收集了超过1000条用户反馈数据，结合高德地图API获取的人流密度、商业区域分布等地理信息。',
          icon: <BarChart className="w-5 h-5" />
        },
        {
          title: '模型构建',
          content: '采用LSTM长短期记忆网络和随机森林算法，建立充电宝需求预测模型，实现不同时间段的精确需求预测。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: '成果应用',
          content: '基于模型预测结果，为运营商提供了20个最优投放点位建议，预计可提升整体利用率35%以上。',
          icon: <Award className="w-5 h-5" />
        }
      ]
    },
    'ai-voice-teaching': {
      title: '个性化AI语音讲题服务',
      subtitle: '一起科技教育AI产品',
      description: '打造让每个学生都感觉是"老师专门为我录制"的错题讲解视频。用技术手段低成本、大规模复制高转化率服务模式中的"专属感"，以此提升用户信任和转化率。',
      image: '/images/一起科技教育.jpg',
      technologies: ['AI产品设计', '语音克隆', 'AIGC', '个性化拼接', '音色替换', '用户体验'],
      achievements: [
        '成功实现"专属服务"的自动化和规模化',
        '8.78%的用户接受度证明了工具的实用性和高接受度',
        '将辅导老师从重复性劳动中解放出来，聚焦深度情感沟通'
      ],
      timeline: '2025.07 - 至今',
      role: 'AI产品经理',
      details: [
        {
          title: '创新方案设计',
          content: '提出"个性化拼接 + 标准化内容"的视频生成方案，巧妙平衡个性化体验和生产成本。定义视觉层个性化：动态生成包含学生姓名的专属封面。听觉层个性化：利用AI语音合成技术，匹配辅导老师性别，生成个性化开场白。',
          icon: <Lightbulb className="w-5 h-5" />
        },
        {
          title: '动态文案模板',
          content: '设计了动态文案模板，引入学生行为（如参课时长、互动次数）和属性（地区、年级）等多维度变量，让开场白更具亲和力与针对性。创造性地提出对通用讲解视频进行"音色替换"，确保整个视频听感统一，体验无割裂。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: '端到端产品规划',
          content: '梳理并设计了视频的自动化生成与分发流程，确保每个环节都能稳定支撑大规模生产。建立了完善的质量控制体系，确保每个生成的视频都达到预期的个性化标准。',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: '效率与效果提升',
          content: '效率层面：实现了"专属服务"的自动化和规模化，将辅导老师从重复性劳动中解放出来。效果层面：通过专属感提升用户信任，显著提高了用户参与度和转化率。',
          icon: <TrendingUp className="w-5 h-5" />
        }
      ]
    },
    'ai-learning-report': {
      title: '个性化AI学习报告',
      subtitle: '一起科技教育AI产品',
      description: '负责个性化AI学习报告产品的全生命周期管理，解决技术瓶颈和用户体验问题，通过技术手段和产品优化，大幅提升报告生成成功率和用户参与度。',
      image: '/images/一起科技教育.jpg',
      technologies: ['AIGC', '数据分析', '产品管理', '算法优化', '用户体验', '数据可视化'],
      achievements: [
        '生成成功率从68%提升至95%以上',
        '用户打开率从20.5%提升至25%以上',
        '人均打开次数从0.73次提升至1.5次以上'
      ],
      timeline: '2025.07 - 至今',
      role: 'AI产品经理',
      details: [
        {
          title: 'Situation - 背景问题',
          content: '技术瓶颈：报告生成成功率仅68%，存在内容为空、乱码等问题。用户瓶颈：发送量虽大，但用户打开率仅20.5%，人均打开次数仅0.73次，用户粘性极低。工具瓶颈：批量发送功能放大了内容质量差的问题，损害了用户信任。',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: 'Task - 核心目标',
          content: '核心基础：生成成功率提升至95%以上。提升效果：用户打开率提升至25%以上。验证价值：人均打开次数提升至1.5次以上。通过技术手段和产品优化，全面提升报告质量和用户体验。',
          icon: <Award className="w-5 h-5" />
        },
        {
          title: 'Action - 技术策略',
          content: '设计后端兜底方案：针对result字段为空的情况，设计了自动触发二次重新生成的机制，并对失败案例进行标记，保障了内容交付的稳定性。推动平台迁移：从GPT-Bots平台迁移到自研工作流平台，解决了系统稳定性问题。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: 'Action - 产品优化',
          content: '优化内容质量：建立内容审核和质量控制机制，减少无效内容。改进用户触达：优化发送策略和内容个性化，提升用户打开意愿。完善监控体系：建立全链路数据监控，实时跟踪关键指标变化。',
          icon: <Lightbulb className="w-5 h-5" />
        }
      ]
    },
    'ai-live-grading': {
      title: '直播间AI批改',
      subtitle: '一起科技教育AI产品',
      description: '设计并推动直播间AI批改功能的商业化落地，通过创新的Prompt Engineering和分层式框架设计，实现实时AI批改的准确性和规模化应用，为持续迭代提供数据依据。',
      image: '/images/一起科技教育.jpg',
      technologies: ['Prompt Engineering', 'AI批改', '实时交互', 'AIGC', '分层式框架', '模型评测'],
      achievements: [
        '批改准确率从初版62%提升至优化后89%以上',
        '精确率从58%提升至85%，召回率从65%提升至87%',
        '构建分学科批改知识库，覆盖5个学科定制化批改规则'
      ],
      timeline: '2025.07 - 至今',
      role: 'AI产品经理',
      details: [
        {
          title: '分层式Prompt框架设计',
          content: '识别层Prompt：定义"有效手写内容"的严格标准，设计负向指令约束模型避免幻觉，针对涂改、修正等复杂场景设计细致处理规则（如划掉90%以上视为无效），设计答案数量判断逻辑并强制结构化输出（JSON）。',
          icon: <Lightbulb className="w-5 h-5" />
        },
        {
          title: '批改层Prompt创新',
          content: '首创"批改类型前置判断"逻辑：设计Prompt让模型先判断题目属于"精准作答型"、"意思正确型"还是"采分点型"，再调用不同批改规则，极大提升批改灵活性和准确性。构建分学科批改知识库。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: '分学科定制化批改',
          content: '为语文、数学、英语等5个学科分别撰写定制化批改Prompt，融入学科特有规则（如数学的等价变形、化学的反应本质、英语的语法拼框架），为AI批改系统的准确性奠定了核心基础。',
          icon: <BarChart className="w-5 h-5" />
        },
        {
          title: '鲁棒性与评测体系',
          content: '设计的Prompt鲁棒性强，能够有效处理超过10种真实批改场景中的复杂问题（如答案涂改、多空无序、理科单位换算等）。沉淀模型评测方法论，成为团队未来模型选型和性能优化的重要资产。',
          icon: <Target className="w-5 h-5" />
        }
      ]
    },
    'ai-education': {
      title: 'AI教育产品设计',
      subtitle: '全国人工智能应用创新大赛项目',
      description: '作为AI产品经理，针对教育场景"千人一卷"的效率瓶颈，通过用户访谈挖掘核心痛点，设计并构建了一款能基于学生历史答题数据、智能生成个性化试卷的AI产品，旨在提升学习效率与用户留存。',
      image: '/images/全国人工智能应用创新大赛项目.png',
      technologies: ['产品管理', '用户研究', 'Baidu AppBuilder', '大语言模型 (LLM)', '知识图谱'],
      achievements: [
        '荣获校级一等奖',
        '依托大语言模型，成功将非结构化的知识点转化为AI可处理的数据',
        '为产品的用户留存提供了核心价值，有效提升学生学习效率与教师满意度'
      ],
      timeline: '2025.02 - 2025.05',
      role: '项目负责人',
      details: [
        {
          title: '需求调研',
          content: '深入学校进行用户访谈，收集教师和学生的学习痛点，发现传统试卷缺乏个性化，无法根据学生水平动态调整难度。',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: '产品设计',
          content: '设计了基于知识图谱的个性化试卷生成系统，能够根据学生历史答题数据，智能推荐适合的学习内容和试题。',
          icon: <Lightbulb className="w-5 h-5" />
        },
        {
          title: '技术实现',
          content: '利用Baidu AppBuilder平台和大语言模型，实现了自然语言题目的解析和知识点抽取，构建了完整的知识图谱。',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: '效果验证',
          content: '在3个试点学校进行测试，学生平均答题正确率提升25%，学习效率显著提高，教师备课时间减少40%。',
          icon: <Award className="w-5 h-5" />
        }
      ]
    },
    'growth-strategy': {
      title: '用户增长策略设计',
      subtitle: '蒙牛校园营销创新大赛项目',
      description: '针对年轻用户新增乏力、留存低的痛点，主导设计了一套覆盖拉新、促活、留存的全链路用户增长方案。策划UGC活动并引入AI聊天助手概念，通过高频互动增强用户粘性，提升长期留存。',
      image: '/images/蒙牛校园营销创新大赛项目.png',
      technologies: ['用户增长', '增长策略', 'UGC运营', '数据分析', 'AI概念设计'],
      achievements: [
        '荣获全国TOP20',
        '通过追踪活动前后关键指标，量化评估了各运营策略对增长的实际贡献',
        '成功扩大新用户触达范围，提升了用户活跃度与参与感'
      ],
      timeline: '2024.08 - 2024.12',
      role: '策略负责人',
      details: [
        {
          title: '用户分析',
          content: '通过数据分析发现核心用户群体的特征和行为模式，识别出年轻用户流失的关键节点和原因。',
          icon: <BarChart className="w-5 h-5" />
        },
        {
          title: '策略设计',
          content: '设计了包含裂变拉新、UGC活动、AI互动等在内的完整增长飞轮，覆盖用户全生命周期。',
          icon: <Lightbulb className="w-5 h-5" />
        },
        {
          title: '活动策划',
          content: '策划了"创意营养师"UGC活动，鼓励用户分享创意搭配，结合AI营养助手提供个性化建议。',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: '效果评估',
          content: '活动期间新增用户增长300%，用户留存率提升45%，品牌年轻化形象得到有效建立。',
          icon: <Award className="w-5 h-5" />
        }
      ]
    }
  }

  const project = projectDetails[projectId]

  const handleGoBack = () => {
    navigate('/')
  }

  if (!project) {
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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">项目未找到</h1>
            <p className="text-gray-600">请检查链接是否正确</p>
          </div>
        </div>
      </div>
    )
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

        {/* Project Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-r from-blue-400 to-indigo-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-xl">{project.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{project.role}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">核心技术</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">关键成果</h3>
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.details.map((detail, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
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

export default ProjectDetail