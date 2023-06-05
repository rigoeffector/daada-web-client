/*!

=========================================================
* Daada INC - web - v1.0.0
=========================================================

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <TopNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/path1.png")}
          />
          <div className="content-center" id="home">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  What is DaaDa Inc App? <br />
                </h1>
                <p className="text-white mb-3">
                  DaaDa Inc is a multiservice app with immense potential that
                  utilizes blockchain technology on a Web3 application. DaaDa
                  stands for Decentralized Application for African Diaspora Aid.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    No extra charges
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg" id="services">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Our <br />
                      Services
                    </h1>
                    <p>
                      We are the medium through which African supply-chains and
                      the African diaspora communities in North American and
                      European markets do business in a safe, secure, and
                      transparent manner.
                    </p>
                    <br />
                    <p>
                      The six categories our app will provide these services
                      are:
                    </p>
                    <br />
                  </div>
                </Col>
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-cart text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <p />
                                <p className="card-category">
                                  Grocery & food delivery
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-components text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <p />
                                <p className="card-category">Real Estate</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <p />
                                <p className="card-category">Construction</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-tag text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <p />
                                <p className="card-category">Mining</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-app text-muted" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <p />
                                <p className="card-category">Startups</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-square-pin text-primary" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <p />
                                <p className="card-category">Tourism</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg" id="about-us">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">About Us</h1>
                <h4 className="text-center description">
                  We are Forging ahead with a currency of trust under the banner
                  of one African economy.
                </h4>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-bullet-list-67" />
                      </div>
                      <h4 className="info-title">Vision</h4>
                      <hr className="line-primary" />
                      <p>
                        In alignment with the African Continental Free Trade
                        Area vision, DAADA Inc aims to restore trust between the
                        diaspora community & the motherland under one economic
                        flag.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Mission</h4>
                      <hr className="line-warning" />
                      <p>
                        DAADA Inc remains steadfastly committed to our mission
                        to deliver quality products and services for our
                        merchants and buyers while at the same time promoting
                        entrepreneurship, and intra-regional trade across all
                        sectors of Africa's economy using blockchain technology.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-tie-bow" />
                      </div>
                      <h4 className="info-title">Core Values</h4>
                      <hr className="line-success" />
                      <p>
                        We believe in a business philosophy where every country
                        can mutually benefit in a fair and just way. We operate
                        on the principle of trust by safeguarding our
                        stakeholders and customers' data. It is of utmost
                        importance that we secure our network from hacks, theft,
                        or any other breaches.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
