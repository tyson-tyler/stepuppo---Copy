import { Inter } from "next/font/google";
import "@/styles/global.css";
import Cursor from "@/components/cursor";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import Chat from "@/components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mypager",
  description: "Generated Ai based and Human based prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Provider>
          <div className="main"></div>
          <main className="app">
            <Nav />

            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
