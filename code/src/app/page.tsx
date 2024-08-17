import BikeList from "@/components/layout/BikeList";
import { getAllBikes } from "@/services/bike";

export default async function Home() {
  const bikes = await getAllBikes();

  return (
    <main>
      <BikeList initialBikes={bikes} />
    </main>
  );
}
