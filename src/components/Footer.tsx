export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ opacity: 0.75 }}>
        © {new Date().getFullYear()} V1 Website
      </div>

      <div className="footerLinks">
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
