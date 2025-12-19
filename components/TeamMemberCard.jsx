import React, { useState, useEffect } from "react";

export function TeamMemberCard(props) {
  const {
    name = "Team Member",
    title = "Position",
    shortBio = "Short bio goes here",
    fullBio,
    imageUrl = "",
    linkedIn = "",
    twitter = "",
    email = "",
    displayStyle = "modal",
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    },
    modal: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      maxWidth: '700px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative',
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
    },
  };

  // Safely manage body scroll
  useEffect(() => {
    if (!isMounted) return;
    document.body.style.overflow = isExpanded && displayStyle === "modal"
      ? "hidden"
      : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded, displayStyle, isMounted]);

  const handleToggle = () => {
    setIsExpanded((v) => !v);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  // Normalize fullBio for Plasmic
  const fullBioHtml =
    typeof fullBio === "string" ? fullBio : "";

  /* ---- styles unchanged (omitted here for brevity) ---- */
  /* Keep all your style objects exactly as-is */

  /* ---------- RENDER ---------- */

  return (
    <>
      <div
        style={cardStyles.container}
        onClick={handleToggle}
      >
        {imageUrl && (
          <img src={imageUrl} alt={name} style={cardStyles.image} />
        )}
        <div style={cardStyles.content}>
          <h3 style={cardStyles.name}>{name}</h3>
          <p style={cardStyles.title}>{title}</p>
          <p style={cardStyles.shortBio}>{shortBio}</p>
          <span style={cardStyles.readMore}>Full Bio →</span>
        </div>
      </div>

      {isExpanded && isMounted && (
        <>
          {displayStyle === "modal" && (
            <div style={modalStyles.overlay} onClick={handleClose}>
                <div
                  style={modalStyles.modal}
                  onClick={(e) => e.stopPropagation()}
                >
                <button
                  style={modalStyles.closeButton}
                  onClick={handleClose}
                >
                  ×
                </button>

                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={name}
                    style={modalStyles.modalImage}
                  />
                )}

                <div style={modalStyles.modalContent}>
                  <h2 style={cardStyles.name}>{name}</h2>
                  <p style={cardStyles.title}>{title}</p>

                  {fullBioHtml && (
                    <div
                      style={modalStyles.fullBio}
                      dangerouslySetInnerHTML={{ __html: fullBioHtml }}
                      suppressHydrationWarning
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
