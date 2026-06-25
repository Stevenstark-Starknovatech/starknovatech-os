import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar />

          <div
            style={{
              flex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}