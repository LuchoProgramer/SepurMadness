import './globals.css';
import Footer from '@/components/Footer'; // Asegúrate de que la ruta sea correcta

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Sepurmadness</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}