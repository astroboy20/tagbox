import styled from "styled-components"

export const RegisterContainer = styled.div`
display:flex ;
justify-content:space-between ;
    span{
font-size: 32px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
text-align: left;

    }
    p{
        font-family: Space Grotesk;
font-size: 24px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

    }
    .left{
display:flex ;
flex-direction:column ;
gap:20px;
    }
    .name{
        display:flex ;
        gap:20px;
    }
    .right{
        box-shadow:1px 1px rgba(0, 0, 0, 0.15) ;
        display:flex ;
        flex-direction:column ;
        gap:2%;
        padding:3% ;
        .icon{
            text-align:right ;
        }
    }
    
`