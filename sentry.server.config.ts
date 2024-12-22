// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://601d24e35e7d657ea1ef0922f7a820ad@o4508509659529216.ingest.us.sentry.io/4508509676109824",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
