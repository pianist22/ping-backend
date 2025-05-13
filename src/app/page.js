'use client';

import { useEffect } from "react";
import { pingBackend } from "../utils/pingBackend";

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      pingBackend();
    }, 5 * 60 * 1000); // every 10 minutes

    // Run immediately on page load
    pingBackend();

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🔄 Backend Keep-Alive Service</h1>
      <p>This app pings your CRM backend every 5 minutes.</p>
    </main>
  );
}
