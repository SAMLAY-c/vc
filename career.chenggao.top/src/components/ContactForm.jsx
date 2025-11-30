import React, { useState, useRef } from 'react';
import { Upload, Send, CheckCircle2, Mail, Github, Linkedin, Loader2 } from 'lucide-react';

const ContactForm = () => {
  // --- 状态管理 (React State) ---
  const [collabType, setCollabType] = useState('job'); // 单选状态
  const [interests, setInterests] = useState([]); // 复选状态
  const [fileName, setFileName] = useState(''); // 文件名展示

  // --- 【新增】本节课知识点的状态管理 ---
  const [budget, setBudget] = useState('');       // 对应 Select 下拉菜单
  const [message, setMessage] = useState('');     // 对应 Textarea 文本域
  const [isSubmitting, setIsSubmitting] = useState(false); // 对应 Button disabled 状态

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

  // --- 【新增】模拟提交函数 (为了演示 Button 的 disabled) ---
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止默认提交刷新
    setIsSubmitting(true); // 禁用按钮

    // 模拟2秒后发送成功
    setTimeout(() => {
      alert('✅ 表单发送成功！(模拟)');
      setIsSubmitting(false); // 恢复按钮
      // 这里可以清空表单...
    }, 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🤝 发送合作意向</h3>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* --- 1. 单选框 (Radio) - 使用 Label 包裹法 --- */}
        {/* Pink老师知识点：用 label 包裹 input，点击文字也能选中 */}
        <div>
          <label className="block text-gray-300 mb-3 font-medium">
            您希望建立什么样的联系？(单选)
          </label>
          <div className="flex gap-4">
            {['job', 'business', 'chat'].map((type) => {
              const typeInfo = {
                job: { label: '工作机会', icon: '💼' },
                business: { label: '业务合作', icon: '🤝' },
                chat: { label: '技术交流', icon: '💻' }
              };

              return (
                // 【修改点】外层标签必须是 <label>，且包含 input
                <label key={type} className="cursor-pointer flex items-center gap-3 group">
                  {/* 核心：input 被包在 label 里面 */}
                  <input
                    type="radio"
                    name="collaboration_type"
                    value={type}
                    checked={collabType === type}
                    onChange={(e) => setCollabType(e.target.value)}
                    className="hidden" // 即使隐藏了，label的点击触发依然有效
                  />

                  {/* 自定义样式的小圆点 */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${collabType === type ? 'border-blue-400' : 'border-gray-500 group-hover:border-blue-300'}`}>
                    {collabType === type && <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />}
                  </div>

                  {/* 这里的文字，因为被 label 包裹，所以点击它也能切换选项 */}
                  <span className="text-gray-300 group-hover:text-white capitalize">
                    {typeInfo[type].icon} {typeInfo[type].label}
                  </span>
                </label>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Pink老师知识点：使用 label 包裹后，点击文字也能选中选项</p>
        </div>

        {/* --- 2. 复选框 (Checkbox) - 使用 Label 包裹法 --- */}
        <div>
          <label className="block text-gray-300 mb-3 font-medium">
            您对林承列的哪些背景感兴趣？&nbsp;(多选)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['AI工具应用', '产品逻辑', '数据分析', '前端开发', '经济学视角'].map((interest) => (
              // 【修改点】外层使用 <label>
              <label key={interest} className={`
                cursor-pointer p-3 rounded-lg border transition-all flex items-center justify-between
                ${interests.includes(interest)
                  ? 'bg-blue-500/20 border-blue-400 text-blue-100'
                  : 'bg-white/5 border-transparent hover:bg-white/10 text-gray-400'}
              `}>
                <span>{interest}</span>
                {/* input 被包含在内 */}
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="hidden"
                />
                {interests.includes(interest) && <CheckCircle2 size={16} />}
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Pink老师知识点：label 包裹后，点击选项文字也能选中</p>
        </div>

        {/* --- 4. 文件上传 (File) - 使用 Label 替代 Div --- */}
        <div>
          <label className="block text-gray-300 mb-3 font-medium">附件上传</label>

          {/* 【修改点】这里把外层 div 换成了 label，这是最完美的做法 */}
          {/* 因为 label 包裹了 input type="file"，所以点击 label 区域直接就会触发文件选择，连 JS 的 useRef 都不需要了！ */}
          <label className="border-2 border-dashed border-gray-500 hover:border-blue-400 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors group">
            <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-400 mb-2" />
            <p className="text-sm text-gray-400">
              {fileName ? <span className="text-blue-400 font-bold">{fileName}</span> : "点击上传文件 (支持 PDF, Word)"}
            </p>

            {/* input 被包含在内 */}
            <input
              type="file"
              className="hidden"
              name="attachment"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>
          <p className="text-xs text-gray-500 mt-2">💡 Pink老师知识点：使用 &lt;label&gt; 包裹 input type="file"，无需 JS 就能触发</p>
        </div>

        {/* --- 【知识点1：下拉列表 select】 --- */}
        {/* 场景：如果是"业务合作"，需要选择预算范围 */}
        {collabType === 'business' && (
          <div className="animate-fade-in">
            <label className="block text-gray-700 mb-2 font-medium">
              预计预算范围 (Select演示)
            </label>
            {/* Pink老师讲的 select 标签 */}
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-white/5 border border-gray-600 rounded-lg p-3 text-gray-900 focus:border-blue-400 focus:outline-none appearance-none"
            >
              {/* Pink老师讲的 option 标签 */}
              <option value="" className="text-gray-500">请选择预算范围...</option>
              <option value="small" className="text-gray-900">1万以下 - 小型项目</option>
              <option value="medium" className="text-gray-900">1万-5万 - 中型项目</option>
              <option value="large" className="text-gray-900">5万以上 - 大型项目</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">💡 Pink老师知识点：这是使用 HTML5 &lt;select&gt; 标签制作的</p>
          </div>
        )}

        {/* --- 3. 文本域 (Textarea) - 使用 htmlFor + id 关联 --- */}
        <div>
          {/* Pink知识点：For + ID 绑定光标聚焦 */}
          {/* 当用户点击 "详细说明" 这几个字时，光标会自动跳进下面的 textarea 里 */}
          <label htmlFor="message-area" className="block text-gray-300 mb-2 font-medium cursor-pointer">
            详细说明 <span className="text-xs text-gray-500">(点击此处聚焦文本框)</span>
          </label>
          <textarea
            id="message-area" // 必须有 ID 才能被 label 关联
            rows="4"
            placeholder="请输入您的详细需求或留言内容..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white/5 border border-gray-600 rounded-lg p-3 text-gray-900 focus:border-blue-400 focus:outline-none resize-none"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">💡 Pink老师知识点：使用 htmlFor 绑定 id，点击标签就能聚焦</p>
        </div>

        {/* --- 提交按钮区域 --- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit" // 设为 submit 以触发 form 的 onSubmit
            disabled={isSubmitting} // Pink老师讲的 disabled 属性：为 true 时不可点
            className={`
              flex-1 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all
              ${isSubmitting
                ? 'bg-gray-600 cursor-not-allowed text-gray-400' // 禁用时的样式
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white active:scale-95'} // 正常样式
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                发送中...
              </>
            ) : (
              <>
                <Send size={18} />
                发送消息
              </>
            )}
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

        {/* --- 知识点：字符实体演示 (版权声明) --- */}
        <p className="text-center text-xs text-gray-500 mt-4">
          © 2025 林承列 | Built with React & Tailwind CSS
        </p>

      </form>
    </div>
  );
};

export default ContactForm;