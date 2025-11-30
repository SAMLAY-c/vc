import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
// 如果你有使用 react-router，可以用 useNavigate，这里假设是单页滚动
// import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleKeyDown = (e) => {
      // ESC 键关闭手机菜单
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    // 点击外部区域关闭手机菜单
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('header')) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '#education', label: '教育背景' },
    { href: '#internships', label: '实习经历' },
    { href: '#projects', label: '项目经历' },
    { href: '#contact', label: '联系方式' },
    // 合作表单跳转到独立页面
    { href: '/contact-form', label: '合作表单' }
  ]

  const scrollToSection = (selector) => {
    // 如果是路由路径，使用 React Router 导航
    if (selector === '/contact-form') {
      setIsMobileMenuOpen(false)
      // 在单页应用中，我们需要手动处理路由导航
      window.history.pushState({}, '', '/contact-form')
      // 触发路由更新事件
      window.dispatchEvent(new PopStateEvent('popstate'))
      return
    }

    // 简单的错误处理：如果是路由路径而不是ID，直接返回（或者你可以用 navigate 跳转）
    if (!selector.startsWith('#')) return;

    const element = document.querySelector(selector)
    if (element) {
      // 减去 header 的高度 (64px) 避免遮挡
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              林承列
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label} // href 可能重复，用 label 做 key 更安全
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 优化后的手机端菜单 (Mobile Menu Dropdown) */}
      {/* 使用动画和过渡效果 */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out transform overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2'
        }`}
        role="navigation"
        aria-label="主导航"
      >
        <div className="bg-white shadow-lg border-t border-gray-100 absolute w-full left-0 top-16">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                  isMobileMenuOpen
                    ? `opacity-0 translate-x-4 animate-slide-in-right`
                    : ''
                }`}
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header> 
    // 修改点 3: 删除了这里原本多余的 </div>
  )
}

export default Header