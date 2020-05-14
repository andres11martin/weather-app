import styled from '@emotion/styled'

const Box = styled.div`
align-items:center;
margin: 1%;
padding: 8% 0%;
display: flex;
flex-direction: column;
border-radius: 25px;
background-color: #222831;
color: #999;
text-align: center;
font-size: 10px;
font-family: 'Montserrat', sans-serif;

img {
  height: 5rem;
}

@media (max-width: 800px) {
  h1{
    font-size: 2.2em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.6em
}
h4 {
  font-size: 1.2em;
}

img {
  height: 3rem;
}

}

`

export default Box