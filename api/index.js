// The build resolves the backend's TypeScript aliases before Vercel bundles it.
import { createApp } from "../apps/backend/dist/app.js";

export default createApp();
