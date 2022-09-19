import React, { useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
//import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";
import { FaBeer } from 'react-icons/fa';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column",
    whiteSpace: "pre-wrap",
    textAlign: "left",
  },
  introImageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  gifContainer: {
      width: "100%",
      borderRadius: 50
  },
  texStyle: {
    fontSize: "20px",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  }
};

function ContactMe(props) {
  // const { header } = props;
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.contactme, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      {/* <Header title={header} /> */}
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row>
                <Col style={styles.introImageContainer}>
                  <img style={styles.gifContainer} src={data?.imageSource} alt="profile" />
                </Col>
                <Col style={styles.introTextContainer}>



                  <h2 style={styles.texStyle}>
                    <SocialIcon
                      key={data.networke}
                      style={styles.iconStyle}
                      url={data.hrefe}
                      network={data.networke}
                      target="_blank"
                      rel="noopener"
                    />
                    :- {data.email}
                  </h2>

                  <h2 style={styles.texStyle}>
                    <SocialIcon
                      key={data.networkl}
                      style={styles.iconStyle}
                      url={data.hrefl}
                      network={data.networkl}
                      target="_blank"
                      rel="noopener"
                    />
                    :- {data.linkedin}
                  </h2>

                  <h2 style={styles.texStyle}>
                    <SocialIcon
                      key={data.networkg}
                      url={data.hrefg}
                      style={styles.iconStyle}
                      network={data.networkg}
                      target="_blank"
                      rel="noopener"
                    />
                    :- {data.github}
                  </h2>
                  <h2 style={styles.texStyle}>  <i class="fa-solid fa-location-dot" ></i> <span> :- </span>{data.location} </h2>

                  <h2 style={styles.texStyle}>  <i class="fa-solid fa-mobile-screen-button"></i> <span> :- </span>{data.mobile}

                  </h2>



                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

ContactMe.propTypes = {
  header: PropTypes.string.isRequired,
};

export default ContactMe;
