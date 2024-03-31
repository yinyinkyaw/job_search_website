import { css } from '@kuma-ui/core'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={css`
        max-width: 1280px;
        margin-inline: auto;
        padding: 0 2rem;
        width: 100%;
    `}>{children}</div>
  )
}