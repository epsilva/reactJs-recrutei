import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    flex: 1;

    div.collapsed {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;

        overflow: hidden;
        max-height: 0;
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

        &.is-expanded {
            overflow: hidden;
            max-height: 500px; /* approximate max height */
            -moz-transition-duration: 0.4s;
            -webkit-transition-duration: 0.4s;
            -o-transition-duration: 0.4s;
            transition-duration: 0.4s;
            -moz-transition-timing-function: ease-in;
            -webkit-transition-timing-function: ease-in;
            -o-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
        }
    }
`;

export const Content = styled.div`
    height: 64px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div.notification {
        display: flex;
        @media only screen and (max-width: 768px) {
            display: none;
        }
        justify-content: space-between;
        width: 50%;
    }

    nav {
        display: flex;
        align-items: center;
        width: 15%;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
            width: 80px;
        }

        a {
            font-weight: bold;
            color: #7159c1;
            font-size: 20px;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;

    button {
        background: none;
        border-style: none;
        display: none;

        @media only screen and (max-width: 768px) {
            display: block;
        }
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #333;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export const ContainerNotification = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        > div {
            background: orange;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 100%;
            }
        }
    }
`;
