import React from 'react';

const GoogleReviewButton = () => {
    // Substitua "YOUR_PLACE_ID" pelo seu Place ID do Google Meu Negócio
    const reviewUrl = `https://g.page/r/CYEiI4om8ooXEBM/review`;

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>
            <div style={{ marginBottom: '10px' }}>
                {/* Estrelas representadas por caracteres Unicode */}
                <span style={{ fontSize: '24px', color: '#FFD700' }}>★ ★ ★ ★ ★</span>
            </div>
            <a 
                href={reviewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#4285F4',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                Avalie-nos no Google
            </a>
        </div>
    );
}

export default GoogleReviewButton;
