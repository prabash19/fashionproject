import ArrivalsPage from "./arrivals";
import DealsPage from "./deals";
import HomePage from "./homepage";
export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <HomePage />
        <DealsPage />
        <ArrivalsPage />
      </div>
    </>
  );
}
