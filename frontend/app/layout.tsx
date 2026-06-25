export const metadata = {
  title: "Starknovatech CRM",
  description: "Starknovatech Internal CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}