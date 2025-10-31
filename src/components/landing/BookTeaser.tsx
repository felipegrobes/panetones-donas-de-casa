import { Check } from "lucide-react";
import Image from "next/image";

const bookItems = [
    {
        text: "Panetones de Frutas Cristalizadas Gourmet",
        image: "/images/frutas.webp",
    },
    {
        text: "Panetones de Chocolate Gourmet",
        image: "/images/chocolate.webp",
    },
    {
        text: "Panetones Rellenos Gourmet",
        image: "/images/relleno.webp",
    },
];

export function BookTeaser() {
  return (
    <section id="book-teaser" className="py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl text-balance">
          Mira una parte de lo que recibirás en los libros:
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {bookItems.map((item, index) => (
            <div key={index} className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <Image src={item.image} alt={item.text} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex gap-3 items-start">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-500/90 text-white mt-1">
                            <Check className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-semibold text-white text-left">{item.text}</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xl font-semibold text-foreground/90">
            Y mucho más...
        </p>
      </div>
    </section>
  );
}
