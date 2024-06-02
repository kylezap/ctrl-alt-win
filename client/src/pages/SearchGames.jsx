import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
// import { SAVE_BOOK } from '../utils/mutations';
import { SEARCH_GAMES } from "../utils/queries";
import Auth from "../utils/auth";
// import { set } from '../../../server/models/Game';

const SearchGames = () => {
  //State Hooks
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //Handlers
  const [searchGames, { loading, error, data }] = useLazyQuery(SEARCH_GAMES);
  // const game = data?.searchGames || [];

  
  useEffect(() => {
    if (data) {
      setSearchedGames(data.searchGames);
      
    }
  }, [data]);

  useEffect(() => {
    console.log(searchedGames);
  }, [searchedGames]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }
    try {
      await searchGames({ variables: { name: searchInput } });
  
      setSearchInput(""); 
    } catch (err) {
      console.error(err);
    } 
    
  };

  // const handleSaveGame = async (gameId) => {

  //Output
  return (
    <>
      <h1>Search for Games!</h1>
      <div className="text-light bg-dark p-4 col-10 d-flex align-items-center">
        <Container className="align-items-center">
          
          <Form onSubmit={handleFormSubmit}>
            <Row className="flex-row">
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a game"
                  className="form-control-lg"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container style={{color: "white"}}>
        <h2 className="pt-5">
          {searchedGames.length
            ? `Viewing ${searchedGames.length} results:`
            : "Search for a game to begin"}
        </h2>
        <Row>
          {searchedGames.map((game) => {
            return (
              <Col md="4" key={game.name}>
                <Card border="dark">
                  {game.background_image ? (
                    <Card.Img
                      src={game.background_image}
                      alt={`The cover for ${game.name}`}
                      variant="top"
                      style={{ width: "100%", height: "15vw", } }
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <p className="small">Rating: {game.rating}</p>
                    <Card.Text>{game.summary}</Card.Text>
                    {Auth.loggedIn() && (
                    <Button
                      disabled={savedGameIds?.some((savedGameId) => savedGameId === game.gameId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveGame(game.gameId)}>
                      {savedGameIds?.some((savedGameId) => savedGameId === game.gameId)
                        ? 'This game has already been saved!'
                        : 'Save this Game!'}
                    </Button>
                  )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchGames;
