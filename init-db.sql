CREATE DATABASE IF NOT EXISTS citeca;
USE citeca;

CREATE TABLE IF NOT EXISTS researchers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  expertise VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  cover VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS publications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  venue VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  link VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS news (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  published_at DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO researchers (full_name, position, expertise, email) VALUES
('Ana Ribeiro', 'Principal Investigator', 'Artificial Intelligence', 'ana.ribeiro@istec.pt'),
('Miguel Costa', 'Networks & Communications Lead', 'Edge Computing', 'miguel.costa@istec.pt'),
('João Almeida', 'Research Scientist', 'Optimization', 'joao.almeida@istec.pt'),
('Sara Fernandes', 'Digital Transformation', 'Innovation', 'sara.fernandes@istec.pt')
ON DUPLICATE KEY UPDATE full_name = VALUES(full_name);

INSERT INTO projects (title, category, summary, cover) VALUES
('Neural Language Models for Portuguese', 'Artificial Intelligence', 'Domain-specific transformer models trained on scientific corpora.', 'p1'),
('Urban Sensor Mesh, Porto', 'Networks and Communications', 'Low-power communication networks supporting citywide sensing and mobility analysis.', 'p2'),
('Collaborative Research Platforms', 'Software Engineering', 'Reliable digital environments for interdisciplinary research and knowledge sharing.', 'p3'),
('Zero-Trust Data Vaults', 'Data Science', 'Secure data workflows for decentralized identity, privacy and analytics.', 'p4')
ON DUPLICATE KEY UPDATE title = VALUES(title);

INSERT INTO publications (title, year, type) VALUES
('Adaptive Interfaces for Hybrid Research', 2024, 'Journal'),
('Secure Edge Architectures', 2023, 'Conference'),
('Open Science in Practice', 2022, 'Book Chapter')
ON DUPLICATE KEY UPDATE title = VALUES(title);

CREATE TABLE IF NOT EXISTS project_researchers (
  project_id INT NOT NULL,
  researcher_id INT NOT NULL,
  PRIMARY KEY(project_id, researcher_id),
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  FOREIGN KEY (researcher_id) REFERENCES researchers(id) ON DELETE CASCADE
);

INSERT INTO events (title, date, venue) VALUES
('Open Research Day', '2025-10-05', 'Porto'),
('AI for Society Lab', '2025-11-12', 'Lisbon'),
('Innovation Meetup', '2026-01-20', 'Braga')
ON DUPLICATE KEY UPDATE title = VALUES(title);

INSERT IGNORE INTO project_researchers (project_id, researcher_id) VALUES
(1, 1),
(1, 3),
(2, 2),
(3, 4),
(4, 1);
INSERT INTO resources (name, category, link) VALUES
('Research Toolkit', 'Software', 'https://example.org/toolkit'),
('Data Governance Guide', 'Policy', 'https://example.org/governance'),
('Open Access Repository', 'Repository', 'https://example.org/repo')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO news (title, summary, published_at) VALUES
('New collaboration with regional innovation hubs', 'A new partnership expands outreach and applied research opportunities.', '2025-03-20'),
('Open calls for doctoral mobility', 'The institute announces a new doctoral mobility scheme for partner institutions.', '2025-02-15')
ON DUPLICATE KEY UPDATE title = VALUES(title);
