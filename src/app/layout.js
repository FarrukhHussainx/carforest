import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import fuel from "/public/fuel-9.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "carForest",
  description: "carforest, a car classified web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <NavBar /> */}
          {children}

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
