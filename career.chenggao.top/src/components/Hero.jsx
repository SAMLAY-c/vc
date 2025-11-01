import React from 'react'
import { ChevronDown, MapPin, School, User } from 'lucide-react'
import { personalInfo } from '../data/resumeData'

const Hero = () => {
  const scrollToEducation = () => {
    const element = document.querySelector('#education')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden">
            <img
              src={personalInfo.avatar}
              alt="林承列的头像"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          林承列
          <span className="block text-xl md:text-2xl font-normal mt-2 text-blue-100">
            {personalInfo.title}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <School size={16} />
            <span>{personalInfo.school}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <User size={16} />
            <span>{personalInfo.status}</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToEducation}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            了解更多
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            联系我
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToEducation}
          className="animate-bounce hover:text-blue-200 transition-colors duration-300"
          aria-label="向下滚动"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/5 rounded-full animate-float-delayed" />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/5 rounded-full animate-float-slow" />
    </section>
  )
}

export default Hero