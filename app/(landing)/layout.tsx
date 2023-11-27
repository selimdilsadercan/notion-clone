import Navbar from "./_components/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full dark:bg-[rgb(31,31,31)]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}

export default Layout;
