import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  contact: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  contact,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#000000',
    color: '#ffffff',
  }}>
    <div style={{
      borderBottom: '3px solid #00ff88',
      paddingBottom: '20px',
      marginBottom: '30px',
    }}>
      <h1 style={{
        margin: '0',
        fontSize: '28px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
      }}>
        Nouveau Message 🔥
      </h1>
    </div>

    <div style={{ marginBottom: '25px' }}>
      <p style={{
        margin: '0 0 5px 0',
        fontSize: '12px',
        textTransform: 'uppercase',
        color: '#999999',
        letterSpacing: '1px',
      }}>
        De
      </p>
      <p style={{
        margin: '0',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#00ff88',
      }}>
        {name}
      </p>
    </div>

    <div style={{ marginBottom: '25px' }}>
      <p style={{
        margin: '0 0 5px 0',
        fontSize: '12px',
        textTransform: 'uppercase',
        color: '#999999',
        letterSpacing: '1px',
      }}>
        Contact
      </p>
      <p style={{
        margin: '0',
        fontSize: '16px',
        color: '#ffffff',
      }}>
        {contact}
      </p>
    </div>

    <div style={{ marginBottom: '25px' }}>
      <p style={{
        margin: '0 0 10px 0',
        fontSize: '12px',
        textTransform: 'uppercase',
        color: '#999999',
        letterSpacing: '1px',
      }}>
        Message
      </p>
      <div style={{
        backgroundColor: '#111111',
        padding: '20px',
        borderRadius: '8px',
        borderLeft: '4px solid #a855f7',
      }}>
        <p style={{
          margin: '0',
          fontSize: '16px',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
        }}>
          {message}
        </p>
      </div>
    </div>

    <div style={{
      marginTop: '40px',
      paddingTop: '20px',
      borderTop: '1px solid #333333',
      fontSize: '12px',
      color: '#666666',
      textAlign: 'center',
    }}>
      <p style={{ margin: '0' }}>
        Portfolio Mada4Bang • {new Date().toLocaleDateString('fr-FR')}
      </p>
    </div>
  </div>
);
