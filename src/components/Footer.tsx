export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-slate-200 dark:border-slate-800/60 py-8 bg-slate-50/80 dark:bg-slate-950/90 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} Mihretu Hizkel. All rights reserved.</div>
      </div>
    </footer>
  );
}
