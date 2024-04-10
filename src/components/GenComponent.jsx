import React from "react";
import { Carousel, CarouselContent } from "./ui/carousel";
import Link from "next/link";

const GenComponent = async ({ getGenre }) => {
  return (
    <Carousel>
      <div className="rounded-box mx-10">
        <CarouselContent>
          {getGenre.payload.map((data) => {
            return (
              <Link href={`/movie/${data.movie_id}`}>
                <div
                  key={data.movie_id}
                  className="carousel-item h-80 w-72 ml-5 rounded-box bg-white flex flex-col"
                >
                  <div></div>
                  <div className="p-5 h-56 rounded-box">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        data.image != ""
                          ? data.image
                          : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                      }
                      alt="image"
                    />
                  </div>
                  <div className="px-5 text-black">
                    <p className="font-semibold line-clamp-1">
                      {data.movie_title}
                    </p>
                    <p className="line-clamp-2">{data.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default GenComponent;
