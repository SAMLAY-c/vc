import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI合作与咨询</h3>

      <div className="space-y-6">
        {/* 注释掉的内容
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={40} className="text-blue-600" />
          </div>
          <p className="text-lg text-gray-800 mb-4">基于深度的AI应用经验，为您提供专业的AI技术咨询和解决方案</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload size={32} className="text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-3">AI工具星云</h4>
            <p className="text-sm text-gray-600 leading-relaxed">预约AI咨询</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github size={32} className="text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-3">查看AI项目案例</h4>
            <p className="text-sm text-gray-600 leading-relaxed">AI合作与咨询</p>
          </div>
        </div>
        */}

        <div className="text-center">
          <p className="text-lg text-gray-800">
            感谢您的关注，如有合作意向请通过以下方式联系
          </p>

          <div className="mt-8 space-y-4">
            <div className="text-gray-600">
              <strong>邮箱：</strong> 15396631779@163.com
            </div>
            <div className="text-gray-600">
              <strong>GitHub：</strong>
              <a href="https://github.com/SAMLAY-c"
                 target="_blank"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                github.com/SAMLAY-c
              </a>
            </div>
            <div className="text-gray-600">
              <strong>个人网站：</strong>
              <a href="https://life.chenggao.top"
                 target="_blank"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                life.chenggao.top
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;