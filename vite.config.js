import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import path from "node:path";
import { fileURLToPath } from "node:url";

// =============================================================================
// Paths
// =============================================================================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = __dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");

const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

// =============================================================================
// Log utilities
// =============================================================================
function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath) {
  try {
    if (!fs.existsSync(logPath)) return;

    const stats = fs.statSync(logPath);
    if (stats.size <= MAX_LOG_SIZE_BYTES) return;

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");

    let kept = [];
    let size = 0;

    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      const lineSize = Buffer.byteLength(line + "\n");

      if (size + lineSize > TRIM_TARGET_BYTES) break;

      kept.unshift(line);
      size += lineSize;
    }

    fs.writeFileSync(logPath, kept.join("\n"));
  } catch {}
}

function writeLog(source, entries) {
  if (!entries?.length) return;

  ensureLogDir();

  const logPath = path.join(LOG_DIR, `${source}.log`);

  const lines = entries.map(
    (e) => `[${new Date().toISOString()}] ${JSON.stringify(e)}`
  );

  fs.appendFileSync(logPath, lines.join("\n") + "\n");

  trimLogFile(logPath);
}

// =============================================================================
// Debug Collector Plugin
// =============================================================================
function vitePluginManusDebugCollector() {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;

      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";

        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            writeLog("browserConsole", payload.consoleLogs);
            writeLog("networkRequests", payload.networkRequests);
            writeLog("sessionReplay", payload.sessionEvents);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

// =============================================================================
// Vite Config
// =============================================================================
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  root: path.resolve(__dirname, "client"),
  publicDir: path.resolve(__dirname, "client/public"),

  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    host: "127.0.0.1",
    port: 5173,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});