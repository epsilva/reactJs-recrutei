import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200%);
  }
`;

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 550px;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    flex-direction: column;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.6s forwards;
    transition: visibility 0.2s;
    padding-left: 10px;
    padding-right: 10px;
    header {
        height: 60px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding-top: 10px;
        strong {
            font-size: 35px;
        }
        span {
            font-size: 15px;
        }
    }

    > div.content {
        margin-top: 20px;
    }

    > div.file {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            margin: 5px 0 0;
            height: 44px;
            width: 70px;
            background: #f64c75;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#f64c75')};
            }
        }
    }
`;

export const Modal = styled.div`
    display: flex;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    &:hidden {
        visibility: hidden;
        transition-delay: 0, 0.6s;
    }
    position: fixed; /* Stay in place */
    z-index: 10; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    align-items: center;
    justify-content: center;
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    padding-right: 10px;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: none;
        transition: transform 0.2s;
        :hover {
            transform: scale(1.1);
        }
    }
`;
