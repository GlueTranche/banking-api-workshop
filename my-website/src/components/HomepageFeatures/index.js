import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Banking Standards',
    description: (
      <>
        Our APIs are built on open banking standards to ensure compatibility 
        and interoperability with your existing systems. Integrate with confidence 
        using industry-standard protocols.
      </>
    ),
  },
  {
    title: 'Swiss Quality and Security',
    description: (
      <>
        Security is our priority. All APIs are built with the robust security standards 
        that Swiss banking is known for, including strong authentication and data protection.
      </>
    ),
  },
  {
    title: 'Interactive Documentation',
    description: (
      <>
        Explore our API capabilities with fully interactive documentation. 
        Test endpoints directly in your browser and see responses in real-time with 
        our built-in sandbox environment.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <div className="text--center padding-bottom--md">
          <div className={styles.featureIcon}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.featureSvg}
            >
              <rect width="50" height="50" rx="10" fill="#da291c" fillOpacity="0.1" />
              <path
                d="M25 15C19.477 15 15 19.477 15 25C15 30.523 19.477 35 25 35C30.523 35 35 30.523 35 25C35 19.477 30.523 15 25 15ZM25 32.5C20.8581 32.5 17.5 29.1419 17.5 25C17.5 20.8581 20.8581 17.5 25 17.5C29.1419 17.5 32.5 20.8581 32.5 25C32.5 29.1419 29.1419 32.5 25 32.5Z"
                fill="#da291c"
              />
              <path
                d="M26.25 20H23.75V26.25H30V23.75H26.25V20Z"
                fill="#da291c"
              />
            </svg>
          </div>
        </div>
        <div className="text--center">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
