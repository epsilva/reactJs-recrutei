import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

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

    > div {
        display: flex;
        justify-content: space-between;
        width: 45%;

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
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;

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
    }
`;
