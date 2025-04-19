import React, { useState } from 'react';
import { ServiceIcon } from '../ServiceIcon';
import { useAudioContext } from '../../hooks/useAudioContext';
import { AIPreviewOverlay } from '../ai/AIPreviewOverlay';

export function ServiceIcons() {
  const { setIsMuted } = useAudioContext();
  const [showAIOverlay, setShowAIOverlay] = useState(false);

  const handleAIClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMuted(true); // Mute audio when showing AI preview
    setShowAIOverlay(true);
  };

  return (
    <>
      <div className="hidden md:flex items-center ml-8 space-x-8">
        <a href="https://youtu.be/P5puVCgGjqA?si=kVNOmWZxLRGtxU6H" target="_blank" rel="noopener noreferrer">
          <ServiceIcon 
            imageUrl="https://cdn2.unrealengine.com/ue-logotype-2023-vertical-white-1686x2048-bbfded26daa7.png"
            label="Unreal Engine" 
            compact
          />
        </a>
        <a 
          href="https://llama.complexsimplicityai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none"
        >
          <ServiceIcon 
            imageUrl="https://cdn.prod.website-files.com/625447c67b621ab49bb7e3e5/6595a3f16ea6fac5e47d75f3_ollama.png"
            label="AI/LLMs Demo" 
            imageClassName="invert"
            compact
          />
        </a>
        <a 
          href="https:/kustomautowrx.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ServiceIcon 
            imageUrl="https://www.svgrepo.com/show/1699/web-development.svg"
            label="Web Development" 
            imageClassName="invert"
            compact
          />
        </a>
        <a href="https://www.homepage.complexsimplicityai.com/" target="_blank" rel="noopener noreferrer">
          <ServiceIcon 
            imageUrl="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
            label="Docker Desktop"
            imageClassName="invert brightness-0"
            compact
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <ServiceIcon 
            imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            label="GitHub"
            imageClassName="invert"
            compact
            large
          />
        </a>
        <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
          <ServiceIcon 
            imageUrl="https://www.python.org/static/community_logos/python-logo-generic.svg"
            label="Python"
            imageClassName="invert brightness-0"
            compact
          />
        </a>
      </div>

      <AIPreviewOverlay 
        isVisible={showAIOverlay}
        onClose={() => {
          setShowAIOverlay(false);
          setIsMuted(false); // Restore audio when closing preview
        }}
      />
    </>
  );
}
