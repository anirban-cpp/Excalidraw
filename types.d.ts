export type ThemeContextType = {
    isDarkTheme: boolean
    toogleTheme: () => void
}

export interface ThemeProviderProps {
    children?: React.ReactNode
}