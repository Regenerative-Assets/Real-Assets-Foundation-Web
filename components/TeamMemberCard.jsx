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
  const isBrowser = typeof window !== "undefined";

  // Safely manage body scroll
  useEffect(() => {
    if (!isBrowser) return;
    document.body.style.overflow = isExpanded && displayStyle === "modal"
      ? "hidden"
      : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded, displayStyle, isBrowser]);

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

      {isExpanded && isBrowser && (
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
