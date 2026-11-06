-- =============================================================
-- Migration 002: Contact Messages Table
-- =============================================================
-- Stores messages submitted via the portfolio contact form.
-- ip_address and user_agent are stored for spam/abuse detection.
-- Status tracks read/unread/archived state for the admin dashboard.
-- =============================================================

CREATE TABLE IF NOT EXISTS contact_messages (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  subject     VARCHAR(200) NOT NULL,
  message     TEXT         NOT NULL,
  ip_address  INET,
  user_agent  TEXT,
  status      VARCHAR(20)  NOT NULL DEFAULT 'unread'
                CHECK (status IN ('unread', 'read', 'archived')),
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Indexes for common admin queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_messages_status
  ON contact_messages (status);

CREATE INDEX IF NOT EXISTS idx_contact_messages_email
  ON contact_messages (email);
