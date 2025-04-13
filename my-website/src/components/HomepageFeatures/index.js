import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Banking Standards',
    description: (
      <>
        Our APIs are built on open banking standards to ensure compatibility 
        and interoperability with your existing systems.
      </>
    ),
  },
  {
    title: 'Swiss Quality and Security',
    description: (
      <>
        Security is our priority. All APIs are built with the robust security standards 
        that Swiss banking is known for.
      </>
    ),
  },
  {
    title: 'Interactive Documentation',
    description: (
      <>
        Explore our API capabilities with fully interactive documentation. 
        Test endpoints directly in your browser.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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