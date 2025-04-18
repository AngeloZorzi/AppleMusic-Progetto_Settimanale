import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoriteSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

const NewReleases = () => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
      .then((res) => res.json())
      .then((data) => setSongs(data.data))
      .catch((err) => console.error("Errore API:", err));
  }, []);

  const handleToggleFavorite = (song) => {
    dispatch(toggleFavorite({ id: song.id, ...song }));
  };

  const isFavorite = (songId) => favorites.find((song) => song.id === songId);

  return (
    <Container fluid className="new-releases px-3 py-4">
      <h4 className="text-white fw-bold mb-4 d-flex align-items-center justify-content-between">
        Nuove uscite <span className="fs-5">›</span>
      </h4>
      <Row className="gx-3 gy-4">
        {songs.slice(0, 12).map((song) => (
          <Col key={song.id} xs={6} sm={4} md={3} lg={2}>
            <div className="release-card position-relative">
              <img
                src={song.album.cover_medium}
                alt={song.title}
                className="release-img"
              />
              <div className="p-2 release-info">
                <div className="release-title">{song.title}</div>
                <div className="release-artist">{song.artist.name}</div>
              </div>
              <button
                className="favorite-btn position-absolute"
                onClick={() => handleToggleFavorite(song)}
              >
                {isFavorite(song.id) ? (
                  <AiFillHeart className="text-danger" />
                ) : (
                  <AiOutlineHeart className="text-white" />
                )}
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewReleases;
