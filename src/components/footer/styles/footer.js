import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: black;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  position: sticky;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
    
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
      color: #810020;
      transition: 200ms ease-in;
  }
  text-shadow: .5px .5px .5px gray;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #810020;
  margin-bottom: 20px;
  font-weight: bold;
  text-decoration: underline;
  text-shadow: .5px .5px .5px gray;
`;