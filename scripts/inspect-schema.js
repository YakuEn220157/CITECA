const db = require('../db');

(async () => {
  try {
    const researchers = await db.query('SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = "researchers" ORDER BY ORDINAL_POSITION');
    const events = await db.query('SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = "events" ORDER BY ORDINAL_POSITION');
    const projects = await db.query('SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = "projects" ORDER BY ORDINAL_POSITION');
    const eventJoin = await db.query('SHOW TABLES LIKE "event_researchers"');
    const projectJoin = await db.query('SHOW TABLES LIKE "project_researchers"');
    console.log('researchers', JSON.stringify(researchers));
    console.log('events', JSON.stringify(events));
    console.log('projects', JSON.stringify(projects));
    console.log('event_researchers_exists', eventJoin.length);
    console.log('project_researchers_exists', projectJoin.length);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await db.end();
  }
})();
