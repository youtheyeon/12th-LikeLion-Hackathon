import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Partition } from "../../assets/icons/partition.svg";

const StoryMaker = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [textList, setTextList] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [currentFontSize, setCurrentFontSize] = useState(18);
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const colors = ["black", "red", "yellow", "green", "cyan"];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (e) => {
    setCurrentText(e.target.value);
  };

  const addText = () => {
    if (currentText.trim() !== "") {
      setTextList([
        ...textList,
        {
          text: currentText,
          x: 50,
          y: 50,
          color: selectedColor,
          fontSize: currentFontSize,
        },
      ]);
    }
    setCurrentText("");
    setIsModalOpen(false);
  };

  const drawImageWithText = () => {
    if (image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;
      img.onload = () => {
        const canvasWidth = 359;
        const canvasHeight = 479;

        let imgWidth = img.width;
        let imgHeight = img.height;

        if (imgWidth > canvasWidth || imgHeight > canvasHeight) {
          const widthRatio = canvasWidth / imgWidth;
          const heightRatio = canvasHeight / imgHeight;
          const bestRatio = Math.min(widthRatio, heightRatio);

          imgWidth *= bestRatio;
          imgHeight *= bestRatio;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

        textList.forEach(({ text, x, y, color, fontSize }) => {
          ctx.font = `${fontSize}px Arial`;
          ctx.fillStyle = color;
          ctx.fillText(text, x, y);
        });
      };
    }
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedTextIndex = textList.findIndex(
      ({ text, x: textX, y: textY, fontSize }) => {
        const ctx = canvas.getContext("2d");
        ctx.font = `${fontSize}px Arial`;
        const textWidth = ctx.measureText(text).width;
        const textHeight = fontSize;

        const textCenterX = textX + textWidth / 2;
        const textCenterY = textY - textHeight / 2;

        return (
          x >= textCenterX - textWidth / 2 &&
          x <= textCenterX + textWidth / 2 &&
          y >= textCenterY - textHeight / 2 &&
          y <= textCenterY + textHeight / 2
        );
      }
    );

    if (clickedTextIndex !== -1) {
      const textItem = textList[clickedTextIndex];
      const ctx = canvas.getContext("2d");
      ctx.font = `${textItem.fontSize}px Arial`;
      const textWidth = ctx.measureText(textItem.text).width;
      const textHeight = textItem.fontSize;

      setDragOffset({
        x: x - (textItem.x + textWidth / 2),
        y: y - (textItem.y - textHeight / 2),
      });

      setSelectedTextIndex(clickedTextIndex);
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && selectedTextIndex !== null) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newTextList = textList.map((item, index) => {
        if (index === selectedTextIndex) {
          return {
            ...item,
            x: x - dragOffset.x,
            y: y - dragOffset.y,
          };
        }
        return item;
      });
      setTextList(newTextList);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setSelectedTextIndex(null);
  };

  useEffect(() => {
    if (image) {
      drawImageWithText();
    }
  }, [image, textList]);

  const handleSave = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click();

    navigate("/main");
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const openModal = () => {
    if (image) {
      setIsModalOpen(true);
    } else {
      alert("이미지를 업로드해주세요.");
    }
  };

  const closeModal = () => {
    addText();
    setIsModalOpen(false);
  };

  return (
    <>
      <Hr />
      <ColorPalette>
        <button onClick={openModal}>T</button>
        <Partition />
        <div>
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </ColorPalette>

      <Canvas>
        {image ? (
          <canvas
            ref={canvasRef}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              width: "359px",
              height: "479px",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        ) : (
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        )}
      </Canvas>

      <ShareBtn onClick={handleSave} image={image}>
        공유하기
      </ShareBtn>

      {isModalOpen && (
        <TextInput onClick={closeModal} selectedColor={selectedColor}>
          <input
            type="text"
            value={currentText}
            onClick={(e) => e.stopPropagation()}
            onChange={handleTextChange}
            placeholder="텍스트를 입력하세요."
          />
        </TextInput>
      )}
    </>
  );
};

export default StoryMaker;

const Hr = styled.div`
  width: 100%;
  height: 1.241px;
  background: rgba(199, 198, 198, 0.2);
`;

const ColorPalette = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 16px;

  button {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border: 1px solid var(--gray01, #d6d6d6);
    border-radius: 50%;
  }

  div {
    display: flex;
    gap: 15px;
    overflow-x: scroll;
  }
`;

const Canvas = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 34px);
    height: 479px;
    flex-shrink: 0;
    margin: 0 17px;
    border-radius: 2.955px;
    border: 1px solid var(--gray01, #d6d6d6);
    background: var(--gray03, #f3f3f3);

    input {
      width: 175px;
    }
  }
`;

const ShareBtn = styled.button`
  margin: 80px auto;
  width: 189px;
  border-radius: 91.304px;
  background: ${(props) => (props.image ? "#191919" : "#c0c0c0")};

  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 40.174px;
  letter-spacing: -0.745px;
`;

const TextInput = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.selectedColor};
    text-align: center;
    font-size: 22px;

    &::placeholder {
      color: ${(props) => props.selectedColor};
    }
  }
`;
