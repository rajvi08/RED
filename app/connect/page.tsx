import PageHero from "@/components/sections/PageHero";
import Connect from "@/components/sections/Connect";

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter — Connect"
        title="In quiet"
        italic="conversation."
        subtitle="A small number of private commissions are accepted each year. Begin with a letter."
        image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=85"
      />
      <Connect />
    </>
  );
}
