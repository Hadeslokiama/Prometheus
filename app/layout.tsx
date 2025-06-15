import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const ttHoves = localFont({
  src: [
    {
      path: '../public/fonts/TT Hoves Pro Trial Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TT Hoves Pro Trial Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
})

const basisGrotesque = localFont({
  src: [
    {
      path: '../public/fonts/BasisGrotesqueArabicPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/BasisGrotesqueArabicPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Prometheus | Password Generator",
  description: `The name Prometheus was chosen to represent the Titan’s symbolic gift of fire, a symbol of knowledge, power, and progress to humanity. Just as Prometheus brought fire to spark human progress, this tool provides users with the means to create complex, secure passwords and raise awareness about password breaches. 
  
  The password generator is designed to help users create complex passwords and raise awareness about compromised credentials through breach monitoring. By improving cybersecurity practices, this initiative aims to contribute to a safer digital environment, emphasizing the importance of proactive measures in protecting personal information and advancing overall online safety.`,
  keywords: ["password generator","cybersecurity","breach monitoring","secure passwords","digital safety", "prometheus"],
  authors: [{ name: 'Hadeslokiama'},{ name: 'Colin James Daradar' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ttHoves.variable} ${basisGrotesque.variable}`}>
      <body className={`${ttHoves.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
