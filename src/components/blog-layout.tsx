import Navbar from "@/components/navbar";

export function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 sm:py-24">
      {children}
      <Navbar />
    </div>
  );
}
