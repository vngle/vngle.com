import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import { FaPen, FaTimes, FaPaperPlane, FaPlus } from "react-icons/fa"

const ActionButtonGroup = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <ButtonGroup>
      <Button
        className="shadow btn-circle btn-main"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FaPlus /> : <FaTimes />}
      </Button>

      {!isCollapsed &&
        [
          {
            position: "top",
            value: <FaPaperPlane />,
            href: "https://vngle.typeform.com/to/zwc2R2og",
          },
          {
            position: "left",
            value: <FaPen />,
            to: "/report",
          },
        ].map((btn, i) => (
          <Button
            className={`shadow btn-circle btn-${btn.position}`}
            key={i}
            to={btn.to}
            href={btn.href}
            as={btn.to && Link}
          >
            {btn.value}
          </Button>
        ))}
    </ButtonGroup>
  )
}

const ButtonGroup = styled.div`
  .btn-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    z-index: 1;
  }

  .btn-main {
    position: fixed;
    bottom: 25px;
    right: 25px;
  }

  .btn-top {
    position: fixed;
    bottom: 100px;
    right: 25px;
  }

  .btn-left {
    position: fixed;
    bottom: 25px;
    right: 100px;
  }
`
export default ActionButtonGroup
