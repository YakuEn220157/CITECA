require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./db");
const researchersRouter = require("./routes/researchers");
const projectsRouter = require("./routes/projects");
const publicationsRouter = require("./routes/publications");
const eventsRouter = require("./routes/events");
const resourcesRouter = require("./routes/resources");
const newsRouter = require("./routes/news");
const contactRouter = require("./routes/contact");

const app = express();
const port = process.env.PORT || 3000;
const staticRoot = path.join(__dirname, "CITECA-MAIN");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticRoot));

app.get("/api/health", async (req, res) => {
  try {
    await db.query("SELECT 1");
    res.json({ ok: true, database: "connected" });
  } catch (error) {
    res.status(200).json({ ok: true, database: "degraded", message: "MySQL is not available yet; fallback content is active.", error: error.message });
  }
});

app.get("/api/dashboard", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT COUNT(*) AS researchers_count FROM researchers");
    const [projects] = await db.query("SELECT COUNT(*) AS projects_count FROM projects");
    const [publications] = await db.query("SELECT COUNT(*) AS publications_count FROM publications");
    const [events] = await db.query("SELECT COUNT(*) AS events_count FROM events");

    res.json({
      researchers: rows[0].researchers_count,
      projects: projects[0].projects_count,
      publications: publications[0].publications_count,
      events: events[0].events_count,
    });
  } catch (error) {
    res.json({ researchers: 40, projects: 25, publications: 180, events: 60 });
  }
});

app.use("/api/researchers", researchersRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/publications", publicationsRouter);
app.use("/api/events", eventsRouter);
app.use("/api/resources", resourcesRouter);
app.use("/api/news", newsRouter);
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(staticRoot, "index.html"));
});

app.use((req, res) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(staticRoot, "index.html"));
    return;
  }

  res.status(404).json({ ok: false, message: "API route not found" });
});

app.listen(port, () => {
  console.log(`CITECA server running on http://localhost:${port}`);
});
