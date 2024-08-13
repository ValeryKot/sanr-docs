import React from 'react';
import Layout from '@theme/Layout';

export default function MySupportPage() {
  return (
    <Layout>
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          padding: '20px',
          height: '50vh',
          fontSize: '20px',
        }}>
          <h1>My First React page</h1>
          <p>This is an Example of React page</p>
        </div>
    </Layout>
  );
}