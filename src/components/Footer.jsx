function Footer() {
  return (
    <footer className="mt-32 py-6 text-center
      bg-white/5 backdrop-blur-xl border-t border-white/10">
      <p className="text-sm text-white/60">
        © {new Date().getFullYear()} Adarsh A S. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
