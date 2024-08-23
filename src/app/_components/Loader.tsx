import styled from "styled-components"
const Img = styled.img`
  display: block;
  margin: auto;
  padding: 2rem;
`;
const Loader = () => {
  return (
    <div>
      <Img src="../../../../public/oval.svg" alt="Loading..." />
    </div>
  );
};

export default Loader;