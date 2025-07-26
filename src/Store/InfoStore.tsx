import {create} from "zustand/react";

export type ExperienceType = {
    title:string,
    company_name:string,
    date_info:string,
    description:string
}
export const useInfoStore = create(() => ({
    Summary:{
        title:"Experienced WordPress & PHP Developer with 15+ Years in Web Development",
        description:"WordPress, Laravel Backend developer with over 15 years of experience. I'm always willing to challenge myself to new horizons and find ways to improve everything around me. I have a huge passion for writing code, learning new technologies and applying them on real-life projects.\n" +
            "Experience with Elementor custom widgets and dynamic tags, wpbakery custom shortcodes, ACF, Gutenberg custom blocks, Divi Builder custom modules, Wordpress Bedrock.\n" +
            "Additionally have experience with HubSpot custom modules, mainly using Laravel theme Sage 10, Next, React, HubSpot, AI SDK, N8N."
    },
    Experience:[
        {
            company_name:"My Custom Software Inc",
            title:"Full-stack Developer backend oriented",
            date_info:"April 2024 - Present",
            skills:["Laravel","Amazon SQS","Bedrock","AI SDK","Wordpress plugin development","Next.js","React.js","TypeScript","Wordpress theme development","MCP","Go High Level API","N8N","HubSpot","Elementor","Divi builder"],
            description:"As a full-stack developer focused on WordPress and Laravel, I deliver custom, scalable solutions tailored to client needs. I’ve supported and maintained 100+ WordPress sites, including blogs and e-commerce platforms, with expertise in advanced Gravity Forms development, API integrations (e.g., Salesforce, Monday.com, n8n), and performance optimization.\n" +
                "I develop custom plugins, child themes, and Elementor widgets to enhance flexibility and content control. I also handle on-site SEO with custom schema for improved search visibility. In Laravel, I build AI-powered applications using the MCP architecture, combining smart backend logic with intuitive frontend interfaces.\n" +
                "Mostly focused on Gravity Forms custom made functionality, custom feeds, custom fields, also third-party API's like salesforce, monday.com, n8n implementation. Support websites blogs, e-commerce , implement new functionality child theme or custom plugins related.\n" +
                "Created around 10+ Laravel React apps as automated tools for provide services like, delay messages Using AWS SQS, integrated api’s for automation go high level, MCP/LLM services."
        },
        {
            company_name:"Academy Smart Ltd.",
            title:"Wordpress Developer",
            date_info:"November 2023 - July 2024 ",
            skills:["PHP","JavaScript","jQuery","PostCSS","SCSS","SQL","PSD to Wordpress","WordPress","WooCommerce","Git","AJAX","Bootstrap","Bedrock","Sage","Docker","Next.js","Wordpress Development","LMS","Divi","Elementor"],
            description:"Developed and maintained secure, scalable web applications across 30+ websites using modern frameworks and tools. Built custom WordPress solutions with Bedrock for structured project setup and Sage 10 for Laravel Blade-based theming.\n" +
                "Implemented backend functionality with Laravel, integrating RESTful APIs and database features. Used Docker to containerize environments for consistent development and streamlined deployment.\n" +
                "Integrated cloud services like Amazon SES for transactional emails and Amazon SQS for background task processing. Maintained high code quality through modular architecture, Git version control, and adherence to modern PHP and WordPress standards."
        },
        {
            company_name:"AimIT",
            title:"Team Lead (Full-Stack Development)",
            date_info:"March 2018 - April 2023",
            skills:["PHP","WordPress","Bedrock","Sage","Vanilla JS","WooCommerce","Shopify","Elementor","Visual Composer"],
            description:"Led development of custom systems using Laravel and built WordPress websites from the ground up, along with ongoing support. Maintained and enhanced WooCommerce-based staff stores to ensure stability and usability.\n" +
                "Supported team members in resolving technical challenges and delivering projects on time. Contributed to React applications and developed Shopify themes. Also implemented A/B testing strategies to optimize user experience and conversion rates across platforms."
        },
        {
            company_name:"Redbook",
            title:"WordPress backend developer",
            date_info:"December 2015 - March 2018",
            skills:["Bedrock","WooCommerce","WordPress","Wordpress plugin development","jQuery","Elementor","MODx","Visual Composer"],
            description:"Created and supported a custom eLearning plugin integrating WooCommerce with LMS features, delivering tailored solutions for over 20 websites across diverse industries including Fitness, Cooking, and Language Learning. Developed seamless API integrations with Telegram bot, amoCRM, and Sendpulse to enhance communication, CRM, and marketing automation.\n" +
                "Implemented interactive learning experiences using H5P, enriching course content with multimedia and dynamic activities. Focused on building scalable, maintainable backend systems that support smooth user experiences and effective course management.\n" +
                "Collaborated closely with frontend developers and stakeholders to ensure the plugin met specific client requirements, while maintaining high standards of code quality and performance."
        },
        {
            company_name:"Kurzik",
            title:"Wordpress Developer",
            date_info:"May 2014 - November 2015",
            skills:["jQuery","CSS","HTML","PHP","SCSS","Bootstrap","Wordpress theme development"],
            description:"Developed complete websites from initial setup through deployment, ensuring responsive layouts and cross-browser compatibility. Converted Photoshop (PSD) files into fully functional, custom WordPress themes using PHP, HTML, CSS, SCSS, and JavaScript frameworks such as jQuery and Bootstrap to build interactive and user-friendly interfaces. Managed front-end build processes with tools like Gulp and Webpack to optimize assets and automate workflows, improving development efficiency.\n" +
                "Created, tested, and maintained custom WordPress plugins to extend site functionality according to project needs. Led restoration and security reinforcement efforts for WordPress websites compromised by malware or hacker attacks, minimizing downtime and protecting client data. Maintained version control through SVN, handling code branching, merging, and plugin updates via TGM Plugin Activation.\n" +
                "Managed project dependencies and automation scripts with Composer and npm to ensure consistent environments and smooth deployments. Integrated WordPress sites with third-party systems such as amoCRM, enabling seamless data exchange and streamlined business processes. Utilized advanced WordPress development features—including custom post types, taxonomies, meta boxes, and user and taxonomy meta fields—to build flexible content management solutions.\n" +
                "Extensively used WordPress actions and filters to customize core functionality while maintaining site stability and upgrade compatibility. Provided ongoing support and maintenance for more than 20 WooCommerce eCommerce websites, managing plugin updates, troubleshooting issues, and optimizing performance to ensure reliable user experiences. Collaborated with cross-functional teams to deliver projects on schedule, adhering to coding standards and best practices."
        },
        {
            company_name:"Freelance",
            title:"Freelance wordpress",
            skills:["jQuery","CSS","HTML","PHP","PSD to Wordpress","Wordpress theme development"],
            date_info:"March 2013 - May 2014",
            description:"Gained hands-on experience working on the front-end development of 10 WordPress websites over the course of one year. Collaborated on implementing responsive layouts, customizing themes, and enhancing site usability using HTML, CSS, and JavaScript. Developed a foundational understanding of PHP by assisting in theme modifications and minor back-end adjustments, supporting seamless integration between design and functionality."
        },
        // {
        //     company_name:"",
        //     title:"",
    // skills:"",
        //     date_info:"",
        //     description:""
        // },
        // {
        //     company_name:"",
        //     title:"",
        // skills:"",
        //     date_info:"",
        //     description:""
        // },
        // {
        //     company_name:"",
        //     title:"",
        //     date_info:"",
        //     description:""
        // }
    ]
}))
