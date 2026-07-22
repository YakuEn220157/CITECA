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

const PORT = process.env.PORT || 3000;

const staticRoot = path.join(__dirname, "CITECA-MAIN");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(staticRoot));

/*
=========================================
DATABASE HEALTH CHECK
=========================================
*/
app.get("/api/health", async (req, res) => {
  try {

    const rows = await db.query("SELECT 1 AS test");

    res.json({
      ok: true,
      database: "connected",
      result: rows
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      database: "disconnected",
      message: error.message
    });

  }
});

/*
=========================================
DASHBOARD COUNTS
=========================================
*/
app.get("/api/dashboard", async (req, res) => {

  try {

    const researchers =
      await db.query(
        "SELECT COUNT(*) AS count FROM researchers"
      );

    const projects =
      await db.query(
        "SELECT COUNT(*) AS count FROM projects"
      );

    const publications =
      await db.query(
        "SELECT COUNT(*) AS count FROM publications"
      );

    const events =
      await db.query(
        "SELECT COUNT(*) AS count FROM events"
      );

    res.json({
      researchers: researchers[0].count,
      projects: projects[0].count,
      publications: publications[0].count,
      events: events[0].count
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      message: error.message
    });

  }

});

/*
=========================================
API ROUTES
=========================================
*/
app.use("/api/researchers", researchersRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/publications", publicationsRouter);
app.use("/api/events", eventsRouter);
app.use("/api/resources", resourcesRouter);
app.use("/api/news", newsRouter);
app.use("/api/contact", contactRouter);

/*
=========================================
HOME PAGE
=========================================
*/
app.get("/", (req, res) => {
  res.sendFile(
    path.join(
      staticRoot,
      "index.html"
    )
  );
});

/*
=========================================
SPA FALLBACK
=========================================
*/
app.use((req, res) => {

  if (!req.path.startsWith("/api")) {

    return res.sendFile(
      path.join(
        staticRoot,
        "index.html"
      )
    );

  }

  res.status(404).json({
    ok: false,
    message: "API route not found"
  });

});

/*
=========================================
START SERVER
=========================================
*/
app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

});
