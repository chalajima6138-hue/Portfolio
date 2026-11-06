'use strict';

/**
 * contactService.js — Contact Message DB Service
 *
 * All database operations for contact_messages table.
 * Uses parameterized queries exclusively — no string interpolation.
 */

const { pool } = require('../config/database');

/**
 * Save a new contact message to the database.
 */
async function saveMessage({ name, email, subject, message, ipAddress, userAgent }) {
  const sql = `
    INSERT INTO contact_messages (name, email, subject, message, ip_address, user_agent)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, name, email, subject, created_at
  `;
  const values = [name, email, subject, message, ipAddress, userAgent];
  const result = await pool.query(sql, values);
  return result.rows[0];
}

/**
 * List messages with pagination and optional status filter.
 */
async function listMessages({ page, limit, status }) {
  const offset = (page - 1) * limit;

  let countSql = 'SELECT COUNT(*) FROM contact_messages';
  let dataSql = `
    SELECT id, name, email, subject, message, status, ip_address, created_at
    FROM contact_messages
  `;
  const values = [];

  if (status) {
    countSql += ' WHERE status = $1';
    dataSql += ' WHERE status = $1';
    values.push(status);
  }

  dataSql += ` ORDER BY created_at DESC LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
  const countValues = [...values];
  values.push(limit, offset);

  const [countResult, dataResult] = await Promise.all([
    pool.query(countSql, countValues),
    pool.query(dataSql, values),
  ]);

  const total = parseInt(countResult.rows[0].count, 10);

  return {
    data: dataResult.rows,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

/**
 * Update a message's status (unread | read | archived).
 */
async function updateMessageStatus(id, status) {
  const sql = `
    UPDATE contact_messages
    SET status = $1
    WHERE id = $2
    RETURNING id, name, email, subject, status, created_at
  `;
  const result = await pool.query(sql, [status, id]);
  return result.rows[0] || null;
}

/**
 * Delete a contact message by ID.
 */
async function deleteMessage(id) {
  const sql = 'DELETE FROM contact_messages WHERE id = $1 RETURNING id';
  const result = await pool.query(sql, [id]);
  return result.rows[0] || null;
}

/**
 * Dashboard statistics for the admin panel.
 */
async function getStats() {
  const sql = `
    SELECT
      COUNT(*)                                            AS total,
      COUNT(*) FILTER (WHERE status = 'unread')           AS unread,
      COUNT(*) FILTER (WHERE status = 'read')             AS read,
      COUNT(*) FILTER (WHERE status = 'archived')         AS archived,
      COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') AS last_7_days
    FROM contact_messages
  `;
  const result = await pool.query(sql);
  const row = result.rows[0];
  return {
    total: parseInt(row.total, 10),
    unread: parseInt(row.unread, 10),
    read: parseInt(row.read, 10),
    archived: parseInt(row.archived, 10),
    last7Days: parseInt(row.last_7_days, 10),
  };
}

module.exports = { saveMessage, listMessages, updateMessageStatus, deleteMessage, getStats };
