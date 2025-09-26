import React from "react";
import { BlogPost } from "../../types/home.types";
import { useHomeData } from "../../hooks/useHomeData";
import "./BlogComponent.scss";

export type BlogComponentProps = {
  onSelectPost?: (post: BlogPost) => void;
};

const BlogComponent: React.FC<BlogComponentProps> = ({ onSelectPost }) => {
  const { blogPosts, loading } = useHomeData();

  if (loading) {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="loading-placeholder">
            <p>Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="no-posts">
            <p>No blog posts available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div
              className="hero-bubbles"
              role="img"
              aria-label="Decorative brand elements"
            >
              <div
                className="hero-bubble hero-bubble-top"
                role="button"
                tabIndex={0}
                aria-label="Interactive brand bubble - top"
              ></div>
              <div
                className="hero-bubble hero-bubble-bottom"
                role="button"
                tabIndex={0}
                aria-label="Interactive brand bubble - bottom"
              ></div>
            </div>
            <p className="section-title">
              <b>Our Blog </b>& Insightful Posts
            </p>
          </div>
          <div className="col-2">
            <p className="section-subtitle">
              Stay Informed on the <br />
              <b>Latest Insights</b> in Real Estate Development.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="card-wrapper">
            {blogPosts.map((post, index) => {
              const primaryTag =
                post.tags && post.tags.length > 0 ? post.tags[0] : "Blog";
              const cardClass = index === 0 ? "card-left" : "card-right";
              const formattedDate = new Date(post.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              );

              return (
                <div key={post.id} className="card-container">
                  <div
                    className={`card ${cardClass}`}
                    onClick={() => onSelectPost?.(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelectPost?.(post);
                      }
                    }}
                    aria-label={`Read blog post: ${post.title}`}
                  >
                    <div className="card-image">
                      <img
                        src={post.imageUrl || "/img_1.png"}
                        alt={post.title}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/img_1.png";
                        }}
                      />
                      <div className="feature-tag">{primaryTag}</div>
                    </div>
                    <div className="card-content">
                      <p className="card-title">{post.title}</p>
                      <div className="card-date">{formattedDate}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
