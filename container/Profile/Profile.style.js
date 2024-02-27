import styled from "styled-components"

export const ProfileContainer = styled.div`
margin-top:100px ;
display:inline-flex ;
width:100% ;
padding:0% 6% 3% 0 ;
.left{
width:40% ;
box-shadow: 1px 1px rgba(0, 0, 0, 0.15);

.options{
    font-size:24px ;
    display:flex ;
    flex-direction:column ;
    gap:50px;
    padding:7% 0 4% 15% ;

}
}
.right{
width:60% ;
}
@media screen and (max-width:1024px) {
    .left{
        display:flex ;

    }
    .right{
        width:100% ;
    }
}

`
export const EditContainer = styled.div`
padding:3% 6% ;
form{
    display:flex ;
    flex-direction:column ;
    gap:20px;
    /* padding:% ; */
}
.name,.email-number{
    display:flex ;
    /* justify-content:space-between ; */
    gap:70px;
    width:100% ;
}

`