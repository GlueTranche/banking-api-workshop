import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with APIs
          </Link>
          <Link
            className={clsx("button button--outline button--secondary button--lg", styles.secondaryButton)}
            to="/docs/sandbox">
            Try the API Sandbox
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Alpentor Bank API Portal - Open Finance Solutions for Modern Banking">
      <HomepageHeader />
      <main>
        <div className="container margin-top--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="margin-bottom--lg text--center">
                <h2>Alpentor Bank Open API Platform</h2>
                <p>
                  Welcome to the Alpentor Bank API Portal. Our comprehensive suite of banking APIs 
                  enables you to build innovative financial applications and services that meet the 
                  evolving needs of your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}