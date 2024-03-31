import { css } from "@kuma-ui/core";

export const container = css `
    width: 100%;
    background-color: var(--color-offgreen-light);
`;

export const content_container = css`
    max-width: 1280px;
    margin-inline: auto;
    padding: 3.5rem 2rem;
    width: 100%;
`;

export const content_heading = css `
    max-width: 32rem;   
    margin: auto;
    text-align: center;

    & > h3 {
        font-size: 2.4rem;
        text-align: center;
        font-weight: 700;
        line-height: 3.2rem;
    }

    & > span {
        font-size: 1.6rem;
        color: var(--color-gray-500);
        font-weight: 500;
        margin-top: 1.2rem;
    }

    @media only screen and (min-width: 768px) {
        white-space: pre;
    }
`;

export const content_body = css `
    display: grid;
    grid-template-columns: 1;
    gap: 3.2rem;
    margin-top: 5rem;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

export const category_card = css `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3.2rem;
    border-radius: 1.6rem;
    background-color: white;
    border: 1px solid transparent;
    transition: all .5s ease;

    &:hover {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border: 1px solid var(--color-offgreen-dark);
    }

    & > div > h2  {
        margin-top: 1.6rem;
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
    }

    & > div > h4 {
        font-size: 1.4rem;
        text-align: center;
        font-weight: 500;
        color: var(--color-offgreen-dark);
    }
`;

export const seeMoreBtn = css `
    padding: 1rem 1.5rem;
    background-color: var(--color-yellow-200);
    border-radius: 3rem;
    border: 0;
    margin-top: 1.6rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;