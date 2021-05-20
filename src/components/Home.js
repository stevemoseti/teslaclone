import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
            title="model S"
            description="Order Online for Touchless Delivery"
            background="/images/red.png"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
             <Section/>
              <Section/>
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;

`
