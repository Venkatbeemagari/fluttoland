
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, HeadphonesIcon, GraduationCap, Users, Globe, Cpu, Menu, ArrowRightIcon, Sparkles } from "lucide-react";
import Typical from 'react-typical';
import typed from 'typed.js';
import Typed from 'typed.js';
const Index = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Hyper-Aware AI - Flutto', 'It Just Knows.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-18 sm:h-14 flex items-center justify-between border-b border-white/10 backdrop-blur-md bg-black/50 fixed w-full z-50">
        <div className="flex items-center justify-center">
          <Cpu className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-accent-purple animate-pulse" />
          <span className="font-bold text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-pink">Flutto Ai</span>
        </div>

        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 ">
          <a className="text-sm font-medium hover:text-accent-purple transition-colors duration-200 pt-3" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:text-accent-purple transition-colors duration-200 pt-3" href="#benefits">
            Benefits
          </a>
          <a className="text-sm font-medium hover:text-accent-purple transition-colors duration-200 pt-3" href="#contact">
            Contact
          </a>
          <Button  onClick={()=>window.location.href="https://code.venkys.io/login"}  variant="outline" size="sm" className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white">
            Login
          </Button>
        </nav>

        <Button
          variant="outline"
          size="sm"
          className="md:hidden flex items-center justify-center p-2 border-accent-purple text-accent-purple"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </header>

      {showMobileMenu && (
        <nav className="md:hidden fixed right-0 top-16 sm:top-14 w-full sm:w-64 bg-black/95 backdrop-blur-md shadow-lg border-l border-b border-accent-purple/20 z-50">
          <div className="p-4 space-y-3 flex flex-col items-center sm:items-end">
            <a className="text-sm font-medium hover:text-accent-purple transition-colors duration-200" href="#features">
              Features
            </a>
            <a className="text-sm font-medium hover:text-accent-purple transition-colors duration-200" href="#benefits">
              Benefits
            </a>
            <a className="text-sm font-medium hover:text-accent-purple transition-colors duration-200" href="#contact">
              Contact
            </a>
            <Button onClick={()=>window.location.href="https://code.venkys.io/login"} variant="outline" size="sm" className="w-full border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white">
              Login
            </Button>
          </div>
        </nav>
      )}

  
<main className="flex-1 pt-16  ">
        <section className="w-full min-h-screen py-32 sm:py-32 md:py-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-purple/20 via-black to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>   <div className="container px-4 sm:px-6 mx-auto relative ">
            <div className="flex flex-col items-center space-y-8 text-center ">
              <Sparkles className=" h-12 w-12 text-accent-purple animate-pulse mb-4" />
              <div className="space-y-4 max-w-[800px] ">
                <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-purple to-accent-pink animate-fade-in">
                  {/* <Typical
                    steps={['Hyper-Aware AI - Flutto', 2000, '- It Just Knows.', 2000]}
                    loop={Infinity}
                    wrapper="span"
                  /> */}
                  
                  <span ref={typedRef}  className="text-6xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-purple to-accent-pink animate-fade-in-up"></span>
             
                </h1>
                  <p className="py-8 mx-auto max-w-[700px] text-lg sm:text-xl text-gray-400 animate-fade-in-up">
                  Experience the future of business operations with our AI-powered platform for documentation, support, and training.
                </p>
              </div>
              <div className="space-x-4 animate-fade-in-up delay-200">
                <Button onClick={()=>window.location.href="https://code.venkys.io/initialquiz"}
                  size="lg" 
                  className="bg-accent-purple hover:bg-accent-purple/90 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="container mx-auto relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-pink">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
              <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/5 border-accent-purple/20">
                <CardHeader>
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <BookOpen className="h-8 w-8 mb-2 text-accent-purple animate-pulse" />
                  </div>
                  <CardTitle className="text-white">Continually Evolving Models</CardTitle>
                  <CardDescription className="text-gray-400">Adapts and improves in real-time to stay ahead of the curve.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <p>• Real-time model optimization</p>
                  <p>• Contextual understanding</p>
                  <p>• Proactive anticipation of needs</p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/5 border-accent-pink/20">
                <CardHeader>
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <HeadphonesIcon className="h-8 w-8 mb-2 text-accent-pink animate-pulse" />
                  </div>
                  <CardTitle className="text-white">Autonomous ERP Agent</CardTitle>
                  <CardDescription className="text-gray-400">Manages enterprise processes with minimal intervention.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <p>• Seamless process management</p>
                  <p>• Minimal human intervention</p>
                  <p>• Enhances operational efficiency</p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/5 border-accent-teal/20">
                <CardHeader>
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap className="h-8 w-8 mb-2 text-accent-teal animate-pulse" />
                  </div>
                  <CardTitle className="text-white">Learning Support</CardTitle>
                  <CardDescription className="text-gray-400">Offers dynamic, personalized tutoring and guidance.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <p>• Personalized learning experiences</p>
                  <p>• Dynamic support for students</p>
                  <p>• Customized training solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-20 bg-gradient-to-b from-black to-accent-purple/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-pink">
              Why Choose Flutto AI
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              <Card className="group hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-accent-purple/20 hover:border-accent-purple/40">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-accent-purple/10 group-hover:bg-accent-purple/20 transition-colors">
                      <Sparkles className="h-6 w-6 text-accent-purple animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-accent-purple transition-colors">Continually Evolving Technology</CardTitle>
                      <CardDescription className="text-gray-400">
                        Adapts and improves in real-time, utilizing awareness to provide precise responses and anticipate needs.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-purple"></div>
                      <span>Real-time model optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-pink"></div>
                      <span>Proactive need anticipation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-teal"></div>
                      <span>Advanced context understanding</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-accent-pink/20 hover:border-accent-pink/40">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-accent-pink/10 group-hover:bg-accent-pink/20 transition-colors">
                      <Globe className="h-6 w-6 text-accent-pink animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-accent-pink transition-colors">Global Reach & Support</CardTitle>
                      <CardDescription className="text-gray-400">
                        Offers worldwide accessibility, multi-language support, and cultural adaptation to ensure seamless global operations.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-purple"></div>
                      <span>Multi-language support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-pink"></div>
                      <span>24/7 global accessibility</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-teal"></div>
                      <span>Cultural adaptiveness</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-accent-teal/20 hover:border-accent-teal/40">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-accent-teal/10 group-hover:bg-accent-teal/20 transition-colors">
                      <Cpu className="h-6 w-6 text-accent-teal animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-accent-teal transition-colors">Smart Integration & Automation</CardTitle>
                      <CardDescription className="text-gray-400">
                        Streamlines workflows and enhances productivity through advanced AI-driven process automation and system connectivity.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-purple"></div>
                      <span>API-first integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-pink"></div>
                      <span>Customizable workflows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-accent-teal"></div>
                      <span>Scalable solutions for any size enterprise</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-pink">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400">
                  Join the AI revolution and elevate your business operations to new heights.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex flex-col space-y-4">
                  <Input
                    className="bg-white/5 border-accent-purple/20 text-white placeholder:text-gray-400"
                    placeholder="Your name"
                    type="text"
                  />
                  <Input
                    className="bg-white/5 border-accent-purple/20 text-white placeholder:text-gray-400"
                    placeholder="Your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full bg-accent-purple hover:bg-accent-purple/90">
                    Request Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 w-full border-t border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 align-middle">
            <p className="text-sm text-gray-400">
              © 2024 Flutto AI. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <a className="text-sm text-gray-400 hover:text-accent-purple transition-colors" href="#">
                Terms of Service
              </a>
              <a className="text-sm text-gray-400 hover:text-accent-purple transition-colors" href="#">
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

