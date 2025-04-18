import { Container } from "react-bootstrap";

const NewsSection = () => {
  return (
    <Container fluid className="news-section text-white px-3 py-4">
      <h2 className="fw-bold display-6 mb-4">Novità</h2>

      <div className="news-card-row mb-5">
        <div className="news-card">
          <p className="news-tag">NUOVA STAZIONE RADIO</p>
          <p className="news-text">
            Rilassati, al resto pensiamo noi. <br />
            Ascolta Apple Music Chill
          </p>
          <img src="/assets/1a.png" alt="Chill" className="news-img" />
        </div>

        <div className="news-card">
          <p className="news-tag">NUOVA STAZIONE RADIO</p>
          <p className="news-text">
            Ecco la nuova casa della musica <br />
            latina
          </p>
          <img src="/assets/1b.png" alt="Latina" className="news-img" />
        </div>
      </div>

      <h4 className="fw-bold mb-3">
        Nuovi episodi radio <span className="fs-6">›</span>
      </h4>

      <div className="scroll-row">
        <img src="/assets/2e.png" alt="Ep 1" className="episode-img" />
        <img src="/assets/2f.png" alt="Ep 2" className="episode-img" />
        <img src="/assets/2a.png" alt="Ep 3" className="episode-img" />
        <img src="/assets/2b.png" alt="Ep 4" className="episode-img" />
        <img src="/assets/2c.png" alt="Ep 3" className="episode-img" />
        <img src="/assets/2d.png" alt="Ep 4" className="episode-img" />
        <img src="/assets/2c.png" alt="Ep 3" className="episode-img" />
        <img src="/assets/2d.png" alt="Ep 4" className="episode-img" />
      </div>
    </Container>
  );
};

export default NewsSection;
