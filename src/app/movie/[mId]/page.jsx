import NavbarComponent from "@/components/NavbarComponent";
import { getMovieById } from "@/service/movie-service";
import React from "react";

const MoiveDetail = async ({ params }) => {
  const data = await getMovieById(params.mId);
  const date = new Date(data.payload.posted_at);

  return (
    <div className="bg-red-950 h-screen">
      <NavbarComponent />
      <div className="h-[80%] mx-10 mt-5 flex">
        <figure className="w-[70%] rounded-box bg-white">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={
              data.payload.image != ""
                ? data.payload.image
                : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
            alt="Album"
          />
        </figure>
        <div className="text-white w-[30%] pl-10 leading-7">
          <div>
            <h2 className="card-title line-clamp-1 text-2xl font-bold">
              {data.payload.director}
            </h2>
            <p>
              {data.payload.runtime}
              {` minutes`}
            </p>
            <p className="italic font-sans">{data.payload.genre}</p>
            <p>{data.payload.rating}</p>
          </div>
          <div className="text-white pt-10">
            <h2 className="card-title line-clamp-1 text-2xl font-bold">
              {data.payload.movie_title} {`( ${data.payload.released_year} )`}
            </h2>
            <p className="line-clamp-[9] leading-8">
              {data.payload.description}
            </p>
          </div>
          <div className="pt-14">
            <p>{` ${date.toLocaleString()}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiveDetail;
