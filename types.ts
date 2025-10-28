
export interface ThemeData {
    title: string;
    icon: string;
    color: string;
    image: string;
    quote: string;
    content: string;
}

export interface ThemesData {
    [key: string]: ThemeData;
}
