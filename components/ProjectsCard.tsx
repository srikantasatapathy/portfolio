import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";
import { Icon } from "@iconify/react";

const ProjectsCard = ({ name, desc, github, link,androidLink,iOSLink,webLink }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {androidLink ? (
                <Button
                  className="btn-icon"
                  href={androidLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="Android"
                >
                  <span className="btn-inner--icon">
                  <Icon icon="flat-color-icons:android-os" data-inline="false" width={20}></Icon>
                  </span>
                </Button>
              ) : null}
              {iOSLink ? (
                <Button
                  className="btn-icon"
                  href={iOSLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="iOS"
                >
                  <span className="btn-inner--icon">
                  <Icon icon="cib:app-store-ios" style={{color: '#118eef'}} data-inline="false" width={20} height={20}></Icon>
                  </span>
                </Button>
              ) : null}
              {webLink ? (
                <Button
                  className="btn-icon"
                  href={webLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="Web"
                >
                  <span className="btn-inner--icon">
                  <Icon icon="mdi:web" style={{color: '#118eef'}} data-inline="false" width={20}></Icon>
                  </span>
                </Button>
              ) : null}
              
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
