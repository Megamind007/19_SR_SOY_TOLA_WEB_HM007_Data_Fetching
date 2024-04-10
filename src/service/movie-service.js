export const getAllMovie = async () => {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api", {
    caches: "no-store",
  });
  const data = await res.json();
  return data;
};

export const getMovieByGenre = async (genre) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`,
    {
      caches: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
export const getMovieById = async (id) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`,
    {
      caches: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
