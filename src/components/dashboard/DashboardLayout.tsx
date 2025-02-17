import React, { useState, useEffect } from 'react';
import { Bell, Menu, X, MessageCircle, BarChart2, Map, Activity, Users, Settings } from 'lucide-react';
import { NavItem } from './NavItem';
import { UpdateCard } from './UpdateCard';
import { ChatMessage } from './ChatMessage';
import { TrendingItem } from './TrendingItem';
import { mockUpdates, mockTrending, mockChats } from '@/lib/mockData';

export const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [notifications, setNotifications] = useState(3);
    const [sensorFrame, setSensorFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSensorFrame((prev) => (prev + 1) % 4);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-full bg-gray-900 text-gray-100 flex overflow-hidden">
            {/* Left Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 border-r border-cyan-900/30 
                      transition-all duration-300 flex flex-col relative`}>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-50"></div>

                {/* Profile Section */}
                <div className="p-4 border-b border-cyan-900/30 relative">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-600 
                          flex items-center justify-center border border-cyan-400/30 shadow-lg">
                            <span className="text-lg font-bold">JD</span>
                        </div>
                        {isSidebarOpen && (
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-cyan-100 truncate">John Doe</h3>
                                <p className="text-xs text-cyan-400 truncate">Environmental Analyst</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4">
                    <NavItem icon={<BarChart2 size={20} />} text="Dashboard" active collapsed={!isSidebarOpen} />
                    <NavItem icon={<Map size={20} />} text="Map View" collapsed={!isSidebarOpen} />
                    <NavItem icon={<Activity size={20} />} text="Analytics" collapsed={!isSidebarOpen} />
                    <NavItem icon={<Users size={20} />} text="Community" collapsed={!isSidebarOpen} />
                    <NavItem icon={<Settings size={20} />} text="Settings" collapsed={!isSidebarOpen} />
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-cyan-900/30">
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="w-full flex items-center justify-center p-2 text-cyan-400 hover:text-cyan-300 
                     bg-cyan-900/20 rounded transition-colors"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-gray-800 border-b border-cyan-900/30 flex items-center px-6 justify-between">
                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        Environmental Monitor
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-cyan-400 hover:text-cyan-300 relative">
                            <Bell size={20} />
                            {notifications > 0 && (
                                <>
                                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></span>
                                </>
                            )}
                        </button>
                    </div>
                </header>

                {/* Main Grid */}
                <div className="flex-1 grid grid-cols-12 gap-4 p-4 overflow-hidden">
                    {/* Main Feed */}
                    <div className="col-span-8 space-y-4 overflow-auto">
                        {mockUpdates.map(update => (
                            <UpdateCard key={update.id} update={update} />
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-span-4 space-y-4 overflow-auto">
                        {/* Community Chat */}
                        <div className="bg-gray-800 rounded-lg border border-cyan-900/30 p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-cyan-300">Community Chat</h2>
                                <MessageCircle size={20} className="text-cyan-400" />
                            </div>
                            <div className="space-y-4">
                                {mockChats.map(chat => (
                                    <ChatMessage key={chat.id} {...chat} />
                                ))}
                            </div>
                        </div>

                        {/* Trending Issues */}
                        <div className="bg-gray-800 rounded-lg border border-cyan-900/30 p-4">
                            <h2 className="text-lg font-bold text-cyan-300 mb-4">Trending Issues</h2>
                            <div className="space-y-3">
                                {mockTrending.map(trend => (
                                    <TrendingItem key={trend.id} {...trend} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};