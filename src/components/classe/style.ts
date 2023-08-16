import { styled } from "styled-components";

export const ClassCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

label{
    cursor: pointer;
}

label:hover{
    opacity: 0.7;
}

& input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #333;
    border-radius: 50%;
}


`