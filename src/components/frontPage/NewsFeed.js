import React, { useState, useEffect } from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import { FaNewspaper } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";

const NewsFeed = ({ query }) => {
  const [newsFeed, setNewsFeed] = useState(null);

  const fetchNews = async reqConfig => {
    const resp = await axios(reqConfig);

    setNewsFeed(resp.data.value);
  };

  useEffect(() => {
    fetchNews({
      method: "get",
      url: `${process.env.GATSBY_NEWS_URL}/news/search`,
      headers: {
        "ocp-apim-subscription-key": process.env.GATSBY_NEWS_KEY,
      },
      params: {
        q: query,
      },
    });
  }, [query]);

  return newsFeed === null ? (
    <LoadingWrapper className="d-flex flex-column justify-content-center">
      <Spinner animation="grow" variant="primary" className="m-auto">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </LoadingWrapper>
  ) : (
    <div>
      {newsFeed.map((article, i) => {
        let Thumbnail;

        // fallback logic for article card image
        if (article.image || article.provider[0].image) {
          Thumbnail = () => (
            <Image
              rounded
              src={
                article.image
                  ? article.image.thumbnail.contentUrl
                  : article.provider[0].image.thumbnail.contentUrl
              }
              alt="news thumbnail"
              width="100%"
            />
          );
        } else {
          Thumbnail = () => <NewsIcon />;
        }

        return (
          <Row
            key={i}
            className="bg-white mb-4 mx-0 p-md-3 p-4 align-items-center rounded shadow-sm position-relative"
          >
            <Col md={4} sm={2} xs={12} className="mb-4 mb-sm-0 text-center">
              <Thumbnail />
            </Col>
            <Col className="position-static">
              <p>
                <a
                  href={article.url}
                  className="text-decoration-none text-dark stretched-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.name}
                </a>
              </p>
              <p className="mb-0 text-muted">{article.provider[0].name}</p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

const LoadingWrapper = styled.div`
  height: 50vh;

  div {
    width: 100px;
    height: 100px;
  }
`;

const NewsIcon = styled(FaNewspaper)`
  font-size: 50px;
  color: ${props => props.theme.colors.dark};
`;

export default NewsFeed;
