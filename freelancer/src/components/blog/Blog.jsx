import React from "react";
import "./blog.css";

const Blog = () => {
    const blogPosts = [
        {
            title: "Building Empathy: The Key to Better Communication",
            description: "In this insightful article, discover why empathy is an essential component of effective communication. Learn how understanding and sharing the feelings of others can bridge gaps, foster trust, and create meaningful connections in both personal and professional settings. We'll explore practical techniques for developing empathy, such as active listening, perspective-taking, and emotional validation, and how these skills can transform your interactions and relationships."
        },
        {
            title: "How to Write Professional Emails That Get Results",
            description: "Writing professional emails is an art that can significantly impact your career and business success. This blog post offers a comprehensive guide to crafting emails that are clear, concise, and compelling. From subject lines that grab attention to structuring your message for maximum impact, we'll cover all the essential elements. You'll also learn common pitfalls to avoid and tips for ensuring your emails prompt the desired response, whether you're communicating with colleagues, clients, or stakeholders."
        },
        {
            title: "The Power of Body Language in Business",
            description: "Body language is a powerful tool in the business world, often speaking louder than words. In this blog post, we delve into the nuances of non-verbal communication and its impact on professional interactions. Discover how your posture, gestures, facial expressions, and eye contact can influence perceptions and outcomes in meetings, presentations, and negotiations. Learn to read others' body language effectively to gain deeper insights into their thoughts and intentions, and master techniques to project confidence and authority."
        }
    ];

    return (
        <div className="blog">
            <h1 className="section__title">Our Blog</h1>
            <div className="blog__container">
                {blogPosts.map((post, index) => (
                    <div className="blog__post" key={index}>
                        <h2 className="blog__title">{post.title}</h2>
                        <p className="blog__description">{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
