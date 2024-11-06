"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from './page.module.css';
import right from '../../public/assets/pages/arrow-right.svg';
import left from '../../public/assets/pages/arrow-left.svg';
import Image from "next/image";
import useSwipe from "@/utils/useSwipe";
import useWindowSize from "@/utils/useWindowSize";

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const reviews = [
    {
      text: "A MirAgro Kft.-vel való együttműködésünk rendkívül zökkenőmentes. A versenyképes árak mellett a rugalmas szállítási lehetőségek is nagyban megkönnyítik a dolgunkat. Öröm látni, hogy egy 100%-ban magyar, családi vállalkozás ilyen színvonalas szolgáltatást nyújt!",
      author: "Gábor",
      position: "gazdálkodó",
    },
    {
      text: "Nagyon elégedett vagyok a MirAgro Kft.-vel! Külön öröm számomra a széles termékkínálat, különösen a bio termények miatt. A gyors fizetés és a személyre szabott ajánlatok segítenek, hogy valóban professzionális és rugalmas megoldásokat kapjunk. Csak ajánlani tudom őket!",
      author: "Anikó",
      position: "bio termelő",
    },
    {
      text: "A MirAgro Kft. többgenerációs termelői tapasztalata minden szinten érezhető. A szaktudásuk és elhivatottságuk különösen fontos számomra. Az országos elérhetőség és a családias hozzáállás egyértelműen kitűnő partnerként jellemzi őket a hazai piacon.",
      author: "Tamás",
      position: "agronómus",
    },
  ];

  const { handleTouchStart, handleTouchEnd } = useSwipe(
    () => setCurrentReview((prev) => (prev + 1) % reviews.length),
    () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  );

  const autoSlide = useRef(null);
  const size = useWindowSize();
  const interval = 3000;
  const autoPlayDesktop = true;
  const autoPlayMobile = true;

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlide.current);
  }, [size.width, autoPlayDesktop, autoPlayMobile]);

  const startAutoSlide = () => {
    const shouldAutoPlay = size.width > 768 ? autoPlayDesktop : autoPlayMobile;
    if (shouldAutoPlay) {
      autoSlide.current = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, interval);
    }
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide.current);
  };

  const handleNext = () => {
    setPulseEffect(true);
    setCurrentReview((currentReview + 1) % reviews.length);
  };

  const handlePrev = () => {
    setPulseEffect(true);
    setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (pulseEffect) {
      const timer = setTimeout(() => setPulseEffect(false), 300);
      return () => clearTimeout(timer);
    }
  }, [pulseEffect]);

  const handleReadMore = () => setModalOpen(true);

  return (
    <div
      className={styles.ReviewContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className={styles.ReviewContainerHelper}>

        <div className={styles.h1Container}>
          <h3 className={styles.h1}>Vélemények</h3>
          <div className={styles.line}></div>
        </div> 
       
        <div className={styles.ReviewContainerText}>
          <p className={styles.hederTex}>
            {reviews[currentReview].text.length > 200
              ? `${reviews[currentReview].text.slice(0, 200)}...`
              : reviews[currentReview].text}{" "}
            {reviews[currentReview].text.length > 200 && (
              <span className={styles.readMore} onClick={handleReadMore}>
                tovább olvasom
              </span>
            )}
          </p>
          <div>
            <p className={styles.h2}>{reviews[currentReview].author}</p>
            <p className={styles.hederTex}>{reviews[currentReview].position}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigatorContainer}>
          <div 
            onClick={handlePrev} 
            className={`${styles.imageCircle} ${pulseEffect ? styles.pulse : ""}`}
          >
            <Image
              className={styles.imgArrow}
              src={left}
              alt="Previous"
            />
          </div>
      
          {/* Pagination Indicators */}
          <div className={styles.paginationControls}>
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`${styles.paginationDot} ${currentReview === index ? styles.active : ""}`}
                onClick={() => setCurrentReview(index)}
              ></div>
            ))}
          </div>
          
          <div 
            onClick={handleNext} 
            className={`${styles.imageCircle} ${pulseEffect ? styles.pulse : ""}`}
          >
            <Image
              className={styles.imgArrow}
              src={right}
              alt="Next"
            />
          </div>
        </div>
      </div>

      {/* Modal for Full Review */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <p>{reviews[currentReview].text}</p>
            <button className={styles.btn} onClick={() => setModalOpen(false)}>Bezár</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
