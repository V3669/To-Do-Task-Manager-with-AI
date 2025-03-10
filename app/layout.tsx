import '../styles/globals.css';

export const metadata = {
  title: 'AI To-Do List',
  description: 'AI-enhanced to-do list built with Next.js 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
