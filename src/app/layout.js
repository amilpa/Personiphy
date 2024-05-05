import { K2D } from "next/font/google";
import AuthProvider from "./(routes)/bigfivepersonalitytest/AuthProvider";
import "./globals.css";

const k2d = K2D({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Personiphy | Home",
  description:
    "Analyze candidate personalities and make informed hiring decisions with Personiphy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${k2d.className}`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
