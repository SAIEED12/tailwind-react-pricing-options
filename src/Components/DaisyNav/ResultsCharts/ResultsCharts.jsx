import { LineChart, Line, XAxis, YAxis } from 'recharts';
import React from 'react';

const resultData = [
  { "id": 1, "name": "Rahim", "physics": 78, "chemistry": 72, "math": 85 },
  { "id": 2, "name": "Karim", "physics": 65, "chemistry": 70, "math": 60 },
  { "id": 3, "name": "Salma", "physics": 88, "chemistry": 91, "math": 95 },
  { "id": 4, "name": "Nusrat", "physics": 74, "chemistry": 68, "math": 80 },
  { "id": 5, "name": "Imran", "physics": 82, "chemistry": 77, "math": 89 },
  { "id": 6, "name": "Farhan", "physics": 69, "chemistry": 73, "math": 75 },
  { "id": 7, "name": "Ayesha", "physics": 92, "chemistry": 88, "math": 94 },
  { "id": 8, "name": "Tanvir", "physics": 58, "chemistry": 62, "math": 67 },
  { "id": 9, "name": "Mim", "physics": 84, "chemistry": 79, "math": 90 },
  { "id": 10, "name": "Sabbir", "physics": 71, "chemistry": 74, "math": 76 }
]

const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;