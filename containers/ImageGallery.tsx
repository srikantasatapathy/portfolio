// components/ImageGallery.js
"use client";
import React, { useState ,CSSProperties} from "react";
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
import whatami_result from "../public/img/icons/common/whatami_screenshot/whatami_result.png";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import { projects } from "../portfolio";
import Modal from "react-modal";

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
  { src: whatami_result, tag: "What am i?" },
];

const ImageGallery = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const filteredImages = images.filter((image) => image.tag === selectedTag);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openModal = (index: any) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % filteredImages.length
    );
  };
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "80%",
      maxHeight: "80%",
    },
  };

  const modalImageStyle:CSSProperties = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  };

  const leftNavButtonStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    left: "10px",
  };

  const rightNavButtonStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    right: "10px",
  };

  const closeButtonStyle: CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

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
    fontSize: "12px",
  });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
  };

  const imageWrapperStyle = {
    padding: "8px",
  };

  const imageStyle = (isHovered: boolean): CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: isHovered ? '0 8px 12px rgba(0.1, 0.1, 0.1, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
  });

  return (
    <Fade bottom duration={2000}>
      <div style={containerStyle}>
        <div style={buttonContainerStyle}>
          {["All", "Neww App", "Doctegrity", "What am i?"].map((tag) => (
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
          {selectedTag === "All" &&
            projects.map((project, index) => (
              <Card
                style={{ flex: 1, cursor: "pointer" }}
                onClick={() => setSelectedTag(project?.name)}
                className="shadow-lg--hover  shadow border-0 text-center rounded h-100"
                key={index}
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
            <div
              key={index}
              style={imageWrapperStyle}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                width={900}
                alt={`Image ${index + 1}`}
                style={imageStyle(hoveredIndex === index)}
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Image Modal"
      >
        <button onClick={closeModal} style={closeButtonStyle}>
          ×
        </button>
        <button onClick={goToPrevious} style={leftNavButtonStyle}>
          {"<"}
        </button>
        <Image
          src={filteredImages[currentImageIndex]?.src}
          alt={`Image ${currentImageIndex + 1}`}
          style={modalImageStyle}
        />
        <button onClick={goToNext} style={rightNavButtonStyle}>
          {">"}
        </button>
      </Modal>
    </Fade>
  );
};

export default ImageGallery;
