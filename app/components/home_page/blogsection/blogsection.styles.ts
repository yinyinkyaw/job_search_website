import { css } from "@kuma-ui/core";

export const blogSection = css`
    max-width: var(--max-page-width);
    margin-inline: auto;
    width: 100%;
    padding: 3rem 2rem;
`;

export const heading = css`
    font-size: 3rem;
    text-align: center;
`;

export const blogGrid = css`
    display: grid;
    gap: 5.6rem;
    margin-top: 1.6rem;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const blogCardInfo = css`
    margin-top: 2rem;
`;

export const blogPostedDate = css`
    color: var(--color-green-500);
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
`;

export const blogImage = css`
    aspect-ratio: 1 / 2;
    object-fit: cover;
    border-radius: 0.8rem;
    width: 100%;
`;

export const blogPostTitle = css`
    font-size: 1.8rem;
    margin-top: 0.8rem;
    font-weight: 600;
`;

export const flexCenter = css`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
`;

export const viewMoreBtn = css`
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
    text-decoration:none;
    color: black;

    &:hover {
        border: 1px solid #000;
    }
`;