import React, { ReactNode } from 'react';

interface NavItemProps {
    icon: ReactNode;
    text: string;
    active?: boolean;
    collapsed?: boolean;
}

export const NavItem = ({ icon, text, active = false, collapsed = false }: NavItemProps) => {
    return (
        <div className="relative group">
            <button className={`w-full px-4 py-3 flex items-center space-x-3 relative
        ${active ? 'text-cyan-300 bg-cyan-900/20' : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-900/10'}`}>
                {icon}
                {!collapsed && <span className="text-sm font-medium">{text}</span>}
                {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400"></div>}
            </button>
            {collapsed && (
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 bg-gray-800 px-2 py-1 
                      rounded text-xs text-cyan-300 whitespace-nowrap opacity-0 group-hover:opacity-100 
                      transition-opacity border border-cyan-900/30">
                    {text}
                </div>
            )}
        </div>
    );
};