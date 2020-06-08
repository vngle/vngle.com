import React from "react"
import styled from "styled-components"

export default ({ children }) => <ScrollWrapper>{children}</ScrollWrapper>

const ScrollWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 0 0 auto;
    width: calc(75px + 30%);
    max-width: 40%;
  }

  & > * + * {
    margin-left: 5%;
  }
`
