import React, { useEffect, useState } from 'react';
import { registerVevComponent, Image } from '@vev/react';
import styles from './ModularTitleHero.module.css';

const ModularTitleHero = ({
  titlePart1 = 'Denne tjenesten',
  titlePart2 = 'revolusjonerer',
  titlePart3 = 'reisehverdagen for bedrifter',
  ingress = 'For innkjøpsorganisasjonen Agrikjøp er god kontroll på forretningsreiser et viktig ansvar. Med nærmere 60.000 ansatte i medlemsbedrifter som Tine, Nortura og Felleskjøpet, blir det mange reiser å holde styr på.',
  heroImage = null,
  animationDelay = 0.5,
  backgroundColor = '#f8f9fa',
  textColor = '#333333',
  accentColor = '#2563eb',
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

  useEffect(() => {
    // Trigger the animations with staggered delays
    const timer1 = setTimeout(() => setTitleVisible(prev => ({ ...prev, part1: true })), animationDelay * 1000);
    const timer2 = setTimeout(() => setTitleVisible(prev => ({ ...prev, part2: true })), (animationDelay + 0.8) * 1000);
    const timer3 = setTimeout(() => setTitleVisible(prev => ({ ...prev, part3: true })), (animationDelay + 1.6) * 1000);
    const timer4 = setTimeout(() => setTitleVisible(prev => ({ ...prev, ingress: true })), (animationDelay + 2.8) * 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [animationDelay]);

  // Konverterer hex til rgba for overlay med tilpasset opacity
  const getRGBA = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Konverterer linjeskift til <br /> elementer
  const formatWithLineBreaks = (text) => {
    return text.split('\n').map((line, index, array) => 
      index === array.length - 1 ? line : (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    );
  };

  return (
    <section 
      className={styles.heroContainer} 
      style={{ 
        backgroundColor,
        paddingTop,
        paddingBottom,
      }}
    >
      {heroImage && (
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
            <span 
              className={`${styles.titlePart} ${titleVisible.part1 ? styles.visible : ''} ${styles.fromLeft}`}
              style={{ color: textColor }}
            >
              {titlePart1}
            </span>
            <span 
              className={`${styles.titlePart} ${titleVisible.part2 ? styles.visible : ''} ${styles.fromRight}`}
              style={{ color: accentColor }}
            >
              {titlePart2}
            </span>
            <span 
              className={`${styles.titlePart} ${titleVisible.part3 ? styles.visible : ''} ${styles.fromBottom}`}
              style={{ color: textColor }}
            >
              {titlePart3}
            </span>
          </h1>
          <p 
            className={`${styles.ingress} ${titleVisible.ingress ? styles.visible : ''}`}
            style={{ color: textColor }}
          >
            {formatWithLineBreaks(ingress)}
          </p>
        </div>
      </div>
    </section>
  );
};

registerVevComponent(ModularTitleHero, {
  name: 'Lars - Modular Title Hero',
  type: 'section',
  props: [
    {
      name: 'titlePart1',
      type: 'string',
      title: 'Tittel del 1',
      initialValue: 'Denne tjenesten'
    },
    {
      name: 'titlePart2',
      type: 'string',
      title: 'Tittel del 2',
      initialValue: 'revolusjonerer'
    },
    {
      name: 'titlePart3',
      type: 'string',
      title: 'Tittel del 3',
      initialValue: 'reisehverdagen for bedrifter'
    },
    {
      name: 'ingress',
      type: 'string',
      title: 'Ingress',
      options: {
        multiline: true
      },
      initialValue: 'For innkjøpsorganisasjonen Agrikjøp er god kontroll på forretningsreiser et viktig ansvar. Med nærmere 60.000 ansatte i medlemsbedrifter som Tine, Nortura og Felleskjøpet, blir det mange reiser å holde styr på.'
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero-bilde'
    },
    {
      name: 'animationDelay',
      type: 'number',
      title: 'Forsinkelse for animasjon (sekunder)',
      initialValue: 0.5
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Bakgrunnsfarge',
      initialValue: '#f8f9fa'
    },
    {
      name: 'textColor',
      type: 'string',
      title: 'Tekstfarge',
      initialValue: '#333333'
    },
    {
      name: 'accentColor',
      type: 'string',
      title: 'Aksentfarge (for tittel del 2)',
      initialValue: '#2563eb'
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
      }
    },
    {
      name: 'paddingTop',
      type: 'number',
      title: 'Padding Topp (px)',
      initialValue: 100
    },
    {
      name: 'paddingBottom',
      type: 'number',
      title: 'Padding Bunn (px)',
      initialValue: 100
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
    }
  ]
});

export default ModularTitleHero;