import { css } from "@kuma-ui/core";

export const container = css `
    max-width: var(--max-page-width);
    margin: auto;
    padding: 5rem 2rem;
`;

export const jobSectionHeader = css `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    & > h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    .category_list {
        display: flex;
        align-items: center;
        gap: 4rem;

        & > * {
            background-color: transparent;
            font-size: 1.6rem;
            font-weight: 500;
            border: 0;
            margin: 0;
            padding: 0;
            position: relative;
            display: flex;
            cursor: pointer;

            &::after {
                content: "";
                width: 100%;
                height: .5rem;
                background-color: transparent;
                position: absolute;
                bottom: 2px;
                z-index: -1;
            }
        }

        .selected {
            font-weight: 700;
            &::after {
                background-color: var(--color-yellow-200);
            }
        }
    }
`;

export const jobCard = css `
    --transition-effect-time: 800ms;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2.4rem;
    border: 1px solid var(--color-gray-200);
    border-radius: 1.5rem;
    font-size: 1.6rem;
    text-align: left;
    gap: 1.2rem;
    cursor: pointer;
    text-decoration: none;
    transition: all var(--transition-effect-time) ease;

    @media only screen and (max-width: 1280px) {
        flex-direction: column;
        justify-content: center;

        & > div:where(:nth-of-type(2)) {
            flex-direction: row;
            justify-content: center;
        }
    }

    & > * > button {
        border-radius: 2.5rem;
        padding: .5rem 2rem;
        font-size: 1.6rem;
        font-weight: 600;
        background-color: transparent;
        border: 1px solid #000;
        max-width: 10rem;
        transition: background-color var(--transition-effect-time) ease;
    }

    &:hover {
        border: 1px solid #000;
        & > * > button {
            background-color: var(--color-yellow-500);
            border: 1px solid transparent;
        }
    }
`;

export const jobCardGrid = css `
    display: grid;
    grid-auto-flow: row;
    gap: 2rem;
    padding-top: 8rem;

    @media only screen and (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media only screen and (max-width: 695px) {
        grid-template-columns: 1fr;
    }
`;

export const jobCardHeader = css `
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;

    @media only screen and (max-width: 1280px) {
        flex-direction: column;
    }
`;

export const flexItem = css `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
    flex: 1;
    justify-items: flex-start;

    @media only screen and (max-width: 1280px) {
        flex-direction: column;
        gap: 1.5rem;
    }

    @media only screen and (min-width: 1280px) {
        & > * {
            flex: 1;
        }
    }
`;

export const companyName = css `
    color: var(--color-green-500);
    font-weight: 500;
`;

export const seeMoreBtn = css `
    padding: 1rem 2.5rem;
    background-color: var(--color-yellow-200);
    border-radius: 3rem;
    border: 0;
    margin-top: 1.6rem;
    cursor: pointer;
    transition: all .5s ease;
    font-size: 1.6rem;
    font-weight: 500;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #000;
    }
`;

export const flexCenter = css `
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;