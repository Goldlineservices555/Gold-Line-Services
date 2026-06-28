import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gold Line Services | HVAC & Appliance Repair Chicago",
  description: "HVAC repair, furnace repair, AC repair, heat pump service, and appliance repair in Chicago and nearby suburbs.",
  keywords: ["HVAC repair Chicago", "Furnace repair Chicago", "AC repair Chicago", "Appliance repair Chicago"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
