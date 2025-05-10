
import React from "react";
import { BeamsBackground } from "@/components/ui/beams-background";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <BeamsBackground intensity="medium" className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Card className="bg-black/20 backdrop-blur-lg border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Chat History</CardTitle>
                <CardDescription className="text-gray-400">
                  Your previous conversations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5">
                  New Chat
                </Button>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  No conversation history yet
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Chat Area */}
          <div className="lg:col-span-9">
            <Card className="bg-black/20 backdrop-blur-lg border border-white/10 min-h-[70vh] flex flex-col">
              <CardHeader>
                <CardTitle className="text-white">Chat with Future You</CardTitle>
                <CardDescription className="text-gray-400">
                  Start a conversation with your future self
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-white mb-2">Welcome to Velum</h3>
                    <p className="max-w-md">
                      Begin your journey of self-reflection by asking your future self a question.
                    </p>
                  </div>
                </div>
                
                {/* Input Area */}
                <div className="mt-auto pt-4">
                  <div className="relative">
                    <Input 
                      placeholder="Type your message here..." 
                      className="pr-12 bg-black/30 border-white/10 text-white" 
                    />
                    <Button 
                      size="icon" 
                      className="absolute right-1 top-1 bg-[rgba(65,105,225,1)] hover:bg-[rgba(65,105,225,0.8)]"
                    >
                      <SendHorizontal className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
};

export default Dashboard;
