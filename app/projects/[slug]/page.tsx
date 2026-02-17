// 'use client';

import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';


const projects = {
    'tidalense': {
        title: 'Tidalense',
        date: 'Feb 2026',
        github: 'https://github.com/khushipatel-10/Tidalense',
        devpost: 'https://devpost.com/software/tidalense?ref_content=my-projects-tab&ref_feature=my_projects',
        youtube:'https://youtu.be/eHfgEvEioZA',
        description:
            'Built an AI-powered global water quality monitoring platform that combines real-time environmental data, computer vision, and predictive analytics to assess water safety at both global and individual scales.',
        bullets: [
            'Engineered a real-time global water monitoring dashboard using Mapbox and environmental APIs',
            'Developed MicroScan AI using OpenCV and TensorFlow for instant water bottle analysis and contamination detection',
            'Implemented a dynamic risk scoring engine combining geospatial data, historical trends, and AI inference'
        ],
        intro: 'Tidalense was created to bridge the gap between large-scale environmental monitoring and personal water safety verification. While global datasets track pollution, temperature shifts, and algae blooms, individuals often lack accessible tools to verify the safety of water at a personal level. This project aims to unify macro-level environmental intelligence with micro-level analysis, empowering users with actionable, AI-driven insights about water quality anywhere in the world.',
        works: 'The platform integrates multiple environmental data sources through a FastAPI backend to aggregate pollution metrics, temperature data, and ecological indicators. On the frontend, a Next.js interface renders a high-performance interactive global map powered by Mapbox, allowing users to visualize live water conditions in real time. The MicroScan AI module leverages OpenCV and TensorFlow to analyze visual inputs from water containers, detecting anomalies, potential contaminants, and verifying brand authenticity through computer vision techniques. A centralized risk engine dynamically calculates safety scores by combining geographic data, historical environmental trends, and AI-based visual assessments. The system architecture separates concerns between data ingestion, processing, inference, and UI rendering to maintain scalability and performance.',
        result: 'Tidalense delivers an end-to-end water intelligence platform capable of monitoring global water systems while also providing immediate personal safety verification. The application successfully demonstrates real-time data processing, AI inference, and scalable full-stack architecture within a unified system. By combining geospatial visualization, machine learning, and dynamic risk modeling, the project showcases the ability to design and implement a complex, production-ready environmental technology solution.'
    },
    'figma-to-html': {
        title: 'Figma to HTML Converter',
        date: 'Nov 2025',
        github: 'https://github.com/khushipatel-10/Figma-to-HTML',
        description:
            'Developed a Python-based automation tool that converts Figma mockups into browser-ready HTML and CSS using the Figma REST API.',
        bullets: [
            'Engineered parsing logic to transform Figma design data into semantic HTML and CSS',
            'Validated layout, color, and typography accuracy using Pytest',
            'Delivered a complete end-to-end converter within 14 hours'
        ],
        intro: 'This project was built to address one of the most repetitive and error-prone parts of front-end development: translating design mockups into clean, usable code. Designers often work in tools like Figma, while developers manually recreate layouts, spacing, fonts, and colors in HTML and CSS. This manual handoff process is slow, inconsistent, and prone to visual mismatches. The goal of this project was to automate that translation process by programmatically converting Figma designs into browser-ready HTML and CSS.',
        works: 'The system uses the Figma REST API to fetch design files and extract structured metadata for every node in the design tree. Each node is analyzed to determine its type, layout properties, typography, colors, spacing, and hierarchy. A parsing layer then maps these properties into semantic HTML elements and corresponding CSS rules. Special care was taken to handle nested layouts, reusable components, and text styles. The converter ensures consistent font sizing, color accuracy, and alignment by normalizing values directly from Figma tokens. Pytest-based validation was used to compare rendered output against expected layouts to verify correctness across multiple design samples.',
        result: 'The final tool successfully generates clean HTML and CSS that closely mirrors the original Figma design, significantly reducing development time for static layouts. The project was completed end-to-end within 14 hours, demonstrating rapid prototyping and execution. Beyond automation, the project provided deep insight into design systems, layout modeling, and building robust developer tooling that bridges the gap between design and engineering.'
    },

    'sous-duckling': {
        title: 'Sous Duckling: AI-Assisted Recipe Assistant',
        date: 'Aug 2025 - Oct 2025',
        github: 'https://github.com/khushipatel-10/sous-duckling-recipe-assistant',
        description:
            'Built an AI-assisted recipe assistant that enables users to generate recipes with structured ingredients and step-by-step instructions.',
        bullets: [
            'Developed an LLM-powered chatbot with a FastAPI backend',
            'Maintained session-based conversational context for recipe constraints',
            'Implemented REST APIs using PostgreSQL, SQLAlchemy, Alembic, and asyncpg'
        ],
        intro: 'Sous Duckling is an AI-assisted recipe assistant designed to make cooking more interactive and personalized. Instead of static recipe search results, the application allows users to have a natural conversation with an AI to generate recipes tailored to preferences, dietary constraints, and available ingredients. The project focuses on combining conversational AI with reliable backend systems to deliver structured, usable outputs rather than vague text responses.',
        works: 'The application uses an LLM-powered chatbot integrated with a FastAPI backend. User prompts are processed through carefully structured prompts that enforce consistent output formats, including ingredients and step-by-step instructions. Session-based memory is maintained so that constraints like allergies, cuisine preferences, or portion sizes persist across interactions. The backend exposes REST APIs backed by PostgreSQL, with SQLAlchemy for ORM modeling and Alembic for schema migrations. Async database operations ensure responsiveness under concurrent usage. The system was designed to prioritize correctness, repeatability, and conversational continuity rather than one-off text generation.',
        result: 'Sous Duckling delivers reliable, structured recipes that adapt as the conversation evolves. Users can iteratively refine recipes without restating constraints, improving usability and realism. The project strengthened skills in prompt engineering, backend architecture, and building AI systems that behave predictably in real-world scenarios rather than producing unstructured or inconsistent responses.'
    },

    'omni-ai': {
        title: 'Omni AI Generative AI Platform',
        date: 'Jun 2025 - Jul 2025',
        github: 'https://github.com/khushipatel-10/Omni-AI',
        description:
            'Architected a modular PERN stack generative AI platform integrating multiple services via a unified dashboard.',
        bullets: [
            'Designed modular React components with nested dynamic routing',
            'Implemented role-based access using Clerk authentication',
            'Improved engagement through visually consistent UI design'
        ],
        intro: 'Omni AI is a full-stack generative AI platform built to unify multiple AI services under a single, cohesive interface. Many AI tools exist as isolated applications with inconsistent UX and fragmented workflows. This project aimed to create a scalable system where multiple AI capabilities could coexist while sharing authentication, layout, and infrastructure.',
        works: 'The platform is built using a PERN stack, with a modular backend architecture that allows new AI services to be added without disrupting existing functionality. React components were designed to be reusable and composable, while nested dynamic routing enabled seamless navigation across tools. Clerk authentication was integrated to provide role-based access control, ensuring secure usage across user types. The UI layer emphasizes visual consistency and responsiveness, while backend services handle request orchestration, validation, and error handling to ensure reliability.',
        result: 'Omni AI demonstrates how generative AI systems can be packaged into a production-ready platform rather than standalone demos. The project highlights strong system design, extensibility, and UX thinking. It also reinforced the importance of building AI products that feel cohesive, reliable, and scalable from the start.'
    },

    'insider-trading': {
        title: 'Insider Trading Detection',
        date: 'Jan 2025 - Apr 2025',
        github: 'https://github.com/khushipatel-10/Insider-Trading',
        description:
            'Engineered a deep learning system to detect anomalous trading activity with high accuracy.',
        bullets: [
            'Achieved 95 percent accuracy in detecting price fluctuation anomalies',
            'Generated anomaly detection graphs with 90 percent precision',
            'Built a scalable pipeline for financial data analysis'
        ],
        intro: 'This project focuses on detecting anomalous trading behavior that may indicate insider trading activity. Financial markets generate massive volumes of time-series data, making it difficult to manually identify suspicious patterns. The goal was to design a deep learning system capable of identifying abnormal price movements and trading behavior with high accuracy.',
        works: 'The system processes historical trading data through a deep learning pipeline optimized for time-series analysis. Feature engineering techniques were applied to capture temporal dependencies and volatility patterns. The model was trained to distinguish normal market fluctuations from anomalous behavior. Visualization tools were developed to generate anomaly detection graphs, allowing results to be interpreted and validated. Additional knowledge sources were incorporated to improve contextual understanding of flagged events.',
        result: 'The model achieved 95 percent accuracy in detecting anomalous price movements and demonstrated strong precision in identifying high-risk events. The project provided hands-on experience with financial data modeling, anomaly detection, and building scalable machine learning pipelines suitable for real-world risk assessment.'
    },

    nutrinet: {
        title: 'NutriNet Multimodal Meal Nutrition Analysis',
        date: 'Jan 2025 - Apr 2025',
        github: 'https://github.com/khushipatel-10/NutriNet',
        description:
            'Developed a multimodal deep learning model to estimate caloric intake from diverse biological and image data.',
        bullets: [
            'Achieved RMSRE of 0.3035 on validation data',
            'Built preprocessing pipelines for time-series, categorical, and image inputs',
            'Improved model performance through normalization and dimensionality reduction'
        ],
        intro: 'NutriNet is a multimodal deep learning project aimed at estimating caloric intake using diverse biological and behavioral data sources. Traditional nutrition estimation methods rely heavily on manual logging, which is inaccurate and difficult to maintain. This project explores how machine learning can improve nutritional analysis by integrating multiple data modalities.',
        works: 'The model combines continuous glucose monitor data, demographic features, microbiome profiles, and meal images into a unified learning pipeline. Each data modality undergoes specialized preprocessing, including normalization, encoding, and dimensionality reduction. The model architecture is designed to effectively fuse heterogeneous inputs while preserving signal integrity.',
        result: 'NutriNet achieved an RMSRE of 0.3035 on validation data, demonstrating strong predictive performance given the complexity of inputs. The project deepened understanding of multimodal learning, data preprocessing at scale, and building models that operate effectively across structured and unstructured data sources.'
    }
};

export default async function ProjectPage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projects[slug as keyof typeof projects];

    if (!project) {
        notFound();
    }

    return <ProjectClient project={project} />;

}
