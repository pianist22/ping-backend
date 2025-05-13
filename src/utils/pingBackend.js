// utils/pingBackend.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function pingBackend() {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "GET",
    });
    if (response.ok) {
      console.log("✅ Backend is alive at:", new Date().toLocaleTimeString());
    } else {
      console.warn("⚠️ Backend responded with error:", response.status);
    }
  } catch (error) {
    console.error("❌ Failed to ping backend:", error.message);
  }
}
