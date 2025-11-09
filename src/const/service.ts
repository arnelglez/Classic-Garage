import type { FeatureServiceCard, ServiceCard } from "../interfaces/interfaces";

export const services: ServiceCard[] = [
    {
        title: "Engine & Performance",
        description: "Complete engine diagnostics, repair, and tuning.",
        icon: "engine-gear",
        href: "#services",
        color: "indigo"
    },
    {
        title: "Brake & Suspension",
        description: "Brake pad replacement, rotor repair, and suspension checks.",
        icon: "wrench",
        href: "#services",
        color: "pink"
    },
    {
        title: "Electrical & Diagnostics",
        description: "Advanced troubleshooting for complex electrical systems.",
        icon: "battery-electrical",
        href: "#services",
        color: "green"
    },
    {
        title: "Routine Maintenance",
        description: "Oil changes, tire rotation, and comprehensive inspection.",
        icon: "checklist-maintenance",
        href: "#services",
        color: "yellow"
    }
];


export const featuresServices: FeatureServiceCard[] = [
    {
        title: "Advanced Engine Diagnostics",
        description: "Comprehensive check using the latest technology to quickly identify complex issues and get accurate results.",
        price: "$99.00",
        category: "Engine",
        color: "indigo",
        imageUrl: "/images/services/advanced-engine-diagnostics.webp",
        imageAlt: "Thumbnail of Advanced Engine Diagnostics service"
    },
    {
        title: "Transmission & Drivetrain Service",
        description: "Full service, fluid change, and repair for automatic and manual transmissions to ensure smooth shifting.",
        price: "$249.00",
        category: "Drivetrain",
        color: "pink",
        imageUrl: "/images/services/transmission-service.webp",
        imageAlt: "Thumbnail of Transmission Service"
    },
    {
        title: "A/C System Repair & Recharge",
        description: "Expert repair and recharge services for maximum cooling performance and comfortable driving.",
        price: "$129.00",
        category: "A/C",
        color: "green",
        imageUrl: "/images/services/ac-system-repair.webp",
        imageAlt: "Thumbnail of A/C System Repair"
    }
];



 