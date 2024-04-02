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

    h1 {
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