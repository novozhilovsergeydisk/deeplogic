import React from 'react';
import { Bot, Code, Zap, MessageSquare, BarChart3, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F3FF]/10 to-[#6C5CE7]/10" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00F3FF] to-[#6C5CE7] bg-clip-text text-transparent">
              Build Smart Bots Without Code
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Launch your AI-powered bot in 5 minutes. No coding required.
            </p>
            <button
                onClick={() => alert('Кнопка нажата!')}
                className="bg-gradient-to-r from-[#00F3FF] to-[#6C5CE7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-[#00F3FF]/20 transition-all duration-300">
              Start Free
            </button>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features, Zero Complexity
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-12 h-12 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#00F3FF]/20 to-[#6C5CE7]/20 border border-[#00F3FF]/50'
                    : 'bg-white/5'
                }`}
              >
                {plan.popular && (
                  <span className="text-[#00F3FF] text-sm font-semibold">MOST POPULAR</span>
                )}
                <h3 className="text-2xl font-bold mt-2">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Zap className="w-5 h-5 text-[#00F3FF] mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#00F3FF] to-[#6C5CE7] text-white hover:shadow-lg hover:shadow-[#00F3FF]/20'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <Bot className="w-8 h-8 text-[#00F3FF] mr-2" />
              <span className="text-xl font-bold">DeepLogic.pro</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Code,
    title: 'No-Code Builder',
    description: 'Create complex bot workflows with our intuitive drag-and-drop interface.',
  },
  {
    icon: MessageSquare,
    title: 'Multi-Platform',
    description: 'Deploy to ChatGPT, Telegram, Discord, and more with a single click.',
  },
  {
    icon: BarChart3,
    title: 'AI Analytics',
    description: "Get deep insights into your bot's performance and user interactions.",
  },
  {
    icon: Boxes,
    title: 'Template Library',
    description: 'Start fast with pre-built templates for common use cases.',
  },
  {
    icon: Zap,
    title: 'Instant Deploy',
    description: 'Go live in minutes with our automated deployment system.',
  },
  {
    icon: Bot,
    title: 'Smart Training',
    description: 'Train your bot with AI to handle complex conversations naturally.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    features: [
      '1 Bot',
      '1,000 messages/month',
      'Basic templates',
      'Community support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 49,
    features: [
      'Unlimited bots',
      '50,000 messages/month',
      'Advanced templates',
      'Priority support',
      'Custom branding',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited everything',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Advanced analytics',
    ],
    popular: false,
  },
];

export default App;