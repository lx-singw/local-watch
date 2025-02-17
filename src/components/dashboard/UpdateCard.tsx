import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface Metrics {
    ph: number;
    turbidity: number;
    oxygen: number;
}

interface Update {
    id: number;
    type: 'alert' | 'measurement';
    title?: string;
    location?: string;
    value?: string;
    severity?: 'critical' | 'warning' | 'info';
    user?: string;
    station?: string;
    metrics?: Metrics;
}

interface UpdateCardProps {
    update: Update;
}

export const UpdateCard = ({ update }: UpdateCardProps) => {
    if (update.type === 'alert') {
        const severityColors = {
            critical: 'border-red-700/30 bg-red-900/20 text-red-400',
            warning: 'border-yellow-700/30 bg-yellow-900/20 text-yellow-400',
            info: 'border-blue-700/30 bg-blue-900/20 text-blue-400'
        };

        return (
            <div className={`p-4 rounded-lg border ${severityColors[update.severity!]}`}>
                <div className="flex items-start space-x-3">
                    <AlertTriangle className="mt-1" />
                    <div>
                        <h3 className="font-medium">{update.title}</h3>
                        <p className="text-sm mt-1 text-gray-300">{update.location}</p>
                        <p className="text-sm font-medium mt-2">{update.value}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 rounded-lg border border-cyan-900/30 p-4">
            <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center">
                    <span className="text-sm">{update.user?.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1">
                    <h3 className="font-medium">{update.user}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Reported new measurements from Station #{update.station}
                    </p>
                    <div className="mt-3 bg-gray-900/50 rounded p-2 text-cyan-300 text-sm grid grid-cols-3 gap-2">
                        <div>pH: {update.metrics?.ph}</div>
                        <div>Turbidity: {update.metrics?.turbidity}</div>
                        <div>Oxygen: {update.metrics?.oxygen}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};