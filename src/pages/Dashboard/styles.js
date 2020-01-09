import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    background: #fff;
    width: 90%;
    padding: 10px;

    form {
        > div {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            button.button-remove-file {
                border: none;
                background: none;
                padding-left: 10px;

                svg {
                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    button.save-button {
        margin: 5px 0 0;
        height: 44px;
        width: 70px;
        background: #00acc1;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.03, '#00acc1')};
        }
    }

    button.clear-button {
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

    div {
        padding-left: 5px;
    }
`;

export const TableContainer = styled.div`
    background: #fff;
    margin-top: 10px;
    width: 90%;
    height: 550px;

    button {
        border: none;
        background: none;
        margin-left: 20px;
        &:not(:last-child) {
            svg {
                &:hover {
                    color: green;
                }
            }
        }
        &:nth-last-child(2) {
            svg {
                &:hover {
                    color: blue;
                }
            }
        }
        &:nth-last-child(1) {
            svg {
                &:hover {
                    color: red;
                }
            }
        }
    }
`;
