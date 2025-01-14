// src/components/LinkedInPosts/LinkedInPosts.jsx

import React, { useEffect, useState } from 'react';
import './LinkedInPosts.css';

const LinkedInPosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const fetchLinkedInPosts = async () => {
        const accessToken = "YOUR_ACCESS_TOKEN";  // Replace with your LinkedIn API token
        const orgId = "YOUR_ORG_ID";              // Replace with your LinkedIn Organization ID
        const apiUrl = `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:${orgId}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'X-Restli-Protocol-Version': '2.0.0'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const data = await response.json();
            setPosts(data.elements);
        } catch (error) {
            console.error('Error fetching LinkedIn posts:', error);
            setError('Failed to load posts');
        }
    };

    useEffect(() => {
        fetchLinkedInPosts();
    }, []);

    return (
        <div className="linkedin-posts-container">
            <h2>Latest LinkedIn Posts</h2>
            {error && <p>{error}</p>}
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div key={index} className="linkedin-post">
                        <p>{post.text?.text || 'No text available'}</p>
                        {post.content?.contentEntities?.[0]?.thumbnails?.[0]?.resolvedUrl && (
                            <img 
                                src={post.content.contentEntities[0].thumbnails[0].resolvedUrl} 
                                alt="Post Thumbnail" 
                                className="post-image" 
                            />
                        )}
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
};

export default LinkedInPosts;
