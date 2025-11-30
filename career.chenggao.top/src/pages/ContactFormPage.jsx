import React from 'react';
import ContactForm from '../components/ContactForm';
import { useNavigate } from 'react-router-dom';

const ContactFormPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">🤝 合作意向表单</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
            感谢您对我简历的关注！请填写以下信息，我会尽快与您取得联系。
          </p>
        </div>

        <ContactForm />

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🏠 返回简历首页
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;