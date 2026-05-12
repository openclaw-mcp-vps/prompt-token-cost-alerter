import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Token Cost Alerter — Get alerts before prompt costs explode",
  description: "Monitor AI prompt usage and get alerted before hitting budget limits. Real-time token tracking with email and SMS alerts for AI developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="194d881a-fe83-4a11-b257-7f9113fd88bf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
