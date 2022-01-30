export type PortfolioCategory = string;

export interface PortfolioContent {
    Title: string;
    // Description: string;
    Categories: PortfolioCategory[];
    // ImageURL: string;  
}

export interface Portfolio {
    content: PortfolioContent[],
    categories: PortfolioCategory[];
}