import { getAllMovie, getMovieByGenre } from "@/service/movie-service";
import React from "react";
import Link from "next/link";
import { Carousel, CarouselContent } from "./ui/carousel";
const CardComponent = async () => {
  const data = await getAllMovie();
  return (
    <main>
      {/* All movie */}
      <div className="px-10 rounded-box">
        <p className="font-bold text-2xl text-white">All Movie {" >"}</p>
        <Carousel>
          <div className="carousel carousel-end  w-full gap-5 rounded-box">
            <CarouselContent>
              {data.payload.map((data) => (
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
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default CardComponent;
