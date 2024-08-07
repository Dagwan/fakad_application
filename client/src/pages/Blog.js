import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../components/Blog.css";
import BackToTopButton from './BackToTop';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const articlesRef = useRef([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://content.guardianapis.com/search', {
          params: {
            'api-key': 'a5392e5d-7ba1-476c-a88f-7e84d16b0023',
            'show-fields': 'all',
            'page-size': 36
          },
        });
        setArticles(response.data.response.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    articlesRef.current.forEach((article) => {
      if (article) {
        observer.observe(article);
      }
    });

    return () => {
      if (articlesRef.current) {
        articlesRef.current.forEach((article) => {
          if (article) {
            observer.unobserve(article);
          }
        });
      }
    };
  }, [articles]);

  const getRandomAlignment = () => {
    const alignments = ["left", "center", "right"];
    return alignments[Math.floor(Math.random() * alignments.length)];
  };

  return (
    <Layout title="Blog - Fakad Infotech">
      <div className="blog-container">
        <div className="header-container">
          <h1 className="main-heading">Blog News</h1>
          <p className="sub-heading">This page displays news articles using data fetched from <a href="https://www.theguardian.com/" target="_blank" rel="noopener noreferrer">The Guardian API, </a>providing up-to-date information sourced directly from The Guardian's extensive database of news content.</p>
        </div>
        <div className="articles">
          {articles.map((article, index) => {
            const imageAlign = getRandomAlignment();
            const titleAlign = getRandomAlignment();
            const textAlign = getRandomAlignment();
            return (
              <div
                key={article.id}
                className={`article ${imageAlign} ${titleAlign} ${textAlign}`}
                ref={(el) => (articlesRef.current[index] = el)}
              >
                <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
                  <div className="article-image">
                    {article.fields && article.fields.thumbnail && (
                      <img src={article.fields.thumbnail} alt={article.webTitle} />
                    )}
                  </div>
                  <div className="article-content">
                    <h2>{article.webTitle}</h2>
                    <p>{article.fields.trailText}</p>
                    <p className="article-date">{new Date(article.webPublicationDate).toLocaleDateString()}</p>
                    <p className="article-author">{article.fields.byline}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <BackToTopButton />
    </Layout>
  );
};

export default Blog;
