import React from 'react'
import NewsCard from '../admin/News'

const HomeNews = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <NewsCard />
      </div>

    </>
  );
}

export default HomeNews