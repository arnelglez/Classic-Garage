
export interface Menu {
    title: string;
    href: string;
    section: string;
}

export interface ServiceCard {
    title: string;
    description: string;
    icon: string;
    href: string;
    color: string;
}


export interface FeatureServiceCard {
    title: string;
    description: string;
    price: string;
    category: string;
    color: string;
    imageUrl: string;
    imageAlt: string;
}

export interface TestimonialCard {
    quote: string;
    name: string;
    role: string;
    imageUrl: string;
    color: string;
}   