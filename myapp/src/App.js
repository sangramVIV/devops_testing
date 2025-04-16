import React from 'react';
import './App.css'; // You can add global styles here if needed

function App() {
  // Basic inline styles (you can move these to App.css for better organization)
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      lineHeight: '1.6',
    },
    header: {
      backgroundColor: '#4CAF50', // A green shade often associated with success/builds
      color: 'white',
      padding: '15px 20px',
      textAlign: 'center',
      borderRadius: '8px 8px 0 0',
    },
    section: {
      margin: '30px 0',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '5px',
    },
    sectionTitle: {
      borderBottom: '2px solid #4CAF50',
      paddingBottom: '5px',
      marginBottom: '15px',
      color: '#333',
    },
    listItem: {
      marginBottom: '10px',
    },
    code: {
      backgroundColor: '#eee',
      padding: '2px 6px',
      borderRadius: '4px',
      fontFamily: 'monospace',
    },
    footer: {
      marginTop: '30px',
      textAlign: 'center',
      fontSize: '0.9em',
      color: '#777',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to  DEVOPS WORLD</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What is DevOps?</h2>
        <p>
          DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Key DevOps Concept</h2>
        <ul>
          <li style={styles.listItem}>
            <strong>Continuous Integration (CI):</strong> Automatically building, testing, and merging code changes frequently.
          </li>
          <li style={styles.listItem}>
            <strong>Continuous Delivery/Deployment (CD):</strong> Automating the release of validated code to a staging or production environment.
          </li>
          <li style={styles.listItem}>
            <strong>Infrastructure as Code (IaC):</strong> Managing and provisioning infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Examples include using <code style={styles.code}>Terraform</code> or <code style={styles.code}>Ansible</code>.
          </li>
          <li style={styles.listItem}>
            <strong>Monitoring and Logging:</strong> Collecting, processing, and analyzing logs and metrics to understand application and infrastructure performance and health.
          </li>
          <li style={styles.listItem}>
            <strong>Collaboration & Communication:</strong> Breaking down silos between development, operations, security, and other teams involved in the software lifecycle.
          </li>
           <li style={styles.listItem}>
            <strong>Automation:</strong> Automating repetitive tasks throughout the software development lifecycle, from building and testing to deployment and infrastructure management.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Common DevOps Tools</h2>
        <p>The DevOps landscape is vast, but some popular tools include:</p>
        <ul>
          <li style={styles.listItem}>Version Control: <code style={styles.code}>Git</code> (GitHub, GitLab, Bitbucket)</li>
          <li style={styles.listItem}>CI/CD git: <code style={styles.code}>Jenkins</code>, <code style={styles.code}>GitLab CI/CD</code>, <code style={styles.code}>GitHub Actions</code>, <code style={styles.code}>CircleCI</code></li>
          <li style={styles.listItem}>Containerization: <code style={styles.code}>Docker</code></li>
          <li style={styles.listItem}>Orchestration: <code style={styles.code}>Kubernetes</code>, <code style={styles.code}>Docker Swarm</code></li>
          <li style={styles.listItem}>Configuration Management: <code style={styles.code}>Ansible</code>, <code style={styles.code}>Chef</code>, <code style={styles.code}>Puppet</code></li>
          <li style={styles.listItem}>Infrastructure as Code: <code style={styles.code}>Terraform</code>, <code style={styles.code}>AWS CloudFormation</code></li>
          <li style={styles.listItem}>Monitoring: <code style={styles.code}>Prometheus</code>, <code style={styles.code}>Grafana</code>, <code style={styles.code}>Datadog</code>, <code style={styles.code}>ELK Stack</code> (Elasticsearch, Logstash, Kibana)</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>Simple DevOps Overview - Built with React</p>
      </footer>
    </div>
  );
}

export default App;
