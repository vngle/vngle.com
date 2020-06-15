import React from "react"
import styled from "styled-components"
import { Card, Button } from "react-bootstrap"

const ActionCard = ({ title, text, btn }) => {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button size="lg" href={btn.href}>
          {btn.text}
        </Button>
      </Card.Body>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  margin-bottom: 1rem;

  .card-title {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }

  .card-subtitle {
    font-family: "Inter", sans-serif;
  }

  .card-body > * {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

export default ActionCard
