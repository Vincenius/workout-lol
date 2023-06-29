import useSWR from "swr"

const fetcher = (slug) =>
  slug
    ? fetch(`${process.env.NEXT_PUBLIC_API}/api/user/${slug}`).then((res) => res.json())
    : Promise.resolve()

export default function useGetUserBySlug(slug) {
  const {
    data = null,
    error,
    isLoading,
  } = useSWR(`/user/${slug}`, () => fetcher(slug))

  return {
    isLoading,
    isError: error,
    workouts: data ? data.workouts : [],
  }
}
