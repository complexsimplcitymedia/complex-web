import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

interface SocialStatProps {
  platform: string;
  count: string;
  icon: React.ReactNode;
  subtext?: string;
}

function SocialStat({ platform, count, icon, subtext }: SocialStatProps) {
  return (
    <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
      <div className="text-white/80">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-white">{count}</div>
        <div className="text-sm text-gray-400">{platform}</div>
        {subtext && (
          <div className="text-xs text-gray-500 mt-0.5">{subtext}</div>
        )}
      </div>
    </div>
  );
}

export function SocialStats() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <SocialStat
        platform="Guerra de Los Gallos"
        count="20K+"
        subtext="YouTube Subscribers"
        icon={<Youtube className="w-6 h-6" />}
      />
      <SocialStat
        platform="Complex Simplicity"
        count="Growing"
        subtext="YouTube Channel"
        icon={<Youtube className="w-6 h-6" />}
      />
      <SocialStat
        platform="Instagram Followers"
        count="7K+"
        icon={<Instagram className="w-6 h-6" />}
      />
    </div>
  );
}
