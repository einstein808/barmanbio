import { useState, useEffect } from 'react';
import styled from 'styled-components';

const WhatsAppRedirect = () => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [isTimeout, setIsTimeout] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!name.trim() && !whatsapp.trim()) {
                setIsTimeout(true);
                redirectToWhatsApp();
            }
        }, 20000);

        return () => clearTimeout(timer);
    }, [name, whatsapp]);

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{2}\s?\d{5}-?\d{4}$/;
        return phoneRegex.test(phone);
    };

    const redirectToWhatsApp = () => {
        const whatsappNumber = '5532998696519';
        const message = encodeURIComponent(`Olá, gostaria de mais informações!`);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        window.location.href = whatsappLink;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name.trim()) {
            setError('Por favor, insira seu nome.');
            return;
        }

        if (!validatePhone(whatsapp)) {
            setError('Número de WhatsApp inválido. Use o formato: XX 9XXXX-XXXX');
            return;
        }

        console.log('Formulário enviado');
        console.log('Nome:', name);
        console.log('WhatsApp:', whatsapp);

        try {
            console.log('Enviando dados para o webhook...');
            const response = await fetch('https://n8n.gamaro.me/webhook-test/cdb1f52d-05e0-41cb-b4f6-3745567b66df', {
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
                    placeholder="Exemplo: 32 98888-8888"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
            {isTimeout && <TimeoutMessage>Você foi redirecionado por inatividade.</TimeoutMessage>}
        </FormContainer>
    );
};

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f5f1;
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
    border: 1px solid #25d366;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const SubmitButton = styled.button`
    background-color: #25d366;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #128c7e;
    }

    &:active {
        background-color: #075e54;
    }
`;

const TimeoutMessage = styled.div`
    margin-top: 20px;
    color: #d9534f;
    font-size: 16px;
    text-align: center;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
`;

export default WhatsAppRedirect;
