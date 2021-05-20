import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless delivery</p>
            </ItemText>
            <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            Custom Order
                        </LeftButton>
                        <RightButton>
                            Existing Inventory
                        </RightButton>
                    </ButtonGroup>
                    <DownArrow src="/images/downarrow.png"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/red.png');
display:flex;
flex-direction:column;
justify-content:space-between;//vertical alignment
align-items:center; //horizontal alignment
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:760px){
    flex-direction:column;
}
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
width:256px;
height:40px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin-right:10px;
font-weight:900;
`
const RightButton = styled(LeftButton)`
background-color:white;
color:#000;
opacity:0.65;

`
const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation:animation infinite 1.5s;
`
const Buttons = styled.div``