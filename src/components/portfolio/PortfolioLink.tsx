import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import YouTube from 'react-youtube';
import { videos } from '../../types/video';

interface PortfolioLinkProps {
  href: string;
  title: string;
  description?: string;
  cost?: string;
  technologies?: string[];
  videoId?: string;
  subscribers?: number;
  followers?: number;
}

export function PortfolioLink({ href, title, description, cost, technologies, videoId, subscribers, followers }: PortfolioLinkProps) {
  // ... (rest of the component remains the same)

      <div>
        <h3 className="text-white font-medium group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        )}
        {cost && (
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Cost: {cost}
          </p>
        )}
        {technologies && (
          <ul className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}
        {subscribers && followers && (
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Subscribers: {subscribers}, Followers: {followers}
          </p>
        )}
      </div>
    </a>
  );
}
