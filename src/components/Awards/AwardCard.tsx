import { Trophy, Calendar } from 'lucide-react';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export function AwardCard({ title, organization, date, description }: AwardCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Trophy className="w-6 h-6 text-blue-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{organization}</p>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}