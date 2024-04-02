import { css } from "@kuma-ui/core";

export const container = css `
    max-width: var(--max-page-width);
    margin-inline: auto;
    padding: 0 2rem;
    width: 100%;
    padding-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    place-items: center; 
`;

export const contentContainer = css `
    grid-column: span 6 / span 6;
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        @media only screen and (min-width: 768px) {
            font-size: 3rem;
            white-space: pre;
        }

        @media only screen and (max-width: 1024px) {
            text-align: center;
        }

        @media only screen and (min-width: 1024px) {
            font-size: 3.6rem;
            line-height: 4rem;
        }
    }

    @media only screen and (max-width: 1024px) {
        grid-column: span 12 / span 12;

    }
`;

export const searchJobContainer = css `
    --radius-corner: 4.5rem;

    border: 1px solid #000;
    border-radius: var(--radius-corner);
    display: flex;
    flex: 1;
    background-color: white;
    margin-top: 3.2rem;

    & > * {
        padding: 2rem 1.8rem;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > div {
        border-right: 1px solid #000;
    }

    & > * > .search_box {
        width: calc(100% - 2.4rem);
        border: 0;
        height: 100%;
        font-size: 1.6rem;

        &:focus {
            border: none;
            outline: none;
        }

        &:placeholder {
            font-size: 1.6rem;
        }
    }

    button {
        border: 0;
        margin: 0;
        background-color: var(--color-yellow-200);
        font-size: 1.8rem;
        font-weight: 500;
        border-top-right-radius: var(--radius-corner);
        border-bottom-right-radius: var(--radius-corner);
        justify-content: center;
        font-weight: 600;
    }

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 1.5rem;
        border: 0;

        & > * {
            border: 1px solid #000;
            border-radius: var(--radius-corner);
        }

        button {
            border: 1px solid #000;
        }
    }
`;

export const popularSearch = css `
    color: var(--color-offgreen-dark);
    display: flex;
    gap: 1.2rem;
    margin: 1.6rem;
    font-size: 1.4rem;
    align-items: center;
    flex-wrap: wrap;

    span {
        background-color: var(--color-offgreen-light);
        padding: .4rem 1.2rem;
        border-radius: 2.5rem;
        font-size: 700;
    }
`;

export const imageContainer = css `
    grid-column: span 6 / span 6;
    display: flex;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 1024px) {
        grid-column: span 12 / span 12;

    }

    & > .circle_shape {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -49%);
        z-index: -1;
    }
`;