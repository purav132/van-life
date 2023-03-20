import React from "react";
import reviewPic from "../../assets/images/reviews.png";
import { StarFilled } from "@ant-design/icons";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  const reviewComponent = reviewsData.map((data) => {
    const stars = [...Array(data.rating)];
    // console.log(stars);
    const starComponent = stars.map((_, i) => {
      return <StarFilled key={i} style={{ color: "#FF8C38" }} />;
    });

    return (
      <div key={data.id} className="reviews-component">
        {starComponent}
        <div>
          <h3>{data.name}</h3>
          <span>{data.date}</span>
        </div>
        <p>{data.text}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="reviews">
      <div className="reviews-heading">
        <h1>Your reviews</h1>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img src={reviewPic} alt="review" />
      <h3>Reviews ({reviewsData.length})</h3>
      {reviewComponent}
    </div>
  );
}
