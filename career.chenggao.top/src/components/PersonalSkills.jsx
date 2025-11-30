const PersonalSkills = () => {
  const skills = [
    {
      id: 'sql',
      name: 'SQL',
      level: 95,
      icon: '🗃️',
      color: 'from-blue-600',
      description: '精通复杂查询、存储过程、数据库设计、性能优化、事务管理'
    },
    {
      id: 'excel',
      name: 'Excel',
      level: 98,
      icon: '📊',
      color: 'from-green-500',
      description: '精通高级函数、数据透视表、图表制作、自动化报表、VBA编程'
    },
    {
      id: 'power-bi',
      name: 'Power BI',
      level: 92,
      icon: '📈',
      color: 'from-yellow-500',
      description: '精通DAX函数、数据建模、可视化设计、仪表板创建、数据刷新自动化'
    },
    {
      id: 'tableau',
      name: 'Tableau',
      level: 88,
      icon: '📉',
      color: 'from-indigo-500',
      description: '熟练使用Tableau Desktop、Server、数据连接、图表设计、交互式仪表板'
    },
    {
      id: 'python',
      name: 'Python',
      level: 85,
      icon: '🐍',
      color: 'from-blue-400',
      description: '熟练使用Pandas、NumPy、Matplotlib、数据清洗、统计分析、机器学习基础'
    },
    {
      id: 'html-css',
      name: 'HTML/CSS/JavaScript',
      level: 90,
      icon: '🌐',
      color: 'from-orange-500',
      description: '精通网页语义化、响应式设计、CSS3动画、JavaScript ES6+、前端性能优化'
    },
    {
      id: 'react-hooks',
      name: 'React Hooks',
      level: 95,
      icon: '⚛️',
      color: 'from-blue-500',
      description: '熟练掌握useState、useEffect、useContext、useRef等Hooks，具备组件状态管理和生命周期优化的实战经验'
    },
    {
      id: 'responsive-design',
      name: '响应式设计',
      level: 90,
      icon: '📱',
      color: 'from-green-500',
      description: '精通Flexbox、Grid布局、移动端适配、媒体查询、CSS变量，打造完美跨设备体验'
    },
    {
      id: 'api-integration',
      name: 'API集成',
      level: 82,
      icon: '🔗',
      color: 'from-indigo-500',
      description: '熟练RESTful API设计、Axios、Fetch、GraphQL，处理异步数据流和错误边界'
    },
    {
      id: 'version-control',
      name: '版本控制',
      level: 85,
      icon: '📦',
      color: 'from-gray-600',
      description: '精通Git、Semantic Versioning、CI/CD、模块化部署，确保代码质量和项目可维护性'
    }
  ];

  const getSkillIcon = (skill) => {
    const iconMap = {
      'sql': '🗃️',
      'excel': '📊',
      'power-bi': '📈',
      'tableau': '📉',
      'python': '🐍',
      'html-css': '🌐',
      'react-hooks': '⚛️',
      'responsive-design': '📱',
      'api-integration': '🔗',
      'version-control': '📦'
    };
    return iconMap[skill.id] || '🔧';
  };

  const getSkillColor = (skill) => {
    const colorMap = {
      'sql': 'from-blue-600',
      'excel': 'from-green-500',
      'power-bi': 'from-yellow-500',
      'tableau': 'from-indigo-500',
      'python': 'from-blue-400',
      'html-css': 'from-orange-500',
      'react-hooks': 'from-blue-500',
      'responsive-design': 'from-green-500',
      'api-integration': 'from-indigo-500',
      'version-control': 'from-gray-600'
    };
    return colorMap[skill.id] || 'from-gray-600';
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🛠️ 技术栈与专长</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`
              flex items-center justify-between p-4 rounded-lg border border-gray-200
              hover:border-blue-300 hover:shadow-md transition-all duration-300
              ${skill.level >= 90 ? 'bg-gradient-to-r from-green-50 to-blue-600 text-white' : 'bg-white'}
            `}
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-gradient-to-r ${getSkillColor(skill)}
                  text-white font-bold
                `}>
                  {getSkillIcon(skill)}
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{skill.description}</p>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-gray-500">熟练度</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(skill.level / 20)
                              ? 'bg-blue-200'
                              : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;