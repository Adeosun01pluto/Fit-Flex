import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Play, Star, Calendar, Clock, Users, Trophy, 
  Phone, Mail, MapPin, ChevronRight, Dumbbell, Target,
  Heart, Zap, CheckCircle, ArrowRight, Instagram, 
  Facebook, Twitter, User, Award, TrendingUp
} from 'lucide-react';

const FitFlexWebsite = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Smooth scrolling navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'programs', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      id: 1,
      name: "Strength Training",
      icon: <Dumbbell className="w-8 h-8" />,
      duration: "12 weeks",
      price: "$299",
      description: "Build muscle and increase strength with our comprehensive strength training program.",
      features: ["Personal trainer", "Custom workout plan", "Nutrition guidance", "Progress tracking"],
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      name: "HIIT Cardio",
      icon: <Zap className="w-8 h-8" />,
      duration: "8 weeks",
      price: "$199",
      description: "High-intensity interval training to burn fat and boost cardiovascular health.",
      features: ["Group classes", "Heart rate monitoring", "Meal plans", "Weekly assessments"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "Yoga & Flexibility",
      icon: <Heart className="w-8 h-8" />,
      duration: "10 weeks",
      price: "$249",
      description: "Improve flexibility, balance, and mental well-being through guided yoga sessions.",
      features: ["Meditation sessions", "Flexibility training", "Stress management", "Recovery techniques"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Athletic Performance",
      icon: <Trophy className="w-8 h-8" />,
      duration: "16 weeks",
      price: "$399",
      description: "Elite training for athletes looking to enhance their competitive performance.",
      features: ["Sport-specific training", "Performance analytics", "Recovery protocols", "Mental coaching"],
      color: "from-blue-500 to-purple-500"
    }
  ];

  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      image: "👩‍💪",
      rating: 4.9,
      certifications: ["NASM-CPT", "CSCS"],
      bio: "Specializes in helping clients build functional strength and achieve their fitness goals."
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialty: "HIIT & Cardio",
      experience: "6 years",
      image: "👨‍💪",
      rating: 4.8,
      certifications: ["ACSM-CPT", "TRX"],
      bio: "Expert in high-intensity training and cardiovascular conditioning for all fitness levels."
    },
    {
      id: 3,
      name: "Emma Chen",
      specialty: "Yoga & Wellness",
      experience: "10 years",
      image: "🧘‍♀️",
      rating: 5.0,
      certifications: ["RYT-500", "YACEP"],
      bio: "Combines traditional yoga practices with modern wellness techniques for holistic health."
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Marketing Executive",
      image: "👩‍💼",
      rating: 5,
      text: "FitFlex transformed my life! I lost 30 pounds and gained incredible strength. The trainers are amazing and truly care about your success."
    },
    {
      name: "David Thompson",
      role: "Software Engineer",
      image: "👨‍💻",
      rating: 5,
      text: "The HIIT program was exactly what I needed. Great workouts that fit my busy schedule. Highly recommend!"
    },
    {
      name: "Lisa Wang",
      role: "Teacher",
      image: "👩‍🏫",
      rating: 5,
      text: "The yoga sessions helped me manage stress and improve my flexibility. The community here is incredibly supportive."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Exercises for Building Core Strength",
      excerpt: "Discover the most effective exercises to build a strong, stable core that supports all your movements.",
      date: "June 8, 2025",
      category: "Strength Training",
      readTime: "5 min read",
      image: "💪"
    },
    {
      id: 2,
      title: "The Science Behind HIIT Training",
      excerpt: "Learn why high-intensity interval training is so effective for fat loss and cardiovascular health.",
      date: "June 5, 2025",
      category: "Cardio",
      readTime: "7 min read",
      image: "🔥"
    },
    {
      id: 3,
      title: "Nutrition Tips for Maximum Performance",
      excerpt: "Fuel your workouts with the right nutrition strategies to optimize your training results.",
      date: "June 2, 2025",
      category: "Nutrition",
      readTime: "6 min read",
      image: "🥗"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                FitFlex
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'programs', 'testimonials', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-red-500 ${
                    activeNav === item ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-2 space-y-2 bg-gray-800">
            {['home', 'programs', 'testimonials', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-all duration-300 ${
                  activeNav === item ? 'text-red-500 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    Train Smart,
                  </span>
                  <br />
                  <span className="text-white">Stay Fit.</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Transform your body and mind with personalized fitness coaching. 
                  Join thousands who've achieved their fitness goals with FitFlex.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Start Your Journey
                </button>
                <button className="border-2 border-gray-600 hover:border-red-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-red-500/10">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">500+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">50+</div>
                  <div className="text-gray-400">Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">10+</div>
                  <div className="text-gray-400">Expert Trainers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center text-8xl animate-pulse">
                💪 
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-bounce">
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-4xl mx-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Book Your Session</h3>
            <p className="text-gray-300">Choose your preferred time and trainer</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Date</label>
              <input type="date" className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-red-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Time</label>
              <select className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-red-500 focus:outline-none transition-colors">
                <option>9:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>4:00 PM</option>
                <option>6:00 PM</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Trainer</label>
              <select className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-red-500 focus:outline-none transition-colors">
                <option>Any Trainer</option>
                <option>Sarah Johnson</option>
                <option>Mike Rodriguez</option>
                <option>Emma Chen</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 p-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div> */}
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Fitness Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of fitness programs designed to help you achieve your specific goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.id}
                className="group bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-red-500/50"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {program.name}
                </h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.duration}
                  </span>
                  <span className="text-2xl font-bold text-red-500">{program.price}</span>
                </div>

                {selectedProgram === program.id && (
                  <div className="mt-4 space-y-3 animate-fade-in">
                    <h4 className="font-semibold text-red-500">What's Included:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                    <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 py-2 rounded-lg font-semibold transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trainer Cards */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Meet Our <span className="text-red-500">Expert Trainers</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {trainers.map((trainer, index) => (
                <div 
                  key={trainer.id}
                  className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-red-500/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedTrainer(selectedTrainer === trainer.id ? null : trainer.id)}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{trainer.image}</div>
                    <h4 className="text-xl font-bold mb-2">{trainer.name}</h4>
                    <p className="text-red-500 font-semibold">{trainer.specialty}</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-500 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({trainer.rating})</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Experience:</span>
                      <span className="font-semibold">{trainer.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Certifications:</span>
                      <span className="font-semibold text-sm">{trainer.certifications.join(', ')}</span>
                    </div>
                  </div>

                  {selectedTrainer === trainer.id && (
                    <div className="mt-4 p-4 bg-gray-700 rounded-lg animate-fade-in">
                      <p className="text-sm text-gray-300 mb-3">{trainer.bio}</p>
                      <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 py-2 rounded-lg font-semibold transition-all duration-300">
                        Book Session
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real stories from real people who transformed their lives with FitFlex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:transform hover:translateY-2 transition-all duration-500 hover:shadow-2xl border border-gray-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Fitness Blog
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Expert tips, insights, and guides to help you on your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-red-500/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <button className="text-red-500 hover:text-red-400 transition-colors flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your fitness journey? Contact us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Our Gym</h3>
                  <p className="text-gray-300">123 Fitness Street, Health City, HC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-300">info@fitflex.com</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-8">
                <button className="w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Fitness Goals</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none transition-colors">
                  <option>Select your primary goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>Cardio Fitness</option>
                  <option>Flexibility & Mobility</option>
                  <option>Athletic Performance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your fitness goals and any questions you have..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  FitFlex
                </span>
              </div>
              <p className="text-gray-400">
                Transform your body and mind with personalized fitness coaching. Join the FitFlex community today.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="text-gray-400 hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="text-gray-400 hover:text-white transition-colors">Blog</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Strength Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HIIT Cardio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Yoga & Flexibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Athletic Performance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Training</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">123 Fitness Street, Health City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">info@fitflex.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Mon-Fri: 6AM-10PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 FitFlex. All rights reserved. Built with passion for fitness.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button 
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <ChevronRight className="w-6 h-6 text-white transform -rotate-90" />
      </button>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          
          @keyframes bounce-in {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .animate-bounce-in {
            animation: bounce-in 0.6s ease-out forwards;
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #1f2937;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #ef4444, #ec4899);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #dc2626, #db2777);
          }
        `
      }} />
    </div>
  );
};

export default FitFlexWebsite;