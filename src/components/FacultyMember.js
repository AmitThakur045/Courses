import styled from "styled-components";
import image from "../assests/image.jpg";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-position: top;
  background-size: cover;
  background: linear-gradient(45deg, #1D3475, #060D1F), url(${image});
  color: #fff;
  margin: 0 15px;
`;
