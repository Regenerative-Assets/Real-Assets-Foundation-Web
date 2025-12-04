import React, { useState } from 'react';

export function TeamMemberCard({
  name = 'Team Member',
  title = 'Position',
  shortBio = 'Short bio goes here',
  fullBio = 'Full bio goes here',
  imageUrl = '',
  linkedIn = '',
  twitter = '',
  email = '',
  displayStyle = 'modal' // 'modal', 'card', 'floating'
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && displayStyle === 'modal') {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    document.body.style.overflow = 'unset';
  };

  const cardStyles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '320px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '320px',
      objectFit: 'cover',
      backgroundColor: '#f0f0f0',
    },
    content: {
      padding: '24px',
    },
    name: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#1a1a1a',
    },
    title: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#666',
      marginBottom: '12px',
    },
    shortBio: {
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#444',
      marginBottom: '16px',
    },
    readMore: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#007bff',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
      animation: 'fadeIn 0.3s ease',
    },
    modal: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      maxWidth: '700px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative',
      animation: 'slideUp 0.3s ease',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s',
      color: '#333',
      zIndex: 10,
    },
    modalImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      backgroundColor: '#f0f0f0',
    },
    modalContent: {
      padding: '40px',
    },
    fullBio: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#444',
      marginBottom: '24px',
      whiteSpace: 'pre-wrap',
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
      marginTop: '24px',
    },
    socialLink: {
      padding: '10px 20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      textDecoration: 'none',
      color: '#333',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.2s',
    },
  };

  const floatingStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },
    floating: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      padding: '32px',
      maxWidth: '500px',
      width: '90%',
      zIndex: 1000,
      animation: 'scaleIn 0.3s ease',
    },
  };

  const expandedCardStyles = {
    expanded: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflow: 'auto',
      zIndex: 1000,
      animation: 'expandCard 0.3s ease',
    },
  };

  const renderModal = () => (
    <div style={modalStyles.overlay} onClick={handleClose}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          style={modalStyles.closeButton}
          onClick={handleClose}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
        >
          ×
        </button>
        {imageUrl && (
          <img src={imageUrl} alt={name} style={modalStyles.modalImage} />
        )}
        <div style={modalStyles.modalContent}>
          <h2 style={cardStyles.name}>{name}</h2>
          <p style={cardStyles.title}>{title}</p>
          <div style={modalStyles.fullBio}>{fullBio}</div>
          {(linkedIn || twitter || email) && (
            <div style={modalStyles.socialLinks}>
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={modalStyles.socialLink}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                >
                  LinkedIn
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={modalStyles.socialLink}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                >
                  Twitter
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  style={modalStyles.socialLink}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                >
                  Email
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderFloatingCard = () => (
    <>
      <div style={floatingStyles.overlay} onClick={handleClose} />
      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
      <div style={floatingStyles.floating}>
        <button
          style={{...modalStyles.closeButton, top: '16px', right: '16px'}}
          onClick={handleClose}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
        >
          ×
        </button>
        <h3 style={{...cardStyles.name, marginBottom: '8px'}}>{name}</h3>
        <p style={{...cardStyles.title, marginBottom: '16px'}}>{title}</p>
        <div style={{...modalStyles.fullBio, marginBottom: '16px'}}>{fullBio}</div>
        {(linkedIn || twitter || email) && (
          <div style={{...modalStyles.socialLinks, marginTop: '16px'}}>
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={modalStyles.socialLink}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              >
                LinkedIn
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={modalStyles.socialLink}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              >
                Twitter
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                style={modalStyles.socialLink}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              >
                Email
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );

  const renderExpandedCard = () => (
    <>
      <div style={floatingStyles.overlay} onClick={handleClose} />
      <style>{`
        @keyframes expandCard {
          from {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div style={{...cardStyles.container, ...expandedCardStyles.expanded}}>
        <button
          style={{...modalStyles.closeButton, top: '16px', right: '16px'}}
          onClick={handleClose}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
        >
          ×
        </button>
        {imageUrl && (
          <img src={imageUrl} alt={name} style={cardStyles.image} />
        )}
        <div style={{...cardStyles.content, padding: '32px'}}>
          <h2 style={cardStyles.name}>{name}</h2>
          <p style={cardStyles.title}>{title}</p>
          <div style={{...modalStyles.fullBio, fontSize: '15px'}}>{fullBio}</div>
          {(linkedIn || twitter || email) && (
            <div style={modalStyles.socialLinks}>
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={modalStyles.socialLink}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                >
                  LinkedIn
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={modalStyles.socialLink}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                >
                  Twitter
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  style={modalStyles.socialLink}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                >
                  Email
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        style={cardStyles.container}
        onClick={handleToggle}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
      >
        {imageUrl && (
          <img src={imageUrl} alt={name} style={cardStyles.image} />
        )}
        <div style={cardStyles.content}>
          <h3 style={cardStyles.name}>{name}</h3>
          <p style={cardStyles.title}>{title}</p>
          <p style={cardStyles.shortBio}>{shortBio}</p>
          <span style={cardStyles.readMore}>Read more →</span>
        </div>
      </div>

      {isExpanded && (
        <>
          {displayStyle === 'modal' && renderModal()}
          {displayStyle === 'floating' && renderFloatingCard()}
          {displayStyle === 'card' && renderExpandedCard()}
        </>
      )}
    </>
  );
}
