import { css } from "@kuma-ui/core";

export const navigaiton_container = css `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 1.25rem;
    max-width: 1280px;
    margin-inline: auto;
    width: 100%;
`;

export const navigationLinks = css `
    display: none;

    & > li:hover {
        color: var(--color-green-500);
        cursor: pointer;
    }

    & > div > a {
        border-radius: 35px;
        margin: 0;
        padding: 1rem 1.8rem;
        border: 1px solid #000;
        text-decoration: none;
        color: #000;
        font-weight: 500;
        margin-right: 1rem;
    }

    @media only screen and (min-width: 1024px) {
        list-style-type: none;
        display: flex;
        gap: 2.5rem;
        font-size: 1.6rem;
        align-items: center;
        font-weight: 500;
        color: var(--color-gray-900);
        text-decoration: none;
    }
`;

export const signup_btn = css`
    background-color: var(--color-yellow-200);
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #000;
    }
`;

export const humberger_btn = css `
    /* width: 2.4rem;
    height: 2.4rem; */
    background-color: transparent;
    margin: 0;
    padding: 1rem;
    display: grid;
    gap: .4rem;
    place-content: center;
    border: none;

    & > * {
        width: 1.8rem;
        height: 2px;
        border-radius: 2px;
        background-color: #000;
    }

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

export const toggle = css `
    background-color: transparent;
    margin: 0;
    padding: 1rem;
    display: grid;
    gap: .4rem;
    place-content: center;
    border: none;
    transition: transform 10s ease-in-out;
    z-index: 3;
    cursor: pointer;

    & > * {
        width: 1.8rem;
        height: 2px;
        border-radius: 2px;
        background-color: #000;
    }

    & > span:first-of-type {
        transform: rotate(45deg);
    }
    
    & > span:nth-of-type(2) {
        display: none;
    }

    & > span:last-of-type {
        transform: rotate(-45deg);
        position: relative;
        bottom: 6px;
    }

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

export const mobileNavigation = css `
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
    background-color: var(--color-gray-500);
    color: white;
    position: fixed;
    inset: 0;

    & > nav {
        height: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-size: 1.6rem;
    }

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;