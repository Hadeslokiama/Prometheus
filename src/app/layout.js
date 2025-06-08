import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Prometheus | Password Generator",
  description: `The name Prometheus was chosen to represent the Titan’s symbolic gift of fire, a symbol of knowledge, power, and progress to humanity. Just as Prometheus brought fire to spark human progress, this tool provides users with the means to create complex, secure passwords and raise awareness about password breaches. 
  
  The password generator is designed to help users create complex passwords and raise awareness about compromised credentials through breach monitoring. By improving cybersecurity practices, this initiative aims to contribute to a safer digital environment, emphasizing the importance of proactive measures in protecting personal information and advancing overall online safety.`,
  keywords: ["password generator","cybersecurity","breach monitoring","secure passwords","digital safety", "prometheus"],
  author: ["Hadeslokiama", "Colin James Daradar"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
