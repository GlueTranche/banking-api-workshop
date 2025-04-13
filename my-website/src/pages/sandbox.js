import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './sandbox.module.css';

export default function SandboxPage() {
  return (
    <Layout
      title="API Sandbox"
      description="Test the Alpentor Bank APIs in an interactive sandbox environment">
      <main>
        <div className={styles.sandboxContainer}>
          <div className={styles.sandboxHeader}>
            <h1>Alpentor Bank API Sandbox</h1>
            <p>Our interactive sandbox environment is coming soon. Here you'll be able to test our APIs directly in your browser.</p>
          </div>
          
          <div className={styles.sandboxContent}>
            <div className={styles.sandboxSection}>
              <h2>Available APIs</h2>
              <ul>
                <li>Account Information Service (AIS)</li>
                <li>Payment Initiation Service (PIS)</li>
                <li>Mortgage API</li>
                <li>OpenWealth Custody Services</li>
                <li>OpenWealth Order Placement</li>
              </ul>
            </div>
            
            <div className={styles.sandboxSection}>
              <h2>Getting Started</h2>
              <p>
                While we finalize our interactive sandbox, you can explore our 
                <Link to="/docs/intro"> API documentation</Link> to learn more about our available endpoints.
              </p>
            </div>
          </div>
          
          <div className={styles.sandboxFooter}>
            <p>
              Check back soon for our fully interactive sandbox environment.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}