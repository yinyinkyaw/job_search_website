import { css } from "@kuma-ui/core";

export const container = css `
    max-width: var(--max-page-width);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
    place-items: center;
    padding: 0 0 10rem;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const contentContainer = css `
    width: 100%;

    @media only screen and (max-width: 1024px) {
        width: 50%;
    }
`;

export const heading = css `
    font-size: 2.8rem;
    font-weight: 800;
    margin: 2rem 0;
`;

export const paragraph = css `
    color: var(--color-gray-500);
    font-size: 1.6rem;
    font-weight: 500;
    max-width: 44.9rem;
    line-height: 2.8rem;
`;

export const cardContainer = css `
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    max-width: 57.6rem;
    margin-top: 4rem;
`;

export const careerCard = css `
    position: relative;
    background-color: var(--color-offgreen-light);
    padding: 1.6rem 1.5rem;
    border-radius: .8rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.6rem;
    white-space: pre-line;

    @media only screen and (min-width: 1025px) {
        &:first-child {
            width: 40%;
            padding: 1.6rem 4.5rem;
        }

        &:nth-of-type(2) {
            width: 48%;
            padding: 1.6rem 3rem;
        }

        &:nth-of-type(3) {
            width: 50%;
        }

        &:last-child {
            width: 45%;
            padding: 1.6rem 3rem;
        }
    }



    @media only screen and (max-width: 1024px) {
        width: 100%;
        text-align: left;
    }

    & > span {
        --circle-size: 3rem;

        position: absolute;
        width: var(--circle-size);
        height: var(--circle-size);
        background-color:var(--color-emerald-300);
        border: 1px solid #000;
        border-radius: 50%;
        right: -1.2rem;
        top: -1.2rem;
        display: grid;
        place-items: center;

    }
`;