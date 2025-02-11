import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WhatsAppRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        // Substitua pelo seu link do WhatsApp
        const whatsappUrl = 'https://wa.me/5532998696519';
        router.push(whatsappUrl);
    }, [router]);

    return (
        <div>
            <p>Redirecionando para o WhatsApp...</p>
        </div>
    );
};

export default WhatsAppRedirect;
