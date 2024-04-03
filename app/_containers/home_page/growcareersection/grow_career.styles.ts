import { css } from "@kuma-ui/core";

export const container = css `
    max-width: var(--max-page-width);
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    @media only screen and (max-width: 1280px) {
        flex-direction: column;
    }

    img {
        width: 60%;

        @media only screen and (max-width: 1280px) {
            width: 90%;
        }
    }
`;

export const contentContainer = css `
    width: 40%;

    @media only screen and (max-width: 1280px) {
        width: calc(100% - 4rem);
        margin: auto;
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
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 57.6rem;
    margin-top: 4rem;
`;

export const careerCard = css `
    position: relative;
    background-color: var(--color-offgreen-light);
    padding: 1.6rem 2rem;
    border-radius: .8rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.6rem;


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