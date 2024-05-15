import { css } from "@kuma-ui/core";

export const container = css`
    max-width: var(--max-page-width);
    margin-inline: auto;
    width: 100%;
    padding: 0 2rem;
    border: 1px solid #000;
    border-radius: 1.6rem;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
`;

export const cardContainer = css`
    padding: 2.8rem 6.4rem;
    border-radius: 1.2rem;
`;

export const overviewCardGrid = css`
    display: grid;
    gap: 5.6rem;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const overviewCard = css`
    display: flex;
    // border: 2px solid lime;
    gap: 2rem;
    flex: 1;

    // @media only screen and (min-width: 768px) {
    //     flex-direction: column;
    // }
`;

export const count = css`
    font-size: 3rem;
    font-weight: bold;
`;

export const label = css`
    font-size: 1.8rem;
    font-weight: bold;
`;