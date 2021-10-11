import React from 'react'
import style from 'styled-components'

function movies() {
    return (
        <Container>
            <kk>
            Recommended For You
            <Content>
                <Bucket>
                    <img src="/images/simpsons.webp" />
                </Bucket>
                <Bucket>
                    <img src="/images/simpsons.webp" />
                </Bucket>
                <Bucket>
                    <img src="/images/simpsons.webp" />
                </Bucket>
                <Bucket>
                    <img src="/images/simpsons.webp" />
                </Bucket>
            </Content>
            </kk>
            <kk>
            Originals
            <Content>
                <Bucket>
                    <img src="/images/Original1.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Original3.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Original2.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Original4.jpg" />
                </Bucket>
            </Content>
            </kk>
            <kk>
            Marvel
            <Content>
                <Bucket>
                    <img src="/images/Marvel1.jpeg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Marvel2.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Marvel3.jpeg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Marvel4.jpg" />
                </Bucket>
            </Content>
            </kk>
            <kk>
            For Kids
            <Content>
                <Bucket>
                    <img src="/images/Original1.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Original2.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Original3.jpg" />
                </Bucket>
                <Bucket>
                    <img src="/images/Marvel4.jpg" />
                </Bucket>
            </Content>
            </kk>
        </Container>
        
    )
}

export default movies
const Container = style.div`

`
const kk = style.div`
width: 100px;
`
const Content =style.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
padding-bottom: 15px;
padding-top: 10px;
`

const Bucket=style.div`

border-radius: 10px;
overflow: hidden;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; // important

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    transform: scale(1.06);
    border-color: rgba(240,240,240,0.8);
}

`