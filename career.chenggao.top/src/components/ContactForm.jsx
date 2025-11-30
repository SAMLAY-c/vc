import React, { useState, useRef } from 'react';
import { Upload, Send, CheckCircle2, Mail, Github, Linkedin, Loader2 } from 'lucide-react';

const ContactForm = () => {
  // --- 状态管理 (React State) ---
  const [collabType, setCollabType] = useState('job'); // 单选状态
  const [interests, setInterests] = useState(['coding']); // 复选状态
  const [fileName, setFileName] = useState(''); // 文件名展示

  // --- 引用 (用于隐藏原本丑陋的文件上传按钮) ---
  const fileInputRef = useRef(null);

  // 1. 处理复选框逻辑
  const handleInterestChange = (value) => {
    if (interests.includes(value)) {
      setInterests(interests.filter(item => item !== value)); // 取消勾选
    } else {
      setInterests([...interests, value]); // 勾选
    }
  };

  // 2. 处理文件上传逻辑
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // 3. 表单提交处理（模拟）
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      collabType,
      interests,
      fileName,
      timestamp: new Date().toISOString()
    };

    console.log('📊 表单提交数据：', formData);

    // 显示成功消息
    alert(`✅ 表单提交成功！\n\n合作意向：${collabType === 'job' ? '工作机会' : collabType === 'business' ? '业务合作' : '技术交流'}\n兴趣爱好：${interests.join('、') || '无'}\n${fileName ? `上传文件：${fileName}` : ''}`);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🤝 发送合作意向</h3>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* --- 知识点1: 单选框 (Radio) - 场景：合作类型 --- */}
        <div>
          <label className="block text-gray-700 mb-3 font-medium">您希望建立什么样的联系？(单选)</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {['job', 'business', 'chat'].map((type) => {
              const typeInfo = {
                job: { label: '工作机会', icon: '💼' },
                business: { label: '业务合作', icon: '🤝' },
                chat: { label: '技术交流', icon: '💻' }
              };

              return (
                <label key={type} className="cursor-pointer flex items-center gap-3 p-4 border-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-300">
                  {/* 隐藏原生Radio，用Tailwind自定义样式 */}
                  <input
                    type="radio"
                    name="collaboration_type" // 核心属性 name 实现分组
                    value={type} // 核心属性 value 传递给后台
                    checked={collabType === type} // React控制的 checked 状态
                    onChange={(e) => setCollabType(e.target.value)} // React事件处理
                    className="hidden" // 隐藏原生样式
                  />
                  {/* 自定义美化外观 */}
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${collabType === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {collabType === type && <CheckCircle2 size={16} />}
                    </div>
                  <span className="text-gray-700 font-medium">{typeInfo[type].icon} {typeInfo[type].label}</span>
                </label>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Pink老师知识点：name属性相同实现互斥，value属性传递给后台，checked设置默认选中</p>
        </div>

        {/* --- 知识点2: 复选框 (Checkbox) - 场景：感兴趣的领域 --- */}
        <div>
          <label className="block text-gray-700 mb-3 font-medium">您对林承列的哪些背景感兴趣？(多选)</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {['AI工具应用', '产品逻辑', '数据分析', '前端开发', '经济学视角', '用户增长'].map((interest) => (
              <label key={interest} className="cursor-pointer flex items-center gap-3 p-4 border-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-300">
                {/* 隐藏原生Checkbox */}
                <input
                  type="checkbox"
                  name="interests" // 核心属性 name 实现分组
                  value={interest} // 核心属性 value
                  checked={interests.includes(interest)} // React数组判断是否选中
                  onChange={() => handleInterestChange(interest)} // React事件处理
                  className="hidden" // 隐藏原生样式
                />
                {/* 自定义美化外观 */}
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${interests.includes(interest) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {interests.includes(interest) && <CheckCircle2 size={16} />}
                </div>
                <span className="text-gray-700 font-medium">{interest}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Pink老师知识点：name属性相同表示一组数据，可以多选，checked设置默认选中</p>
        </div>

        {/* --- 知识点3: 文件域 (File) - 场景：上传简历或项目文档 --- */}
        <div>
          <label className="block text-gray-700 mb-3 font-medium">附件上传 (JD或项目文档)</label>

          {/* Pink老师美化技巧：用漂亮的div触发隐藏的input */}
          <div
            onClick={() => fileInputRef.current.click()} // 点击div触发input
            className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:border-blue-500"
          >
            <Upload size={32} className="text-blue-400 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">
              {fileName ? `📄 ${fileName}` : '📤 点击选择文件或拖拽到此处'}
            </p>
            <p className="text-sm text-gray-500">
              支持：PDF, Word, 图片 (最大10MB) • 可多选
            </p>
          </div>

          {/* 隐藏真正的文件input */}
          <input
            type="file"
            ref={fileInputRef} // React引用
            className="hidden" // 完全隐藏
            name="attachment" // 核心属性 name
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" // 核心属性 accept: 限制文件类型
            multiple // 核心属性 multiple: 支持多文件
            onChange={handleFileChange} // React事件处理
          />
          <p className="text-xs text-gray-500 mt-2">💡 Pink老师知识点：multiple支持多文件，accept限制文件类型，用漂亮的div替代丑陋的原生按钮</p>
        </div>

        {/* --- 提交按钮区域 --- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Send size={18} className="mr-2" />
            发送合作意向
          </button>

          <button
            type="button"
            onClick={() => {
              setCollabType('job');
              setInterests(['coding']);
              setFileName('');
            }}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            🔄 重置表单
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;