'use client';

import { useSelector } from 'react-redux';

const AboutUsPage = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`${
        theme ? 'bg-black text-white' : 'bg-[#efeeee] text-black'
      } h-fit py-10 flex flex-col items-center justify-center`}
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-8 underline underline-offset-4 decoration-[#E00404]">About Us</h1>
        <p className="mb-8">
          Welcome to Readit, your ultimate destination for all things related to books and reading! At Readit, we re passionate about literature and are dedicated to providing book lovers with a platform to discover, explore, and indulge in their love for reading.
        </p>
        <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-[#E00404]">Who We Are</h2>
        <p className="mb-8">
          We are a team of avid readers, writers, and book enthusiasts who came together with a shared vision to create a space where people can connect over their mutual love for books. Our diverse backgrounds and experiences enrich our platform, allowing us to cater to readers of all ages, genres, and interests.
        </p>
        <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-[#E00404]">What We Do</h2>
        <p className="mb-8">
          At Readit, we strive to make your reading experience enjoyable and convenient. Whether you re looking for recommendations, wanting to share your favorite reads, or seeking a cozy corner to immerse yourself in the world of literature, we ve got you covered. Our platform offers a plethora of features and services designed to enhance your reading journey.
        </p>
        <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-[#E00404]">What You Can Do Here</h2>
        <ul className="mb-8 list-disc list-inside">
          <li>Discover New Books: Explore our extensive collection of books across various genres, from classics to contemporary bestsellers.</li>
          <li>Connect with Fellow Readers: Join book clubs, engage in discussions, and connect with like-minded readers from around the globe.</li>
          <li>Share Your Thoughts: Write reviews, rate books, and share your opinions to help other readers discover their next favorite read.</li>
          <li>Purchase Books: Browse our curated selection of books available for purchase and add them to your personal library with just a few clicks.</li>
          <li>Create Your Wishlist: Keep track of books you want to read by creating a wishlist, and receive notifications when they become available.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-[#E00404]">Our Mission</h2>
        <p className="mb-8">
          At Readit, our mission is to foster a vibrant and inclusive community of readers who are passionate about exploring the world through books. We believe in the transformative power of literature and aim to inspire a lifelong love for reading in every individual who visits our platform.
        </p>
        <p className="mb-8">
          Join us on our literary journey, and let s embark on countless adventures through the pages of our favorite books together!
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
