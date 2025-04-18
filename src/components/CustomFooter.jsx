const CustomFooter = () => {
  return (
    <footer className="footer-static">
      <div className="footer-languages">
        <span>Italia</span>
        <span className="divider">|</span>
        <span>English (UK)</span>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright © 2024 <strong>Apple Inc.</strong> Tutti i diritti
          riservati.
        </p>
      </div>
      <div className="footer-links">
        <a href="#">Condizioni dei servizi internet</a>
        <a href="#">Apple Music e privacy</a>
        <a href="#">Avviso sui cookie</a>
        <a href="#">Supporto</a>
        <a href="#">Feedback</a>
      </div>
    </footer>
  );
};

export default CustomFooter;
