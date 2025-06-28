import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, Users, Zap, Target, TrendingUp, MessageSquare, PenTool, User, BarChart3, CheckCircle, Quote, Calendar, ChevronRight, Rocket, Crown, Shield, Award, Globe, Briefcase, Coffee, Heart, Instagram, Youtube, Twitter, Linkedin, Phone, Mail, ExternalLink, Sparkles, Infinity, UserCheck, BarChart, Megaphone, Camera, Edit3, TrendingUp as Trending, DollarSign, Clock, Layers, ArrowDown, FileText, ThumbsUp, Play, TrendingUp as Growth } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Build and engage your community across all major social platforms with strategic content and management.",
      features: ["Content Planning", "Community Management", "Social Strategy", "Platform Optimization"],
      highlight: true,
      color: "from-blue-500/20 to-purple-500/20",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      description: "Data-driven advertising campaigns that deliver measurable results and maximize your marketing ROI.",
      features: ["Paid Advertising", "Conversion Optimization", "Analytics & Reporting", "A/B Testing"],
      highlight: true,
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Create compelling content that tells your story, educates your audience, and drives meaningful engagement.",
      features: ["Content Strategy", "Video Production", "Blog Writing", "Visual Design"],
      color: "from-orange-500/20 to-red-500/20",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: Instagram,
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach new audiences authentically.",
      features: ["Influencer Outreach", "Campaign Management", "Performance Tracking", "Content Collaboration"],
      color: "from-pink-500/20 to-rose-500/20",
      iconBg: "bg-pink-500/20",
      iconColor: "text-pink-400"
    }
  ];

  const whyUsPoints = [
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every campaign is designed to deliver measurable growth and real business impact.",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced marketers who understand both brand building and performance marketing.",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Strategies",
      description: "We stay ahead of trends and use the latest marketing tools and techniques.",
      color: "text-purple-400"
    },
    {
      icon: Heart,
      title: "Personal Approach",
      description: "Dedicated account managers who become true partners in your growth journey.",
      color: "text-pink-400"
    }
  ];

  const ourApproach = [
    {
      icon: Sparkles,
      title: "Grassroot Marketing",
      description: "We build authentic communities from the ground up, focusing on genuine engagement over vanity metrics."
    },
    {
      icon: Infinity,
      title: "Unlimited Content",
      description: "No limits on reels, posts, or content pieces. We create as much as needed for maximum impact."
    },
    {
      icon: UserCheck,
      title: "Personalized Strategy",
      description: "Every client gets a dedicated, customized content plan tailored for maximum reach and benefits."
    },
    {
      icon: BarChart,
      title: "Data-Driven Results",
      description: "We track everything and optimize continuously to ensure the best possible outcomes."
    }
  ];

  const traditionalAgencies = [
    {
      icon: DollarSign,
      title: "High Costs, Low Value",
      description: "Expensive packages with limited content and generic strategies"
    },
    {
      icon: Clock,
      title: "Slow Execution",
      description: "Long turnaround times and delayed campaign launches"
    },
    {
      icon: Layers,
      title: "One-Size-Fits-All",
      description: "Generic templates and strategies that don't fit your brand"
    },
    {
      icon: Shield,
      title: "Limited Transparency",
      description: "Unclear reporting and lack of real-time performance insights"
    }
  ];

  const testimonials = [
    {
      name: "Syntx.dev Team",
      role: "AI Startup",
      content: "MarkupMedia helped us gain massive audience, made us top of ProductHunt, and our marketing success led to getting funded by Qualcomm!",
      rating: 5,
      highlight: true
    },
    {
      name: "Cricket Startup",
      role: "Sports Platform",
      content: "We went from 0 to 10,000 followers organically in just 2 months with their grassroot marketing approach. Amazing results!",
      rating: 5
    },
    {
      name: "Fashion Startup",
      role: "E-commerce Brand",
      content: "In just 20 days working with MarkupMedia, we gained 500+ followers and generated over 500+ orders. Incredible ROI!",
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: "Prithvi Raj Chauhan",
      role: "Co-Founder & CEO",
      bio: "Expert in advertising and growth strategies with a passion for building authentic brand communities.",
      expertise: "Advertising Strategy, Brand Growth",
      photoPlaceholder: "Replace with your photo",
      socials: {
        instagram: "#", // Replace with actual Instagram link
        twitter: "https://x.com/Prc_2004",   // Replace with actual Twitter/X link
        linkedin: "https://www.linkedin.com/in/prithvirajchauhan2004/"   // Replace with actual LinkedIn link
      }
    },
    {
      name: "Manas Srivastava",
      role: "Co-Founder",
      bio: "Specialized in performance marketing and dedicated marketing plans that drive real business results.",
      expertise: "Performance Marketing, Strategic Planning",
      photoPlaceholder: "Replace with your photo",
      socials: {
        instagram: "#", // Replace with actual Instagram link
        twitter: "https://x.com/block_buddy19",   // Replace with actual Twitter/X link
        linkedin: "https://www.linkedin.com/in/manas-srivastava-7618371b5/"   // Replace with actual LinkedIn link
      }
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      icon: UserCheck,
      title: "Client Onboarding",
      description: "We start by understanding your brand, goals, and current challenges",
      color: "from-blue-500 to-purple-600"
    },
    {
      step: 2,
      icon: MessageSquare,
      title: "Detailed Discussion",
      description: "In-depth meeting to analyze your target audience and market positioning",
      color: "from-purple-500 to-pink-600"
    },
    {
      step: 3,
      icon: FileText,
      title: "Custom Plan Creation",
      description: "We create a fully personalized content and marketing strategy",
      color: "from-pink-500 to-red-600"
    },
    {
      step: 4,
      icon: ThumbsUp,
      title: "Client Approval",
      description: "Review and approval of the customized strategy and content plan",
      color: "from-red-500 to-orange-600"
    },
    {
      step: 5,
      icon: Play,
      title: "Content & Campaigns",
      description: "Start posting content, running marketing strategies, campaigns and ads",
      color: "from-orange-500 to-yellow-600"
    },
    {
      step: 6,
      icon: Growth,
      title: "Happy Client & Growth",
      description: "Measurable results, satisfied clients, and sustainable business growth",
      color: "from-[#18cb96] to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#18cb96]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500/4 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/5 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section - Replace with your logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#18cb96] to-[#15b085] rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Replace this div with your logo image */}
                <img 
                  src="/path-to-your-logo.png" 
                  // alt="MarkupMedia Logo" 
                  className="w-full h-full object-contain hidden"
                />
                {/* Temporary placeholder - remove when adding logo */}
                <div className="text-center">
                  <Zap className="text-black" size={20} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-black/50 bg-white/20 px-1 rounded text-center leading-tight">
                      {/* Logo Here */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-[#18cb96]">MarkupMedia</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-[#18cb96] transition-colors flex items-center">
                <Target size={16} className="mr-1" />
                Services
              </a>
              <a href="#workflow" className="hover:text-[#18cb96] transition-colors flex items-center">
                <BarChart3 size={16} className="mr-1" />
                Process
              </a>
              <a href="#why-us" className="hover:text-[#18cb96] transition-colors flex items-center">
                <Award size={16} className="mr-1" />
                Why Us
              </a>
              <a href="#testimonials" className="hover:text-[#18cb96] transition-colors flex items-center">
                <Star size={16} className="mr-1" />
                Testimonials
              </a>
              <a href="#team" className="hover:text-[#18cb96] transition-colors flex items-center">
                <Users size={16} className="mr-1" />
                Team
              </a>
            </div>

            {/* Book a Call Button - Add your Calendly link */}
            <a 
              href="https://calendly.com/prithvi-markupmedia/30min?month=2025-06" // Replace with your Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center bg-[#18cb96] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#15b085] transition-all duration-300 hover:scale-105"
            >
              <Calendar size={16} className="mr-2" />
              Book a Call
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block hover:text-[#18cb96] transition-colors">Services</a>
              <a href="#workflow" className="block hover:text-[#18cb96] transition-colors">Process</a>
              <a href="#why-us" className="block hover:text-[#18cb96] transition-colors">Why Us</a>
              <a href="#testimonials" className="block hover:text-[#18cb96] transition-colors">Testimonials</a>
              <a href="#team" className="block hover:text-[#18cb96] transition-colors">Team</a>
              <a 
                href="https://calendly.com/prithvi-markupmedia/30min?month=2025-06" // Replace with your Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#18cb96] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#15b085] transition-colors text-center"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative z-10">
            {/* Floating Graphics */}
            <div className="absolute -top-10 left-1/4 opacity-20">
              <TrendingUp size={64} className="text-[#18cb96] animate-bounce" />
            </div>
            <div className="absolute -top-5 right-1/4 opacity-20">
              <Megaphone size={48} className="text-blue-400 animate-pulse" />
            </div>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-[#18cb96]" size={20} />
                  <span className="text-gray-300 text-sm">Growth Marketing</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="text-blue-400" size={20} />
                  <span className="text-gray-300 text-sm">Grassroot Strategy</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Infinity className="text-purple-400" size={20} />
                  <span className="text-gray-300 text-sm">Unlimited Content</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Grow Your Brand with
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#18cb96] via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Unlimited Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We help brands and individuals achieve explosive growth through grassroot marketing, unlimited content creation, and personalized strategies that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Book a Call Button - Add your Calendly link */}
              <a 
                href="https://calendly.com/prithvi-markupmedia/30min?month=2025-06" // Replace with your Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#18cb96] to-[#15b085] text-black px-8 py-4 rounded-lg font-semibold hover:from-[#15b085] hover:to-[#18cb96] transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Calendar className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Book a Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              {/* <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-[#18cb96] hover:bg-[#18cb96]/10 transition-all duration-300 flex items-center justify-center">
                <BarChart3 className="mr-2" size={20} />
                View Success Stories
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#18cb96]/20 to-blue-500/20 p-4 rounded-full">
                <Target className="text-[#18cb96]" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive marketing solutions with unlimited content and personalized strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 group ${
                  service.highlight 
                    ? `bg-gradient-to-br ${service.color} border border-[#18cb96]/20` 
                    : `bg-gradient-to-br ${service.color} border border-gray-800`
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#18cb96] to-blue-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${service.iconBg}`}>
                    <service.icon className={`${service.iconColor || 'text-[#18cb96]'} group-hover:scale-110 transition-transform`} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="text-[#18cb96] mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#18cb96]/20 to-orange-500/20 p-4 rounded-full">
                <BarChart3 className="text-[#18cb96]" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Personalized Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide fully personalized content plans that help startups and brands grow through detailed analysis and strategic implementation
            </p>
          </div>

          <div className="relative">
            {/* Workflow Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-[#18cb96] to-transparent z-10"></div>
                  )}
                  
                  <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-[#18cb96]/30 transition-all duration-300 group hover:scale-105 relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#18cb96] to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {step.step}
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-lg mr-4 bg-gradient-to-r ${step.color} bg-opacity-20`}>
                        <step.icon className="text-white group-hover:scale-110 transition-transform" size={32} />
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                    
                    {/* Arrow for mobile */}
                    {index < workflowSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <ArrowDown className="text-[#18cb96]" size={24} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-[#18cb96]/10 to-blue-500/10 p-6 rounded-xl border border-[#18cb96]/20">
              <Sparkles className="text-[#18cb96] mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">Detailed Analysis</h4>
              <p className="text-gray-300 text-sm">Comprehensive market research and audience analysis</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
              <FileText className="text-purple-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">Custom Strategy</h4>
              <p className="text-gray-300 text-sm">Fully personalized content and marketing plans</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-500/10 to-[#18cb96]/10 p-6 rounded-xl border border-green-500/20">
              <Growth className="text-green-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">Measurable Results</h4>
              <p className="text-gray-300 text-sm">Trackable growth and satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#18cb96]/20 to-purple-500/20 p-4 rounded-full">
                <Award className="text-[#18cb96]" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose MarkupMedia?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're not just another marketing agency—we're your growth partners with unlimited possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsPoints.map((point, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`bg-gradient-to-br from-gray-800 to-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-[#18cb96]/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:rotate-12`}>
                  <point.icon className={`${point.color}`} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-red-500/20 to-[#18cb96]/20 p-4 rounded-full">
                <Shield className="text-[#18cb96]" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-400">Traditional Agencies</span> vs <span className="text-[#18cb96]">MarkupMedia</span>
            </h2>
            <p className="text-xl text-gray-300">
              See why we're different from the rest
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional Agencies */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="bg-red-500/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <X className="text-red-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-red-400">Traditional Agencies</h3>
              </div>
              {traditionalAgencies.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start bg-red-500/10 border border-red-500/20 p-6 rounded-lg hover:bg-red-500/20 transition-colors group"
                >
                  <div className="bg-red-500/20 p-2 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400 mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Approach */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="bg-[#18cb96]/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="text-[#18cb96]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#18cb96]">MarkupMedia Approach</h3>
              </div>
              {ourApproach.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start bg-gradient-to-r from-[#18cb96]/10 to-blue-500/10 border border-[#18cb96]/20 p-6 rounded-lg hover:from-[#18cb96]/20 hover:to-blue-500/20 transition-all duration-300 group"
                >
                  <div className="bg-[#18cb96]/20 p-2 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-[#18cb96]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#18cb96] mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#18cb96]/20 to-blue-500/10 p-8 rounded-2xl border border-[#18cb96]/20">
              <div className="flex justify-center mb-4">
                <Sparkles className="text-[#18cb96]" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#18cb96]">Ready for Unlimited Growth?</h3>
              <p className="text-gray-300 mb-6">
                Get a dedicated, personalized content plan designed for maximum reach and benefits.
              </p>
              {/* Book Strategy Call Button - Add your Calendly link */}
              <a 
                href="#" // Replace with your Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#18cb96] to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-[#18cb96] transition-all duration-300 hover:scale-105"
              >
                <Calendar size={16} className="mr-2" />
                Book Your Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#18cb96]/20 to-yellow-500/20 p-4 rounded-full">
                <Star className="text-[#18cb96]" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">
              Real results from brands and individuals we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border group ${
                  testimonial.highlight 
                    ? 'bg-gradient-to-br from-[#18cb96]/20 to-blue-500/20 border-[#18cb96]/30' 
                    : 'bg-black border-gray-800 hover:border-[#18cb96]/30'
                }`}
              >
                {testimonial.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <Quote className="text-[#18cb96] group-hover:scale-110 transition-transform" size={32} />
                </div>
                <p className="text-gray-300 mb-6 text-center">{testimonial.content}</p>
                <div className="flex justify-center items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <div className="text-center">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#18cb96]/20 to-purple-500/20 p-4 rounded-full">
                <Users className="text-[#18cb96]" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Co-Founders</h2>
            <p className="text-xl text-gray-300">
              Marketing experts dedicated to your growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative mb-8">
                  {/* Photo Container - Replace with actual photos */}
                  <div className="w-48 h-48  rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden border-4 border-[#18cb96]/20">
                    {/* Replace this div with your photo */}
                    <img 
                      src="./public/Manas.jpg"

                      // alt={member.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                    {/* Temporary placeholder - remove when adding photos */}
                    {/* <div className="text-center">
                      <User size={48} className="text-gray-400 mb-2" />
                      <div className="text-xs text-gray-400 px-4 leading-tight">
                        {member.photoPlaceholder}
                      </div>
                    </div> */}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#18cb96] to-blue-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    CO-FOUNDER
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-[#18cb96] font-semibold mb-4">{member.role}</div>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <a 
                    href={member.socials.instagram} // Replace with actual Instagram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-3 rounded-lg hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 group/social"
                  >
                    <Instagram size={20} className="text-pink-400 group-hover/social:scale-110 transition-transform" />
                  </a>
                  <a 
                    href={member.socials.twitter} // Replace with actual Twitter/X link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 group/social"
                  >
                    <Twitter size={20} className="text-blue-400 group-hover/social:scale-110 transition-transform" />
                  </a>
                  <a 
                    href={member.socials.linkedin} // Replace with actual LinkedIn link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 p-3 rounded-lg hover:from-blue-600/30 hover:to-blue-700/30 transition-all duration-300 group/social"
                  >
                    <Linkedin size={20} className="text-blue-500 group-hover/social:scale-110 transition-transform" />
                  </a>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="text-[#18cb96] mr-2" size={16} />
                    <div className="text-sm text-gray-400">Expertise</div>
                  </div>
                  <div className="font-semibold">{member.expertise}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#18cb96]/20 via-blue-500/10 to-purple-500/20 p-12 rounded-3xl border border-[#18cb96]/20 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <TrendingUp className="text-[#18cb96]/20" size={64} />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="text-blue-400/20" size={64} />
            </div>
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
              <Infinity className="text-purple-400/20" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Ready for <span className="text-[#18cb96]">Unlimited Growth</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Get a personalized content plan with grassroot marketing strategies designed for maximum reach and real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              {/* Book Strategy Call Button - Add your Calendly link */}
              <a 
                href="https://calendly.com/prithvi-markupmedia/30min?month=2025-06" // Replace with your Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#18cb96] to-blue-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-[#18cb96] transition-all duration-300 hover:scale-105"
              >
                <Calendar size={16} className="mr-2" />
                Book a Free Strategy Call
              </a>
              {/* Custom Quote Button - Add your custom quote link
              <a 
                href="#" // Replace with your custom quote link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-[#18cb96] hover:bg-[#18cb96]/10 transition-all duration-300"
              >
                <MessageSquare size={16} className="mr-2" />
                Get a Custom Quote
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#18cb96] to-[#15b085] rounded-lg flex items-center justify-center">
                  <Zap className="text-black" size={20} />
                </div>
                <div className="text-3xl font-bold text-[#18cb96]">MarkupMedia</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Marketing and growth agency specializing in grassroot marketing, unlimited content creation, and personalized strategies for maximum reach.
              </p>
              <div className="text-gray-400 space-y-2 mb-6">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-[#18cb96]" />
                  prithvi@markupmedia.xyz
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-[#18cb96]" />
                  +91 9354516900
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/markupmedia.digital/" // Replace with your Instagram link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-[#18cb96]/20 transition-colors group"
                >
                  <Instagram size={20} className="text-gray-400 group-hover:text-[#18cb96]" />
                </a>
                <a 
                  href="#" // Replace with your YouTube link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-red-500/20 transition-colors group"
                >
                  <Youtube size={20} className="text-gray-400 group-hover:text-red-400" />
                </a>
                <a 
                  href="https://x.com/markupmedia25" // Replace with your Twitter/X link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-500/20 transition-colors group"
                >
                  <Twitter size={20} className="text-gray-400 group-hover:text-blue-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/markup-media2025/" // Replace with your LinkedIn link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600/20 transition-colors group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-blue-500" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Target size={16} className="mr-2 text-[#18cb96]" />
                Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Social Media Management</a></li>
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Performance Marketing</a></li>
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Content Marketing</a></li>
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Influencer Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Award size={16} className="mr-2 text-[#18cb96]" />
                Company
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-[#18cb96] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="text-[#18cb96]" size={16} />
              <span>Unlimited growth, personalized strategies, grassroot marketing</span>
              <Infinity className="text-[#18cb96]" size={16} />
            </div>
            <p>&copy; 2024 MarkupMedia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;