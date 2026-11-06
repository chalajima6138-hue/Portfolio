import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon, PhoneCallIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copyError, setCopyError] = useState('');

  // Validate form fields
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmissionError('');
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmissionError(result.error || 'Your message could not be sent. Please try again.');
        return;
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmissionError('Unable to reach the contact service. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    setCopyError('');
    try {
      await navigator.clipboard.writeText(personalInfo.socialLinks.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopyError('Clipboard access is unavailable. Select and copy the email address instead.');
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title" id="contact-title">Connect &amp; Collaborate</h2>
          <p className="section-subtitle">
            Open to cybersecurity internships, full-stack collaborations, software development opportunities, and technical networking.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          className="contact-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Channels & Information */}
          <div className="contact-channels" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div
              className="glass-card contact-panel"
              style={{
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                Contact Channels
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Reach out directly via email, phone, Telegram, or connect on LinkedIn and GitHub.
              </p>

              {/* Detail Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>Jimma, Ethiopia</div>
                  </div>
                </div>

                {/* Email with Copy Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-blue-light)'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Email</div>
                      <a
                        href={`mailto:${personalInfo.socialLinks.email}`}
                        style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-cyan)', textDecoration: 'none' }}
                      >
                        {personalInfo.socialLinks.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={copiedEmail ? 'Email address copied' : 'Copy email address'}
                    title="Copy email address"
                    style={{
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: copiedEmail ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                {copyError && <p className="contact-status" role="status">{copyError}</p>}

                {/* Primary Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)'
                    }}
                  >
                    <PhoneCallIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Phone (Primary)</div>
                    <a
                      href={`tel:${personalInfo.socialLinks.phonePrimary}`}
                      style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {personalInfo.socialLinks.phonePrimary}
                    </a>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)'
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Phone (Additional)</div>
                    <a
                      href={`tel:${personalInfo.socialLinks.phoneSecondary}`}
                      style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {personalInfo.socialLinks.phoneSecondary}
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'rgba(0, 136, 204, 0.15)',
                      border: '1px solid rgba(0, 136, 204, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8'
                    }}
                  >
                    <TelegramIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Telegram</div>
                    <a
                      href={personalInfo.socialLinks.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-cyan)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <span>{personalInfo.socialLinks.telegramHandle}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>GitHub</div>
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <span>{personalInfo.socialLinks.githubUsername}</span>
                      <ExternalLink size={12} style={{ color: 'var(--accent-cyan)' }} />
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'rgba(14, 118, 168, 0.15)',
                      border: '1px solid rgba(14, 118, 168, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8'
                    }}
                  >
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LinkedIn</div>
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <span>chala-jima</span>
                      <ExternalLink size={12} style={{ color: 'var(--accent-cyan)' }} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation */}
          <div
            className="glass-card contact-panel"
            style={{
              padding: '2.25rem 2rem',
              border: '1px solid rgba(0, 240, 255, 0.25)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Interested in discussing an internship, technical project, or cybersecurity topic? Send a message below.
            </p>

            {isSubmitted ? (
              <div
                className="contact-success"
                role="status"
                aria-live="polite"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  <CheckCircle2 size={26} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  Thank you for reaching out, Chala will review your message promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.825rem', padding: '0.5rem 1.25rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
              {submissionError && <p className="contact-status" role="alert">{submissionError}</p>}
              <form className="contact-form" onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Name Field */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="e.g. Jane Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.name && (
                    <span id="name-error" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#f87171', marginTop: '0.35rem' }}>
                      <AlertCircle size={12} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Email <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    placeholder="e.g. jane@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: errors.email ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.email && (
                    <span id="email-error" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#f87171', marginTop: '0.35rem' }}>
                      <AlertCircle size={12} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject Field */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Subject <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    minLength={3}
                    maxLength={200}
                    placeholder="e.g. Cybersecurity Internship / Project Discussion"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: errors.subject ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.subject && (
                    <span id="subject-error" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#f87171', marginTop: '0.35rem' }}>
                      <AlertCircle size={12} />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="contact-field">
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={5000}
                    placeholder="Write your message here (min. 10 characters)..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: errors.message ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && (
                    <span id="message-error" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#f87171', marginTop: '0.35rem' }}>
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
              </>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
