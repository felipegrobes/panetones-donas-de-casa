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
    <section id="book-teaser" className="py-16 sm:py-24 bg-primary/5">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl text-balance">
          Mira una parte de lo que recibirás en los libros:
        </h2>
        <div className="mx-auto mt-12 max-w-4xl">
            <ul className="space-y-8 text-left">
                {bookItems.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row items-center gap-6 rounded-lg bg-card p-6 shadow-sm border border-primary/10">
                    <div className="flex-shrink-0">
                        <Image src={item.image} alt={item.text} width={100} height={100} className="rounded-lg object-cover shadow-md" />
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600 mt-1">
                            <Check className="h-5 w-5" />
                        </div>
                        <span className="text-xl text-foreground/80">{item.text}</span>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        <p className="mt-8 text-xl font-semibold text-foreground/90">
            Y mucho más...
        </p>
      </div>
    </section>
  );
}
