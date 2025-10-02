'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white shadow-md" id="navbar">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center transition-all duration-500 ease-in-out py-6" id="nav-content">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="transition-all duration-500 ease-in-out w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg" id="logo">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="transition-all duration-500 ease-in-out" id="brand-text">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
            The Savory Table
          </h1>
          <p className="text-xs text-gray-500 font-medium tracking-wide">Marketing Excellence</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        <a href="#home" className="px-4 py-2 text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:bg-amber-50 rounded-lg">
          Home
        </a>
        <a href="#services" className="px-4 py-2 text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:bg-amber-50 rounded-lg">
          Services
        </a>
        <a href="#about" className="px-4 py-2 text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:bg-amber-50 rounded-lg">
          About
        </a>
        <a href="#pricing" className="px-4 py-2 text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:bg-amber-50 rounded-lg">
          Pricing
        </a>
        <a href="#contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-300" id="mobile-menu-button">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="hidden lg:hidden bg-white border-t border-gray-100 shadow-lg" id="mobile-menu">
    <div className="px-4 py-4 space-y-2">
      <a href="#home" className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300">
        Contact Us
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const logo = document.getElementById('logo');
      const brandText = document.getElementById('brand-text');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.classList.remove('py-6');
          navContent.classList.add('py-3');
          logo.classList.remove('w-12', 'h-12');
          logo.classList.add('w-10', 'h-10');
          navbar.classList.add('shadow-xl');
        } else {
          navContent.classList.remove('py-3');
          navContent.classList.add('py-6');
          logo.classList.remove('w-10', 'h-10');
          logo.classList.add('w-12', 'h-12');
          navbar.classList.remove('shadow-xl');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-500/20 to-rose-600/20 animate-gradient-shift"></div>
  
  {/* Animated Gradient Orbs */}
  <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-3xl animate-float"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-400/30 to-orange-500/30 rounded-full blur-3xl animate-float-delayed"></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

  {/* Floating Text Elements */}
  <div className="absolute top-24 left-[10%] text-amber-600/20 font-serif text-6xl font-bold animate-float-slow">Flavor</div>
  <div className="absolute top-40 right-[15%] text-orange-500/20 font-serif text-5xl font-bold animate-float-delayed">Craft</div>
  <div className="absolute bottom-32 left-[20%] text-rose-600/20 font-serif text-7xl font-bold animate-float">Taste</div>
  <div className="absolute bottom-48 right-[12%] text-amber-500/20 font-serif text-4xl font-bold animate-float-slow">Artisan</div>
  <div className="absolute top-1/3 left-[8%] text-orange-400/20 font-serif text-5xl font-bold animate-float-delayed">Fresh</div>
  <div className="absolute top-1/2 right-[8%] text-rose-500/20 font-serif text-6xl font-bold animate-float">Savor</div>

  {/* Main Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
    <div className="max-w-5xl mx-auto text-center">
      {/* Brand Badge */}
      <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-amber-200/50 animate-fade-in-up">
        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-amber-900 tracking-wide">The Savory Table</span>
      </div>

      {/* Main Headline */}
      <h1 className="mb-6 animate-fade-in-up animation-delay-200">
        <span className="block text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent leading-tight mb-4">
          Marketing That
        </span>
        <span className="block text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-rose-700 via-orange-600 to-amber-700 bg-clip-text text-transparent leading-tight">
          Feeds Growth
        </span>
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-amber-900/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
        We craft irresistible marketing campaigns that leave your audience hungry for more. 
        <span className="block mt-2 font-medium text-orange-700">Strategic. Flavorful. Results-Driven.</span>
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
        <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
          <span>Taste Our Strategy</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button className="px-8 py-4 bg-white/80 backdrop-blur-md text-amber-900 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 border border-amber-200/50">
          View Our Menu
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-800">
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">250+</div>
          <div className="text-sm text-amber-900/70 font-medium">Campaigns Served</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-2">3.5x</div>
          <div className="text-sm text-amber-900/70 font-medium">Avg ROI Growth</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-2">98%</div>
          <div className="text-sm text-amber-900/70 font-medium">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-shift {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-20px) translateX(10px); }
      66% { transform: translateY(-10px) translateX(-10px); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-15px) translateX(-15px); }
      66% { transform: translateY(-25px) translateX(5px); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(2deg); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-gradient-shift {
      animation: gradient-shift 8s ease-in-out infinite;
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float-delayed 10s ease-in-out infinite;
    }
    .animate-float-slow {
      animation: float-slow 12s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 6s ease-in-out infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
      opacity: 0;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
      opacity: 0;
    }
    .animation-delay-600 {
      animation-delay: 0.6s;
      opacity: 0;
    }
    .animation-delay-800 {
      animation-delay: 0.8s;
      opacity: 0;
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        The Savory Table Experience
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Where culinary excellence meets exceptional service
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
      {/* Large Feature - Farm to Table */}
      <div className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Fresh, Locally-Sourced Ingredients
            </h3>
            <p className="text-emerald-50 text-lg leading-relaxed">
              The Savory Table partners with local farms and artisans to bring you the freshest seasonal ingredients. Every dish tells a story of our community's finest produce.
            </p>
          </div>
          <div className="flex items-center text-white font-semibold mt-4">
            <span className="mr-2">Explore Our Sources</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Award-Winning Chef */}
      <div className="md:col-span-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10 h-full flex items-center justify-between">
          <div className="flex-1">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Award-Winning Chef
            </h3>
            <p className="text-amber-50 text-base">
              15 years of culinary mastery at The Savory Table
            </p>
          </div>
          <div className="text-white/30 text-8xl font-bold ml-4">15</div>
        </div>
      </div>

      {/* Diverse Menu */}
      <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Diverse Menu Options
            </h3>
            <p className="text-purple-100 text-sm">
              Vegan, gluten-free, and allergen-friendly dishes
            </p>
          </div>
        </div>
      </div>

      {/* Online Ordering */}
      <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-56 h-56 bg-white opacity-5 rounded-full -mr-28 -mt-28 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Online Ordering & Delivery
            </h3>
            <p className="text-blue-100 text-base leading-relaxed mb-6">
              The Savory Table at your doorstep. Order online for seamless pickup or delivery.
            </p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors w-full">
            Order Now
          </button>
        </div>
      </div>

      {/* Private Events */}
      <div className="md:col-span-2 bg-gradient-to-br from-rose-600 to-red-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Private Dining & Events
            </h3>
            <p className="text-rose-100 text-sm">
              Host unforgettable gatherings at The Savory Table
            </p>
          </div>
        </div>
      </div>

      {/* Craft Cocktails */}
      <div className="md:col-span-2 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Craft Cocktails & Wine
            </h3>
            <p className="text-teal-100 text-sm">
              Curated selections to complement every meal
            </p>
          </div>
        </div>
      </div>

      {/* Outdoor Dining */}
      <div className="md:col-span-2 bg-gradient-to-br from-lime-600 to-green-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Outdoor Dining
            </h3>
            <p className="text-lime-100 text-sm">
              Al fresco experience at The Savory Table
            </p>
          </div>
        </div>
      </div>

      {/* Easy Reservations */}
      <div className="md:col-span-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Easy Reservations
            </h3>
            <p className="text-yellow-100 text-sm">
              Book your table in seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover how The Savory Table has transformed marketing campaigns for brands across the industry
      </p>
    </div>

    {/* Testimonials Slider */}
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Sarah Mitchell"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-xl">Sarah Mitchell</h3>
              <p className="text-sm text-amber-200">Brand Director, Luxe Cosmetics</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "The Savory Table completely revolutionized our product launch strategy. Their creative approach to food marketing helped us achieve a 340% increase in engagement. Absolutely phenomenal results!"
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden md:mt-8">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Marcus Chen"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-xl">Marcus Chen</h3>
              <p className="text-sm text-amber-200">CMO, TechBite Solutions</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Working with The Savory Table was a game-changer for our B2B campaigns. Their data-driven storytelling and culinary expertise brought our brand to life in ways we never imagined possible."
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Elena Rodriguez"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-xl">Elena Rodriguez</h3>
              <p className="text-sm text-amber-200">Marketing VP, GreenLeaf Organics</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "The Savory Table's innovative campaigns helped us connect with our target audience authentically. Their team's passion for food marketing translated into a 250% ROI on our seasonal campaign. Highly recommend!"
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-12 gap-3">
        <button className="w-3 h-3 rounded-full bg-amber-500 transition-all"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-amber-300 transition-all"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-amber-300 transition-all"></button>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        The Savory Table <span className="text-orange-600">Pricing</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Elevate your marketing strategy with premium culinary content solutions
      </p>
    </div>

    {/* Toggle Switch */}
    <div className="flex items-center justify-center mb-16">
      <div className="bg-white rounded-full p-2 shadow-lg border-2 border-orange-200 inline-flex items-center gap-1">
        <button className="px-8 py-3 rounded-full text-gray-600 font-semibold transition-all duration-300 hover:text-orange-600">
          Monthly
        </button>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md transition-all duration-300">
          Annual
        </button>
      </div>
      <div className="ml-4 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border-2 border-green-300">
        Save 25%
      </div>
    </div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Monthly Plan */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-2">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Plan</h3>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-5xl font-extrabold text-gray-900">$79</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <p className="text-gray-600">Perfect for growing brands</p>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Premium food photography & styling content</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Social media marketing templates</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Email campaign design assets</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Brand storytelling consultation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Monthly analytics & performance reports</span>
          </li>
        </ul>

        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Get Started Monthly
        </button>

        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>SSL Secure</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>

      {/* Annual Plan - Featured */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl p-8 border-4 border-orange-400 transform md:scale-105 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            BEST VALUE
          </span>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Annual Plan</h3>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl font-extrabold text-white">$59</span>
            <span className="text-orange-100 text-lg">/month</span>
          </div>
          <div className="text-orange-100 line-through text-sm mb-2">$79/month</div>
          <p className="text-white font-semibold">Billed annually at $708</p>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Everything in Monthly, plus:</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Priority customer support & strategy calls</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Custom brand recipe development</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Exclusive video content library access</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Quarterly trend reports & insights</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Save $240 per year</span>
          </li>
        </ul>

        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Get Started Annual
        </button>

        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-orange-100">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>SSL Secure</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Badges */}
    <div className="mt-16 text-center">
      <p className="text-gray-600 mb-6 font-semibold">Trusted by leading food & beverage brands</p>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <div className="flex items-center gap-2 text-gray-500">
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">256-bit SSL Encryption</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">PCI Compliant</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Money-back Guarantee</span>
        </div>
      </div>
    </div>
  </div>
</div>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
      
      {/* Sticky Sidebar - Left Column */}
      <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-8">
        <div>
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-amber-800 font-semibold text-sm">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Ready to Elevate Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Brand Story?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At The Savory Table, we craft marketing strategies as memorable as your favorite meal. Let's cook up something extraordinary together.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-6 bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
              <p className="text-sm text-gray-600">We'll get back to you within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Free Consultation</h3>
              <p className="text-sm text-gray-600">Complimentary strategy session included</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Confidential</h3>
              <p className="text-sm text-gray-600">Your information is secure with us</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-600">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>hello@thesavorytable.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Form - Right Column (2/3 width) */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const statusDiv = form.querySelector('#formStatus');
            
            // Get form data
            const formData = {
              name: form.name.value,
              email: form.email.value,
              phone: form.phone.value,
              company: form.company.value,
              service: form.service.value,
              budget: form.budget.value,
              message: form.message.value,
              source: 'The Savory Table Contact Form'
            };

            // Validation
            if (!formData.name || !formData.email || !formData.phone) {
              statusDiv.innerHTML = '<div class="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl"><p class="font-semibold">Please fill in all required fields.</p></div>';
              return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
              statusDiv.innerHTML = '<div class="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl"><p class="font-semibold">Please enter a valid email address.</p></div>';
              return;
            }

            // Show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
            statusDiv.innerHTML = '';

            try {
              const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
              });

              if (response.ok) {
                statusDiv.innerHTML = `
                  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 px-6 py-6 rounded-xl">
                    <div class="flex items-start space-x-3">
                      <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <p class="font-bold text-lg mb-1">Thank you for reaching out!</p>
                        <p class="text-green-700">We've received your message and will get back to you within 24 hours. Get ready to transform your brand!</p>
                      </div>
                    </div>
                  </div>
                `;
                form.reset();
              } else {
                throw new Error('Submission failed');
              }
            } catch (error) {
              statusDiv.innerHTML = `
                <div class="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
                  <p class="font-semibold mb-1">Oops! Something went wrong.</p>
                  <p class="text-sm">Please try again or email us directly at hello@thesavorytable.com</p>
                </div>
              `;
            } finally {
              submitButton.disabled = false;
              submitButton.innerHTML = 'Send Message <span class="ml-2">→</span>';
            }
          }}>
            
            <div id="formStatus" className="mb-6"></div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="brand-strategy">Brand Strategy</option>
                  <option value="content-marketing">Content Marketing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="seo">SEO & Digital Marketing</option>
                  <option value="email-marketing">Email Marketing</option>
                  <option value="paid-advertising">Paid Advertising</option>
                  <option value="full-service">Full-Service Marketing</option>
                  <option value="consultation">Just Exploring</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all resize-none"
                placeholder="Share your goals, challenges, and what success looks like for your brand..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
            >
              Send Message <span className="ml-2">→</span>
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting this form, you agree to The Savory Table's privacy policy and terms of service.
            </p>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-t border-amber-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* Newsletter Section - Primary Focus */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Hungry for Marketing Insights?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Get fresh strategies, industry trends, and exclusive content delivered straight to your inbox weekly.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-6 py-4 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 text-gray-900"
          required
        />
        <button
          type="submit"
          className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Join 10,000+ marketers. Unsubscribe anytime.
      </p>
    </div>

    {/* Divider */}
    <div className="border-t border-amber-200 mb-12"></div>

    {/* Footer Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* Company Info */}
      <div className="md:col-span-1">
        <h3 className="text-2xl font-bold text-amber-600 mb-4">The Savory Table</h3>
        <p className="text-gray-600 text-sm mb-4">
          Crafting delicious marketing strategies that leave a lasting impression.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Content Marketing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Social Media</a></li>
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">SEO & Analytics</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Case Studies</a></li>
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Careers</a></li>
          <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Get in Touch</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>hello@thesavorytable.com</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(555) 123-4567</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-amber-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} The Savory Table. All rights reserved.
      </p>
      
      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}