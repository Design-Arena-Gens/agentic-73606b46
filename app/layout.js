import './globals.css';

export const metadata = {
  title: 'नयी राहें: एक हिंदी कहानी',
  description: 'इतिहास, विज्ञान और सपनों से बुनी एक प्रेरक हिंदी कहानी।'
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
