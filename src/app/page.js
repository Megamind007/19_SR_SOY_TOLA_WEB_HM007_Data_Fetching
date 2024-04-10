import CardComponent from "@/components/CardComponent";
import GenComponent from "@/components/GenComponent";
import ImageNavComponent from "@/components/ImageNavComponent";
import { getMovieByGenre,getAllMovie } from "@/service/movie-service";

export default async function Home() {
  const data = await getAllMovie();
  const dataGen = [...new Set(data.payload.map((i) => i.genre))];
  return (
    <main className="flex flex-col align-bottom bg-red-950">
      <div className="z-20">
        <ImageNavComponent />
      </div>
      <div className="mt-[640px] ">
        <CardComponent />
        {dataGen.map(async (movie) => {
          const getGenre = await getMovieByGenre(movie);
          return (
            <div>
              <p className="font-bold text-2xl r px-10 pt-10 pb-5 text-white">{`${movie} Movie >`}</p>
              <GenComponent getGenre={getGenre} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
