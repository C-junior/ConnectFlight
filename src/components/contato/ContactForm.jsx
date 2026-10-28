import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    destinoInteresse: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Por favor, informe seu nome completo.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Informe seu número de WhatsApp ou telefone.';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Escreva sua mensagem ou dúvida.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        destinoInteresse: '',
        mensagem: ''
      });
    }, 900);
  };

  return (
    <div className="contact-form-card">
      <h3 className="contact-form-title">Envie-nos uma Mensagem</h3>
      <p className="contact-form-subtitle">
        Preencha o formulário e um de nossos especialistas em viagens entrará em contato em menos de 15 minutos!
      </p>

      {submitted ? (
        <div className="contact-success-banner">
          <CheckCircle2 size={36} className="success-icon" />
          <h4>Mensagem Enviada com Sucesso!</h4>
          <p>
            Obrigado pelo contato! Nossa equipe já recebeu suas preferências e responderá no seu WhatsApp/e-mail muito em breve.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
            className="new-message-btn"
          >
            Enviar outra mensagem
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form-element" noValidate>
          {/* Nome */}
          <div className="form-group">
            <label htmlFor="nome" className="form-label">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: Maria Silva"
              className={`form-input ${errors.nome ? 'has-error' : ''}`}
            />
            {errors.nome && (
              <span className="error-text">
                <AlertCircle size={13} /> {errors.nome}
              </span>
            )}
          </div>

          {/* Email & Telefone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="maria@email.com"
                className={`form-input ${errors.email ? 'has-error' : ''}`}
              />
              {errors.email && (
                <span className="error-text">
                  <AlertCircle size={13} /> {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="telefone" className="form-label">
                WhatsApp / Telefone *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(63) 99999-9999"
                className={`form-input ${errors.telefone ? 'has-error' : ''}`}
              />
              {errors.telefone && (
                <span className="error-text">
                  <AlertCircle size={13} /> {errors.telefone}
                </span>
              )}
            </div>
          </div>

          {/* Destino de Interesse */}
          <div className="form-group">
            <label htmlFor="destinoInteresse" className="form-label">
              Destino de Interesse (opcional)
            </label>
            <input
              type="text"
              id="destinoInteresse"
              name="destinoInteresse"
              value={formData.destinoInteresse}
              onChange={handleChange}
              placeholder="Ex: Fernando de Noronha, Paris, Maldivas..."
              className="form-input"
            />
          </div>

          {/* Mensagem */}
          <div className="form-group">
            <label htmlFor="mensagem" className="form-label">
              Mensagem ou Dúvida *
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Conte-nos datas pretendidas, número de viajantes ou qualquer detalhe especial..."
              className={`form-textarea ${errors.mensagem ? 'has-error' : ''}`}
            />
            {errors.mensagem && (
              <span className="error-text">
                <AlertCircle size={13} /> {errors.mensagem}
              </span>
            )}
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            disabled={loading}
            icon={Send}
            className="submit-form-btn"
          >
            {loading ? 'Enviando...' : 'Solicitar Orçamento Gratuito'}
          </Button>
        </form>
      )}
    </div>
  );
}
