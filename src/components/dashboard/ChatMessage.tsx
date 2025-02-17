interface ChatMessageProps {
    user: string;
    message: string;
    time: string;
}

export const ChatMessage = ({ user, message, time }: ChatMessageProps) => (
    <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center">
            <span className="text-xs">{user.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div className="flex-1">
            <div className="flex items-baseline justify-between">
                <h4 className="font-medium text-sm">{user}</h4>
                <span className="text-xs text-gray-500">{time}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{message}</p>
        </div>
    </div>
);