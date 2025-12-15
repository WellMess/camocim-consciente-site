
export interface ThemeData {
    title: string;
    icon: string;
    color: string;
    image: string;
    thumbnailImage: string;
    quote: string;
    content: string;
}

export interface ThemesData {
    [key: string]: ThemeData;
}
