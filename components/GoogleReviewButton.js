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
            <a 
    href={reviewUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
        display: 'block',
        padding: '10px 30px',
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
    <div style={{ fontSize: '15px', color: '#FFD700', marginTop: '2px' }}>
        ★ ★ ★ ★ ★
    </div>
</a>
        </div>
    );
}

export default GoogleReviewButton;
