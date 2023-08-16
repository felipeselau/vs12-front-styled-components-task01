import { styled } from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 85vh;
    transition: all 0.3s ease-in-out;

    .title{
        font-size: 2.5rem;
    }

    .center-content{
        background-color: rgba(9, 9, 10, 0.7);
        border-radius: 12px;
        padding: 1rem 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .reset-btn{
        cursor: pointer;
    }

    .reset-btn:hover{
        opacity: 0.7;
    }

`

export const ClassesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    

`