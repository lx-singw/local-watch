interface TrendingItemProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
}

export const TrendingItem = ({ title, value, change, trend }: TrendingItemProps) => (
    <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-cyan-900/30">
        <div>
            <h4 className="text-sm font-medium">{title}</h4>
            <p className="text-xs text-gray-400">{value}</p>
        </div>
        <span className={`text-sm ${trend === 'up' ? 'text-red-400' : 'text-green-400'}`}>
            {change}
        </span>
    </div>
);