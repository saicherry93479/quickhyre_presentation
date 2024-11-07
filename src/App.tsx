//@ts-nocheck
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CollgeImage from './assets/Admin.jpeg'
import StudentImage from './assets/Student.jpeg'
import {
  BrainCircuit,
  GraduationCap,
  Building,
  Users,
  Rocket,
  ChevronRight,
  Briefcase,
  Award,
  LineChart,
  Zap,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Logo from "./assets/Logo";

// StarField Component
const StarField = () => {
  const stars = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

// FloatingAnimation Component
const FloatingAnimation = ({ children }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
  >
    {children}
  </motion.div>
);

// Feature Card Component
const FeatureCard = ({ Icon, title, description }) => (
  <Card className="bg-gray-900/50 border-blue-500/20 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm">
    <CardContent className="p-6">
      <Icon className="h-12 w-12 text-blue-400 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

// Main Landing Page Component
const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Matching",
      description:
        "Connect students with their ideal jobs using advanced algorithms",
    },
    {
      icon: LineChart,
      title: "Cosmic Analytics",
      description:
        "Gain insights into placement trends and student performance",
    },
    {
      icon: Users,
      title: "Galactic Alumni Network",
      description:
        "Foster connections between current students and successful graduates",
    },
    {
      icon: Building,
      title: "Interstellar Partnerships",
      description: "Build and manage relationships with top companies",
    },
    {
      icon: Briefcase,
      title: "Virtual Career Nebulas",
      description: "Host engaging online recruitment events",
    },
    {
      icon: Zap,
      title: "Light-Speed Updates",
      description: "Real-time notifications on job postings and applications",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      <StarField />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FloatingAnimation>
            <Logo></Logo>
          </FloatingAnimation>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors"
          >
            JOIN NOW
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          Illuminate the Path to Success
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          Navigate the cosmos of career opportunities with our AI-powered
          platform. Connect brilliant minds with stellar employers and watch
          your placement rates soar!
        </motion.p>
        <motion.a
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          Embark on Your Journey
        </motion.a>

        <div className="mt-20 relative">
          <FloatingAnimation>
            <img
              src={CollgeImage}
              alt="QuickHyre Platform Interface"
              className="rounded-lg shadow-2xl border border-blue-500/20 w-full h-auto"
            />
          </FloatingAnimation>
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Star className="w-full h-full text-yellow-400" />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 -right-10 w-20 h-20"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Rocket className="w-full h-full text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Celestial Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard Icon={feature.icon} {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="colleges" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-gray-800/50 p-1 rounded-full">
              <TabsTrigger
                value="colleges"
                className="w-1/2 text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 rounded-full transition-all duration-300"
              >
                For Colleges
              </TabsTrigger>
              <TabsTrigger
                value="students"
                className="w-1/2 text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 rounded-full transition-all duration-300"
              >
                For Students
              </TabsTrigger>
            </TabsList>

            <TabsContent value="colleges" className="focus:outline-none">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Navigate the Recruitment Cosmos
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" />
                      <span>
                        Mission Control: Centralized dashboard for all placement
                        activities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" />
                      <span>
                        Warp-Speed Communication: Automated scheduling and
                        messaging tools
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" />
                      <span>
                        Stellar Insights: Real-time analytics on student
                        performance and placement trends
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3 opacity-20 blur-lg"></div>
                  <img
                    src={CollgeImage}
                    alt="College dashboard"
                    className="relative z-10 rounded-lg shadow-xl border border-blue-500/20 w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="students" className="focus:outline-none">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transform -rotate-3 opacity-20 blur-lg"></div>
                  <img
                    src={StudentImage}
                    alt="Student interface"
                    className="relative z-10 rounded-lg shadow-xl border border-blue-500/20 w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Launch Your Career into the Stratosphere
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-purple-400 mr-2 flex-shrink-0" />
                      <span>
                        Cosmic Matchmaking: Personalized job recommendations
                        based on your unique constellation of skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-purple-400 mr-2 flex-shrink-0" />
                      <span>
                        Quantum Resume Builder: AI-powered tools to create
                        out-of-this-world resumes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-purple-400 mr-2 flex-shrink-0" />
                      <span>
                        Intergalactic Opportunities: Access to exclusive job
                        openings and internships across the universe
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Ready to Explore New Frontiers in Recruitment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join the constellation of institutions using QuickHyre AI to chart a
            new course in campus placements.
          </p>
          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Cosmic Demo
          </motion.a>
        </div>
      </section>

      <footer className="relative z-10 bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Mission Control
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Our Constellation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Cosmic Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Intergalactic Policies
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} QuickHyre AI. All rights
              reserved across the galaxy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
