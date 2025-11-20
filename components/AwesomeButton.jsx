import React from 'react';

export function AwesomeButton({ 
  text = 'Click me!', 
  variant = 'primary',
  onClick 
}) {
  const styles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
    },
    success: {
      backgroundColor: '#28a745',
      color: 'white',
    }
  };

  return (
    <button 
      style={{
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        ...styles[variant]
      }}
      onClick={onClick}
      onMouseOver={(e) => e.target.style.opacity = '0.9'}
      onMouseOut={(e) => e.target.style.opacity = '1'}
    >
      {text}
    </button>
  );
}