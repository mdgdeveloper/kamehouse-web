import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} KameHouse Minecraft Server. All rights reserved.</p>
      <p>
        <a href="/terms" style={{ color: '#4CAF50', textDecoration: 'none' }}>Terms of Service</a> |{' '}
        <a href="/privacy" style={{ color: '#4CAF50', textDecoration: 'none' }}>Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;