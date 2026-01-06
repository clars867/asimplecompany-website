export default function SoulOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          paddingTop: "5rem",
          paddingBottom: "6rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}