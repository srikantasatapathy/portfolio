// components/ImageGallery.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import neww_home from "../public/img/icons/common/neww_screenshot/neww_home.jpg";
import neww_pluse from "../public/img/icons/common/neww_screenshot/neww_pluse.jpg";
import neww_profile from "../public/img/icons/common/neww_screenshot/neww_profile.jpg";
import neww_selfcare from "../public/img/icons/common/neww_screenshot/neww_selfcare.jpg";
import neww_setting from "../public/img/icons/common/neww_screenshot/neww_setting.jpg";
import doc_dashbord from "../public/img/icons/common/doctegrity_screenshot/doc_dashbord.png";
import doc_consultation from "../public/img/icons/common/doctegrity_screenshot/doc_consultation.png";
import doc_doctor from "../public/img/icons/common/doctegrity_screenshot/doc_doctor.png";
import doc_list from "../public/img/icons/common/doctegrity_screenshot/doc_list.png";
import doc_message from "../public/img/icons/common/doctegrity_screenshot/doc_message.png";
import doc_profile from "../public/img/icons/common/doctegrity_screenshot/doc_profile.png";
import whatami_home from "../public/img/icons/common/whatami_screenshot/whatami_home.png";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import { projects } from "../portfolio";

const images = [
  { src: neww_home, tag: "Neww App" },
  { src: neww_pluse, tag: "Neww App" },
  { src: neww_profile, tag: "Neww App" },
  { src: neww_selfcare, tag: "Neww App" },
  { src: neww_setting, tag: "Neww App" },
  { src: doc_dashbord, tag: "Doctegrity" },
  { src: doc_consultation, tag: "Doctegrity" },
  { src: doc_doctor, tag: "Doctegrity" },
  { src: doc_list, tag: "Doctegrity" },
  { src: doc_message, tag: "Doctegrity" },
  { src: doc_profile, tag: "Doctegrity" },
  { src: whatami_home, tag: "What am i?" },
];

const ImageGallery = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const filteredImages = images.filter((image) => image.tag === selectedTag);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  };

  const buttonStyle = (isSelected: any) => ({
    margin: "8px",
    padding: "8px 16px",
    borderRadius: "10px",
    backgroundColor: isSelected ? "#118eef" : "#e5e7eb",
    color: isSelected ? "white" : "#374151",
    border: "none",
    cursor: "pointer",
  });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
  };

  const imageWrapperStyle = {
    padding: "8px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Fade bottom duration={2000}>
      <div style={containerStyle}>
        <div style={buttonContainerStyle}>
          {["all", "Neww App", "Doctegrity", "What am i?"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={buttonStyle(selectedTag === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div style={gridStyle}>
          {selectedTag === "all" &&
            projects.map((project, index) => (
              <Card
                style={{ flex: 1 }}
                onClick={() => setSelectedTag(project?.name)}
                className="shadow-lg--hover  shadow border-0 text-center rounded h-100"
              >
                <CardBody className="">
                  <Image
                    src={project.logo}
                    style={{
                      objectFit: "cover",
                      left: 0,
                      right: 0,
                      top: "7rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "7rem",
                      height: "7rem",
                      borderRadius: "50%",
                    }}
                    className="shadow mb-3"
                    alt="companyLogo"
                  />
                  <CardTitle tag="h4" className="mb-2">
                    {project.name}
                  </CardTitle>
                </CardBody>
              </Card>
            ))}

          {filteredImages.map((image, index) => (
            <div key={index} style={imageWrapperStyle}>
              <Image
                src={image.src}
                width={900}
                alt={`Image ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default ImageGallery;
