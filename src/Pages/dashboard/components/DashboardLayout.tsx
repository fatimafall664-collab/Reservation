import Sidebar from "../../../components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <main className="ml-64 p-8 w-full">
        {children}
      </main>
    </div>
  );
}
