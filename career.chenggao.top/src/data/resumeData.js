// The placeholder image paths are kept for you to replace.
// The content has been updated based on your resume.

export const personalInfo = {
  name: "林承列",
  title: "经济学本科生 · AI/LLM技术爱好者与应用者 · 数据分析师 · 增长黑客实践者",
  description: "经济学专业背景，兼具AI技术应用、数据科学和用户增长领域的专业能力。具备产品经理的用户洞察力、增长黑客的策略思维以及数据分析师的技术执行力。",
  avatar: "/images/林承列头像.jpg", // 匹配实际存在的头像文件
  location: "北京市朝阳区",
  school: "天津师范大学",
  status: "在读本科生",
  email: "15396631779@163.com",
  github: "https://github.com/SAMLAY-c",
  personalWebsite: "https://life.chenggao.top"
}

export const educationData = [
  {
    id: 1,
    degree: "经济学（本科）",
    school: "天津师范大学",
    period: "2023 - 2027",
    location: "天津",
    description: "专注于将经济学理论与数据科学、AI技术应用及用户增长策略相结合。",
    achievements: [
      "掌握SQL, Python(Pandas), Excel(Power BI, Tableau)等数据分析工具",
      "精通A/B测试全流程，熟悉增长黑客方法论"
    ],
    image: "/images/天津师范大学.jpg", // 匹配实际存在的学校图片
    color: "from-blue-500 to-indigo-600"
  }
]

export const internshipData = [
  {
    // This is the new Ed-Tech AI PM experience you provided.
    id: 1,
    company: "一起科技教育",
    department: "AI产品部",
    position: "AI产品经理 (AI PM)",
    period: "2025.07 -  至今", // 请替换为实际时间
    location: "北京 朝阳区", // 请替换为实际地点
    status: "progressing",
    link: "/internship/17qi-tech",
    responsibilities: [
      "主导个性化AI语音讲题服务从0到1的产品规划与设计，结合语音克隆技术，为学生提供AI驱动的个性化语音讲解体验。",
      "负责个性化AI学习报告产品的全生命周期管理，通过AIGC技术实现学生学习数据的智能分析和个性化学习路径推荐。",
      "设计并推动直播间AI批改功能的商业化落地，实现实时AI辅助教学和智能内容生成，提升教学效率和学习效果。"
    ],
    achievements: [
      "主导2个核心AI项目从0到1的商业化落地，包括个性化报告与AI语音克隆工具。",
      "通过引入AIGC技术，将核心内容生产效率提升300%，语音克隆准确率提升30%。",
      "成功构建自动化内容生产工作流，显著降低关键系统失败率，已稳定应用于商业化场景。"
    ],
    image: "/images/一起科技教育.jpg" // 使用实际的公司图片
  },
  {
    id: 2,
    company: "Zhao-index赵指数基金公司",
    department: "数据分析部",
    position: "数据分析实习生",
    period: "2024.12 - 2025.03",
    location: "远程", // Assuming remote or you can specify the city
    status: "completed",
    link: "/internship/zhao-index",
    responsibilities: [
      "负责数据驱动的策略评估与监控体系搭建",
      "主导开发Python自动化脚本，调用Baostock API实现海量金融数据的每日自动化清洗与处理",
      "基于处理后的数据，构建包含关键风险与收益指标（如夏普比率）的监控看板",
      "实现对多支基金策略表现的实时追踪与异常预警"
    ],
    achievements: [
      "将数据准备效率提升了约50%",
      "成功构建了多维度基金策略实时监控系统"
    ],
    image: "/images/赵标科技（北京）有限公司.png" // 使用实际的公司logo
  }
]

export const projectData = [
  {
    // 共享充电宝选址优化项目 (2025.03 - 最新开始)
    id: 1,
    title: "共享充电宝选址优化 (全国大学生统计建模大赛)",
    category: "data-science",
    link: "/project/powerbank-location",
    description: "为提升共享充电宝使用频次与用户留存，主导数据驱动的选址优化项目。通过Python爬取并分析超1000条用户反馈，精准定位了\"高峰期网点供不应求\"是用户流失的关键环节。",
    image: "/images/全国大学生统计建模大赛项目.png", // 匹配实际存在的项目图片
    technologies: ["Python", "机器学习", "LSTM", "随机森林", "高德地图API", "数据可视化"],
    achievements: [
      "荣获天津赛区二等奖",
      "利用高德地图API与机器学习模型，量化预测了20个最优投放点位",
      "项目旨在有效提升网点的订单转化率和用户满意度"
    ],
    period: "2025.03 - 2025.05",
    team: "项目负责人",
    company: "全国大学生统计建模大赛",
    status: "completed"
  },
  {
    // AI教育产品设计项目 (2025.02 - 第二新)
    id: 2,
    title: "AI教育产品设计 (全国人工智能应用创新大赛)",
    category: "ai-pm",
    link: "/project/ai-education",
    description: "作为AI产品经理，针对教育场景\"千人一卷\"的效率瓶颈，通过用户访谈挖掘核心痛点，设计并构建了一款能基于学生历史答题数据、智能生成个性化试卷的AI产品，旨在提升学习效率与用户留存。",
    image: "/images/全国人工智能应用创新大赛项目.png", // 匹配实际存在的项目图片
    technologies: ["产品管理", "用户研究", "Baidu AppBuilder", "大语言模型 (LLM)", "知识图谱"],
    achievements: [
      "荣获校级一等奖",
      "依托大语言模型，成功将非结构化的知识点转化为AI可处理的数据",
      "为产品的用户留存提供了核心价值，有效提升学生学习效率与教师满意度"
    ],
    period: "2025.02 - 2025.05",
    team: "项目负责人",
    company: "全国人工智能应用创新大赛",
    status: "completed"
  },
  {
    // Dataease看板AI帮助流分析项目 (新增)
    id: 3,
    title: "Dataease看板AI帮助流分析",
    category: "ai-pm",
    link: "/project/dataease-ai-analysis",
    description: "主导Dataease看板AI帮助流分析，通过AI技术精准定位'沟通质量参差不齐'是转化率的核心瓶颈，创新性地提出'用AI模拟优秀辅导的结构化思考'作为解决方案。",
    image: "/images/一起科技教育.jpg", // 使用公司图片
    technologies: ["数据分析", "AI产品", "产品设计", "业务洞察", "SOP设计", "用户研究"],
    achievements: [
      "成功定位转化率核心瓶颈，提出AI结构化思考解决方案",
      "设计'AI沟通卡片'三大核心模块，将数据洞察转化为可执行行动项",
      "成为管理者追踪续报战役进度的'单一事实来源'"
    ],
    period: "2025.07 - 至今",
    team: "AI产品经理",
    company: "一起科技教育",
    status: "completed"
  },
  {
    // 用户增长策略设计项目 (2024.08 - 最早开始)
    id: 4,
    title: "用户增长策略设计 (蒙牛校园营销创新大赛)",
    category: "growth",
    link: "/project/growth-strategy",
    description: "针对年轻用户新增乏力、留存低的痛点，主导设计了一套覆盖拉新、促活、留存的全链路用户增长方案。策划UGC活动并引入AI聊天助手概念，通过高频互动增强用户粘性，提升长期留存。",
    image: "/images/蒙牛校园营销创新大赛项目.png", // 匹配实际存在的项目图片
    technologies: ["用户增长", "增长策略", "UGC运营", "数据分析", "AI概念设计"],
    achievements: [
      "荣获全国TOP20",
      "通过追踪活动前后关键指标，量化评估了各运营策略对增长的实际贡献",
      "成功扩大新用户触达范围，提升了用户活跃度与参与感"
    ],
    period: "2024.08 - 2024.12",
    team: "策略负责人",
    company: "\"优益C杯\"蒙牛校园营销创新大赛",
    status: "completed"
  }
]

// This section contains your personal projects/portfolio links.
// I have left it unchanged as requested.
export const portfolioData = [
  {
    id: 1,
    title: "AI卡片制作网页工具",
    description: "基于AI技术的在线卡片制作工具，支持多种模板和自定义设计",
    image: "/images/AI卡片制作网页工具.png",
    link: "https://aicards.chenggao.top",
    category: "web"
  },
  {
    id: 2,
    title: "个人生活主页",
    description: "展示个人生活和兴趣爱好的主页网站",
    image: "/images/个人生活主页.png",
    link: "https://life.chenggao.top",
    category: "web"
  },
  {
    id: 3,
    title: "SVG艺术卡片设计",
    description: "使用SVG技术创作的艺术卡片设计作品集",
    image: "/images/SVG艺术卡片设计.png",
    link: "#",
    category: "design"
  },
  {
    id: 4,
    title: "数据可视化报告",
    description: "各类数据分析和可视化报告作品展示",
    image: "/images/数据可视化报告.png",
    link: "#",
    category: "data"
  },
  {
    id: 5,
    title: "个人公众号运营",
    description: "个人微信公众号的内容运营和数据分析",
    image: "/images/个人公众号运营.png",
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTM4MzQ5Mw==&action=getalbum&album_id=4105509608708521990#wechat_redirect",
    category: "content"
  },
  {
    id: 6,
    title: "专业学术论文绘图",
    description: "为学术论文和科研报告制作的专业图表和数据可视化",
    image: "/images/专业学术论文绘图.png",
    link: "#",
    category: "academic"
  }
]

export const links = {
  personalWebsite: "https://life.chenggao.top",
  wechatPublic: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTM4MzQ5Mw==&action=getalbum&album_id=4105509608708521990#wechat_redirect",
  github: "https://github.com/SAMLAY-c",
  resume: "/resume.pdf"
}