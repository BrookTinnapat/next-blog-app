import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "next-themes";
import AuthProvider from "./providers/AuthProvider";

// Import the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Blog App",
  description: "NextJS blog app",
};

// RootLayout component wraps the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
