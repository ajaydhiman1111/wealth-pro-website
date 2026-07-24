-- Ekta Avenue Phase 3 — MySQL schema for lead capture
-- Run once on your MySQL server, then use backend/lead.php as the endpoint.

CREATE DATABASE IF NOT EXISTS ekta_avenue
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ekta_avenue;

CREATE TABLE IF NOT EXISTS leads (
  id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name        VARCHAR(120)  NOT NULL,
  phone       VARCHAR(30)   NOT NULL,
  email       VARCHAR(160)  DEFAULT NULL,
  budget      VARCHAR(60)   DEFAULT NULL,
  message     TEXT          DEFAULT NULL,
  source      VARCHAR(120)  DEFAULT 'Website',
  status      ENUM('new','contacted','visited','booked','closed') NOT NULL DEFAULT 'new',
  created_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_phone (phone),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
