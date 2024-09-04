import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WhatsAppRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        const whatsappUrl = 'https://wa.me/5532998696519';
        setTimeout(() => {
            router.push(whatsappUrl);
        }, 2000); // Tempo de espera antes do redirecionamento
    }, [router]);

    return (
        <div style={containerStyle}>
            <div style={spinnerStyle}></div>
            <p style={messageStyle}>Redirecionando para o WhatsApp...</p>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#25D366',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
};

const messageStyle = {
    marginTop: '20px',
    fontSize: '1.5rem',
    textAlign: 'center',
};

const spinnerStyle = {
    border: '8px solid rgba(255, 255, 255, 0.3)',
    borderTop: '8px solid white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
};

// Adicione a animação ao estilo global
if (typeof document !== 'undefined') {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default WhatsAppRedirect;
