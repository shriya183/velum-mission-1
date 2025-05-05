
import React from "react";
import Hero from "@/components/hero/Hero";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />

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
