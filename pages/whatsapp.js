import { useState, useEffect } from 'react';
import styled from 'styled-components';

const WhatsAppRedirect = () => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [isTimeout, setIsTimeout] = useState(false);

    useEffect(() => {
        // Define o timeout de 20 segundos
        const timer = setTimeout(() => {
            if (!name.trim() && !whatsapp.trim()) {
                setIsTimeout(true);
                redirectToWhatsApp();
            }
        }, 20000); // 20 segundos

        return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }, [name, whatsapp]);

    const redirectToWhatsApp = () => {
        const whatsappNumber = '5532998696519'; // Número fixo para redirecionamento
        const message = encodeURIComponent(`Olá, gostaria de mais informações!`);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        window.location.href = whatsappLink; // Redireciona para WhatsApp
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name.trim() && whatsapp.trim()) {
            console.log('Formulário enviado');
            console.log('Nome:', name);
            console.log('WhatsApp:', whatsapp);

            try {
                console.log('Enviando dados para o webhook...');
                const response = await fetch('https://webhook.n8n.gamaro.me/webhook/97cfbdc3-6028-4826-8d2e-df0dbb98a297', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        phone: whatsapp,
                    }),
                });

                if (response.ok) {
                    console.log('Dados enviados com sucesso!');
                    redirectToWhatsApp();
                } else {
                    const errorText = await response.text();
                    console.log('Erro ao enviar dados:', response.status, errorText);
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        } else {
            console.log('Nome e WhatsApp são obrigatórios');
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="tel"
                    placeholder="Digite seu WhatsApp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                />
                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
            {isTimeout && <TimeoutMessage>Você foi redirecionado por inatividade.</TimeoutMessage>}
        </FormContainer>
    );
};

// Styled-components
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f5f1; /* Cor suave para o fundo */
`;

const Form = styled.form`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #25d366; /* Cor verde do WhatsApp */
    border-radius: 5px;
    font-size: 16px;

    &:focus {
        border-color: #007bff; /* Azul do WhatsApp */
        outline: none;
    }
`;

const SubmitButton = styled.button`
    background-color: #25d366; /* Cor verde do WhatsApp */
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #128c7e; /* Tom mais escuro de verde */
    }

    &:active {
        background-color: #075e54; /* Tom mais profundo de verde */
    }
`;

const TimeoutMessage = styled.div`
    margin-top: 20px;
    color: #d9534f;
    font-size: 16px;
    text-align: center;
`;

export default WhatsAppRedirect;
