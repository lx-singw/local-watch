export const mockUpdates = [
    { id: 1, type: 'alert', title: 'High PM2.5 Levels', location: 'Downtown', value: '156 µg/m³', severity: 'critical' },
    { id: 2, type: 'measurement', user: 'Sarah Connor', station: '42', metrics: { ph: 7.2, turbidity: 1.5, oxygen: 8.5 } },
    { id: 3, type: 'alert', title: 'Temperature Spike', location: 'Industrial Zone', value: '35°C', severity: 'warning' }
] as const;

export const mockTrending = [
    { id: 1, title: 'Air Quality Index', value: '156', change: '+12%', trend: 'up' as const },
    { id: 2, title: 'Water pH Levels', value: '7.2', change: '-0.3', trend: 'down' as const },
    { id: 3, title: 'Noise Pollution', value: '72dB', change: '+5dB', trend: 'up' as const }
];

export const mockChats = [
    { id: 1, user: 'Alex Kim', message: 'Just uploaded new sensor data from the river monitoring station.', time: '2m ago' },
    { id: 2, user: 'Maria Garcia', message: 'Anyone else seeing the spike in NO2 levels downtown?', time: '5m ago' },
    { id: 3, user: 'John Smith', message: 'The new air quality sensors are showing improved accuracy.', time: '15m ago' }
];