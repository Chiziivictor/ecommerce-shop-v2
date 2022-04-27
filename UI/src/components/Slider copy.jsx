import styled, { keyframes } from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  overflow: hidden;
`;
const slider = keyframes`
  0%{
    left: 0;
  }
  25%{
    left: 0%;
  }
  35%{
    left: -101%;
  }
  55%{
    left: -101%;
  }
  65%{
    left: -202%;
  }
  90%{
    left: -202%;
  }
  100%{
    left: 0;
  }
`;
const Wrapper = styled.figure`
  position: relative;
  width: 400%;
  margin: 0;
  left: 0;
  animation-name: ${slider};
  animation-iteration-count: infinite;
  animation-duration: 15s;
`;
const Slide = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #${(props) => props.bg};
  float: left;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  /* width: clamp(200px, 30vw, 500px); */
  width: 400px;
  height: 500px;
  object-fit: contain;
  object-position: center center;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-right: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 10px 0 50px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  opacity: 0.7;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;
