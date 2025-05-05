import React from "react";
import Hero from "@/components/hero/Hero";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">How Velum Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-zinc-700 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[rgba(65,105,225,1)] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Create Your Journal</h3>
              <p className="text-gray-300">Start by setting up your personal journal space with customizable templates and themes.</p>
            </div>
            <div className="bg-zinc-700 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[rgba(65,105,225,1)] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Record Your Thoughts</h3>
              <p className="text-gray-300">Write entries about your current experiences, challenges, and aspirations.</p>
            </div>
            <div className="bg-zinc-700 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[rgba(65,105,225,1)] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Connect With Future You</h3>
              <p className="text-gray-300">Set up prompts and questions for your future self to answer, creating a dialogue across time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Sarah K.</h4>
                  <p className="text-gray-400">Journaling for 2 years</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Velum has transformed how I think about personal growth. The conversations with my future self have given me incredible clarity about my goals."</p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Michael T.</h4>
                  <p className="text-gray-400">Journaling for 8 months</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"I've tried many journaling apps, but Velum's approach to connecting with your future self is unique and powerful. It's helped me make better decisions."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-20 bg-[rgba(65,105,225,0.1)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Begin Your Journey Today</h2>
          <p className="text-xl text-gray-300 mb-10">Start a conversation with your future self and unlock new perspectives on your life's journey.</p>
          <button className="bg-[rgba(65,105,225,1)] text-white font-medium py-3 px-8 rounded-md text-lg flex items-center gap-2 mx-auto">
            <span>Create Your Journal</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl text-white font-medium mb-4">Velum</h3>
              <p className="text-gray-400 max-w-xs">Your journal isn't just a record — it's a mirror across time.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center md:text-left">
            <p className="text-gray-500">© {new Date().getFullYear()} Velum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;