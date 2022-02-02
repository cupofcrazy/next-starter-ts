import styled from "styled-components";


export const Header = () => {
  return (
    <Container>
      <p>Index</p>
    </Container>
  )
};


const Container = styled.header`
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(32px) saturate(300%);
`
