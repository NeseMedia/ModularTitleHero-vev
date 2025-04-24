import React, { useEffect, useState } from 'react';
import { registerVevComponent, Image } from '@vev/react';
import styles from './ModularTitleHero.module.css';

const Cloud = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.7,23.9c0-7.6,6.2-13.8,13.8-13.8c6.1,0,11.2,3.9,13.1,9.4c2.4-2.2,5.5-3.6,9-3.6c7.1,0,12.8,5.7,12.8,12.8 c0,0.7-0.1,1.4-0.2,2.1c0.6-0.1,1.2-0.2,1.8-0.2c4.6,0,8.4,3.8,8.4,8.4c0,4.6-3.8,8.4-8.4,8.4c-0.6,0-1.1-0.1-1.7-0.2 c-2.2,3.5-6.1,5.8-10.5,5.8c-3.1,0-5.9-1.1-8-3c-2.1,1.8-4.7,2.9-7.6,2.9c-3.2,0-6-1.3-8.1-3.3c-2.3,2-5.3,3.3-8.7,3.3 c-7.2,0-13-5.8-13-13c0-3.1,1.1-5.9,2.9-8.1C43.3,29.1,40.7,24.8,40.7,23.9z" fill="rgba(255,255,255,0.9)"/>
  </svg>
);

const BottomWave = ({ color = '#ffffff' }) => (
  <div className={styles.waveContainer}>
    <svg className={styles.bottomWave} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,64 C360,128 720,128 1080,64 C1296,32 1440,32 1440,32 V120 H0 V64 Z" fill={color} />
    </svg>
  </div>
);

const ModularTitleHero = ({
  titlePart1 = '',
  titlePart2 = '',
  titlePart3 = '',
  ingress = '',
  heroImage = null,
  backgroundTypeNumber = 0, // 0=gradient, 1=image
  showClouds = true,
  showBottomWave = true,
  bottomWaveColor = '#ffffff',
  gradientStartColor = '#2563eb',
  gradientEndColor = '#7e22ce',
  animationDelay = 0.5,
  backgroundColor = '#f8f9fa',
  textColor = '#333333',
  accentColor = '#ffcc00', // Changed to gold for better visibility on gradient
  paddingTop = 100,
  paddingBottom = 100,
  overlayOpacity = 0.7,
}) => {
  const [titleVisible, setTitleVisible] = useState({
    part1: false,
    part2: false,
    part3: false,
    ingress: false
  });

  // Clouds are generated once when component mounts
  const [clouds] = useState(() => generateRandomClouds());
  
  useEffect(() => {
    // Reset animation state when animationDelay changes
    setTitleVisible({
      part1: false,
      part2: false,
      part3: false,
      ingress: false
    });
    
    // Convert animationDelay to milliseconds to ensure it works correctly
    const delayInMs = animationDelay * 1000;
    
    // Trigger the animations with staggered delays
    const timer1 = setTimeout(() => setTitleVisible(prev => ({ ...prev, part1: true })), delayInMs);
    const timer2 = setTimeout(() => setTitleVisible(prev => ({ ...prev, part2: true })), delayInMs + 800);
    const timer3 = setTimeout(() => setTitleVisible(prev => ({ ...prev, part3: true })), delayInMs + 1600);
    const timer4 = setTimeout(() => setTitleVisible(prev => ({ ...prev, ingress: true })), delayInMs + 2800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [animationDelay]);

  // Get background type from numeric value
  const getBackgroundType = () => {
    return backgroundTypeNumber === 1 ? 'image' : 'gradient';
  };

  const backgroundType = getBackgroundType();

  // Konverterer hex til rgba for overlay med tilpasset opacity
  const getRGBA = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Konverterer linjeskift til <br /> elementer
  const formatWithLineBreaks = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index, array) => 
      index === array.length - 1 ? line : (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    );
  };

  // Generate random cloud positions and animations - moved outside component rendering flow
  function generateRandomClouds() {
    const cloudArray = [];
    const cloudCount = 8; // Increased cloud count for better coverage
    
    for (let i = 0; i < cloudCount; i++) {
      // Calculate initial positions
      const size = Math.floor(Math.random() * 100) + 100; // 100-200px
      const top = Math.floor(Math.random() * 70) + 5; // 5-75% from top
      
      // Position some clouds already in view, others off-screen to the right
      let initialPosition;
      if (i < 4) { // First half of clouds are already visible on screen
        // Position these clouds across the visible area (10% to 80% from left)
        initialPosition = {
          left: `${Math.floor(Math.random() * 70) + 10}%`,
        };
      } else { // Second half start off-screen right
        initialPosition = {
          right: `${Math.floor(Math.random() * 20) - 25}%`, // Start off-screen to the right (-25% to -5%)
        };
      }
      
      // Varied speeds for more natural movement
      const speed = Math.floor(Math.random() * 60) + 80; // Animation duration 80-140s (faster)
      
      // Much shorter delays so clouds appear almost immediately
      const delay = Math.floor(Math.random() * 3); // 0-3s delay only
      
      // Varied opacity for depth effect
      const opacity = (Math.random() * 0.4) + 0.6; // 0.6-1.0 opacity
      
      cloudArray.push(
        <Cloud 
          key={`cloud-${i}`}
          className={styles.cloud}
          style={{
            width: `${size}px`,
            top: `${top}%`,
            ...initialPosition,
            opacity: opacity,
            animationDuration: `${speed}s`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    
    return cloudArray;
  }

  const renderTitlePart = (text, className, style) => {
    if (!text) return null;
    return (
      <span 
        className={className}
        style={style}
      >
        {text}
      </span>
    );
  };

  return (
    <section 
      className={`${styles.heroContainer} ${showBottomWave ? styles.hasBottomWave : ''}`}
      style={{ 
        backgroundColor: backgroundType === 'image' ? backgroundColor : 'transparent',
        background: backgroundType === 'gradient' ? `linear-gradient(135deg, ${gradientStartColor}, ${gradientEndColor})` : '',
        paddingTop,
        paddingBottom: showBottomWave ? `${paddingBottom + 60}px` : paddingBottom, // Extra padding when wave is shown
      }}
    >
      {/* Clouds background for gradient mode */}
      {backgroundType === 'gradient' && showClouds && (
        <div className={styles.cloudsContainer}>
          {clouds}
        </div>
      )}
      
      {/* Image background */}
      {backgroundType === 'image' && heroImage && (
        <div className={styles.imageContainer}>
          <Image 
            src={heroImage} 
            className={styles.heroImage}
          />
          <div 
            className={styles.imageOverlay} 
            style={{ backgroundColor: getRGBA(backgroundColor, overlayOpacity) }} 
          />
        </div>
      )}
      
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            {renderTitlePart(
              titlePart1,
              `${styles.titlePart} ${titleVisible.part1 ? styles.visible : ''} ${styles.fromLeft}`,
              { color: textColor }
            )}
            {renderTitlePart(
              titlePart2,
              `${styles.titlePart} ${titleVisible.part2 ? styles.visible : ''} ${styles.fromRight}`,
              { color: accentColor }
            )}
            {renderTitlePart(
              titlePart3,
              `${styles.titlePart} ${titleVisible.part3 ? styles.visible : ''} ${styles.fromBottom}`,
              { color: textColor }
            )}
          </h1>
          {ingress && (
            <p 
              className={`${styles.ingress} ${titleVisible.ingress ? styles.visible : ''}`}
              style={{ color: textColor }}
            >
              {formatWithLineBreaks(ingress)}
            </p>
          )}
        </div>
      </div>
      
      {/* Bottom wave */}
      {showBottomWave && <BottomWave color={bottomWaveColor} />}
    </section>
  );
};

registerVevComponent(ModularTitleHero, {
  name: 'Lars - Modular Title Hero',
  type: 'section',
  props: [
    // Content group
    {
      name: 'contentGroup',
      type: 'group',
      title: 'Innhold',
    },
    {
      name: 'titlePart1',
      type: 'string',
      title: 'Tittel del 1',
      initialValue: '',
      group: 'contentGroup',
    },
    {
      name: 'titlePart2',
      type: 'string',
      title: 'Tittel del 2',
      initialValue: '',
      group: 'contentGroup',
    },
    {
      name: 'titlePart3',
      type: 'string',
      title: 'Tittel del 3',
      initialValue: '',
      group: 'contentGroup',
    },
    {
      name: 'ingress',
      type: 'string',
      title: 'Ingress',
      options: {
        multiline: true
      },
      initialValue: '',
      group: 'contentGroup',
    },
    
    // Background group
    {
      name: 'backgroundGroup',
      type: 'group',
      title: 'Bakgrunn',
    },
    {
      name: 'backgroundTypeNumber',
      type: 'number',
      title: 'Bakgrunnstype (0=gradient med skyer, 1=bilde)',
      initialValue: 0,
      options: {
        min: 0,
        max: 1,
        step: 1
      },
      group: 'backgroundGroup',
    },
    {
      name: 'showClouds',
      type: 'boolean',
      title: 'Vis skyer (kun ved gradient)',
      initialValue: true,
      group: 'backgroundGroup',
    },
    {
      name: 'gradientStartColor',
      type: 'string',
      title: 'Gradient startfarge',
      initialValue: '#2563eb',
      group: 'backgroundGroup',
    },
    {
      name: 'gradientEndColor',
      type: 'string',
      title: 'Gradient sluttfarge',
      initialValue: '#7e22ce',
      group: 'backgroundGroup',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero-bilde (kun ved bildebakgrunn)',
      group: 'backgroundGroup',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Bakgrunnsfarge (ved bilde)',
      initialValue: '#f8f9fa',
      group: 'backgroundGroup',
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      title: 'Opacity på overlay (0-1)',
      initialValue: 0.7,
      options: {
        min: 0,
        max: 1,
        step: 0.1
      },
      group: 'backgroundGroup',
    },
    
    // Bottom Wave group - Made this a separate group for visibility
    {
      name: 'waveGroup',
      type: 'group',
      title: 'Bølge nederst',
    },
    {
      name: 'showBottomWave',
      type: 'boolean',
      title: 'Vis bølge nederst på seksjonen',
      initialValue: true,
      group: 'waveGroup',
    },
    {
      name: 'bottomWaveColor',
      type: 'string',
      title: 'Farge på bølge nederst',
      initialValue: '#ffffff',
      group: 'waveGroup',
    },
    
    // Styling group
    {
      name: 'stylingGroup',
      type: 'group',
      title: 'Styling',
    },
    {
      name: 'animationDelay',
      type: 'number',
      title: 'Forsinkelse for animasjon (sekunder)',
      initialValue: 0.5,
      group: 'stylingGroup',
    },
    {
      name: 'textColor',
      type: 'string',
      title: 'Tekstfarge',
      initialValue: '#ffffff',
      group: 'stylingGroup',
    },
    {
      name: 'accentColor',
      type: 'string',
      title: 'Aksentfarge (for tittel del 2)',
      initialValue: '#ffcc00',
      group: 'stylingGroup',
    },
    {
      name: 'paddingTop',
      type: 'number',
      title: 'Padding Topp (px)',
      initialValue: 100,
      group: 'stylingGroup',
    },
    {
      name: 'paddingBottom',
      type: 'number',
      title: 'Padding Bunn (px)',
      initialValue: 100,
      group: 'stylingGroup',
    }
  ],
  editableCSS: [
    {
      selector: styles.heroContainer,
      properties: ['background']
    },
    {
      selector: styles.contentWrapper,
      properties: ['max-width', 'padding']
    },
    {
      selector: styles.titleContainer,
      properties: ['padding', 'margin']
    },
    {
      selector: styles.title,
      properties: ['font-family', 'font-size', 'line-height', 'margin', 'display', 'font-weight', 'font-style']
    },
    {
      selector: styles.titlePart,
      properties: ['font-family', 'font-weight', 'margin-bottom', 'font-style']
    },
    {
      selector: styles.ingress,
      properties: ['font-family', 'font-size', 'line-height', 'margin', 'max-width', 'font-weight', 'font-style']
    },
    {
      selector: styles.imageContainer,
      properties: ['max-height', 'border-radius', 'overflow']
    },
    {
      selector: styles.bottomWave,
      properties: ['height']
    }
  ]
});

export default ModularTitleHero;