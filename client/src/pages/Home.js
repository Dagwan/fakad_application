import React from 'react';
import Head from 'next/head';
import styles from './styles/Home.module.css';
import Header from './components/Header';
import Footer from './components/Footer';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Handcrafted Haven</title>
                <meta name="description" content="A marketplace for artisans to showcase and sell their handcrafted items." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <h1>Welcome to Handcrafted Haven</h1>
                    <p>Your destination for unique, handmade treasures from local artisans.</p>
                    <button className={styles.ctaButton}>Shop Now</button>
                </section>

                {/* Featured Products Section */}
                <section id="featured-products">
                    <h2>Featured Products</h2>
                    <div className={styles.productGrid}>
                        <div className={styles.productCard}>
                            <img src="/images/product1.jpg" alt="Handmade Pottery" />
                            <h3>Handmade Pottery</h3>
                            <p>Beautifully crafted pottery for your home.</p>
                            <button className={styles.ctaButton}>View Product</button>
                        </div>
                        <div className={styles.productCard}>
                            <img src="/images/product2.jpg" alt="Handwoven Basket" />
                            <h3>Handwoven Basket</h3>
                            <p>Eco-friendly baskets made with love.</p>
                            <button className={styles.ctaButton}>View Product</button>
                        </div>
                        <div className={styles.productCard}>
                            <img src="/images/product3.jpg" alt="Artisan Jewelry" />
                            <h3>Artisan Jewelry</h3>
                            <p>Unique pieces that tell a story.</p>
                            <button className={styles.ctaButton}>View Product</button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section id="why-choose-us" className={styles.whySection}>
                    <h2>Why Choose Handcrafted Haven?</h2>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyCard}>
                            <h3>Support Local Artisans</h3>
                            <p>Your purchase helps sustain the livelihoods of talented creators in your community.</p>
                        </div>
                        <div className={styles.whyCard}>
                            <h3>Unique, One-of-a-Kind Products</h3>
                            <p>Each item is crafted with care, ensuring that you receive something truly special.</p>
                        </div>
                        <div className={styles.whyCard}>
                            <h3>Sustainable & Eco-Friendly</h3>
                            <p>We prioritize sustainable practices to protect our planet.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className={styles.callToAction}>
                    <h2>Join Our Community</h2>
                    <p>Sign up today to get exclusive access to new products and artisan stories!</p>
                    <button className={styles.ctaButton}>Sign Up Now</button>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className={styles.testimonials}>
                    <h2>What Our Customers Say</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <p>"I absolutely love the handmade jewelry I purchased! It’s so unique!"</p>
                            <h4>- Sarah M.</h4>
                        </div>
                        <div className={styles.testimonialCard}>
                            <p>"The quality of the pottery is outstanding. I will be back for more!"</p>
                            <h4>- John D.</h4>
                        </div>
                        <div className={styles.testimonialCard}>
                            <p>"Shopping from local artisans makes me feel good, and I love my new basket!"</p>
                            <h4>- Emily R.</h4>
                        </div>
                    </div>
                </section>

                {/* Blog/News Section */}
                <section id="blog" className={styles.blogSection}>
                    <h2>From Our Blog</h2>
                    <div className={styles.blogGrid}>
                        <div className={styles.blogCard}>
                            <img src="/images/blog1.jpg" alt="Artisan Spotlight" />
                            <h3>Spotlight on Local Artisans</h3>
                            <p>Learn more about the talented individuals behind our products.</p>
                            <button className={styles.ctaButton}>Read More</button>
                        </div>
                        <div className={styles.blogCard}>
                            <img src="/images/blog2.jpg" alt="Sustainable Practices" />
                            <h3>Sustainable Practices in Crafting</h3>
                            <p>Discover how artisans are embracing sustainability.</p>
                            <button className={styles.ctaButton}>Read More</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
