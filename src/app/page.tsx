"use client";

import styled from 'styled-components';

const Main = styled.main`
        
`
const P= styled.p`
    margin-top: 15px;
    color: black;
    font-size: 20px;
    text-align: center;
    padding: 50px;
`
const Div = styled.div` 
    padding: 10px;
    margin: 70px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);

`
const Image = styled.img`
    width: 50%;
    height: 350px;
`;

const Home: React.FC = () => (
  <>
  <Main>
        <P>Somos apasionados por la tecnología. Ofrecemos una amplia gama de productos de última generación, desde smartphones y laptops hasta gadgets innovadores. Nos esforzamos por brindar la mejor experiencia de compra en línea con atención al cliente de primera calidad.</P> 
        <Div>
            <Image src="https://www.oficinadanet.com.br/imagens/post/54711/3-celulares-que-ainda-nao-valem-a-pena-comprar-por-causa-do-preco.jpg" alt="" />
            <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-og-202110?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1719505542711" alt="" />
            <Image src="https://pcmastersbogota.com.co/wp-content/uploads/2023/12/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg" alt="" />
            <Image src="https://i.blogs.es/7c916f/nuevo-ipad-air/1366_2000.jpeg" alt="" />
        </Div>
    </Main>
    
  </>
   
  );
  
  export default Home;