import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightcyan;
  text-align: center;
  margin: 20px;
`;

const About = ({ nome, idade, estuda }) => {
  return (
    <Container>
      <p>Chama-se: {nome}</p>
      <p>Tem {idade} anos</p>
      <p>Estuda {estuda}</p>
    </Container>
  );
};

export default About;
