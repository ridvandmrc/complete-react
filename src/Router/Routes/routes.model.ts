import { ReactNode } from 'react'

export enum RoutePath {
  DASHBOARD = 'dashboard',
  INBOX = 'inbox',
  STARRED = 'starred',
}

export interface IRouterProps {
  title?: string
  icon?: ReactNode
  component?: ReactNode
  path: string
}
