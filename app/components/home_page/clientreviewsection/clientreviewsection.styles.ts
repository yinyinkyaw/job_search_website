import { css } from "@kuma-ui/core";

export const section = css`
    max-width: var(--max-page-width);
    margin-inline: auto;
    padding: 5rem 2rem;
`;

export const container = css`
    display: grid;
    margin-top: 12.8rem;
    gap: 3.2rem;
    place-items: center;

    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const heading = css`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

export const reviewInfo = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const paragraph = css`
    color: var(--color-gray-500);
    font-size: 1.6rem;
    line-height: 2;
    max-width: 50rem;
`;

export const reviewerInfo = css`
    width: 100%;
    margin-top: 4.8rem;
    padding-top: 2.4rem;
    border-top: 1px solid var(--color-offgreen-medium);
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

export const reviewerName = css`
    font-size: 1.6rem;
`;

export const reviewerJobTitle = css`
    font-size: 1.6rem;
    color: var(--color-green-500);
`;

export const reviewerImage = css`
    // max-width: 32rem;
    width: 100%;
    height: auto;
    // border: 2px solid lime;

    @media only screen and (max-width: 1240px) {
        max-width: 51.2rem;
        margin-inline: auto;
    }
`;