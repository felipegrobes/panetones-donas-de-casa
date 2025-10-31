import { Check } from "lucide-react";

const bookItems = [
    "Panetones de Frutas Cristalizadas Gourmet",
    "Panetones de Chocolate Gourmet",
    "Panetones Rellenos Gourmet",
];

export function BookTeaser() {
  return (
    <section id="book-teaser" className="py-16 sm:py-24 bg-primary/5">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
          Mira una parte de lo que recibirás en los libros:
        </h2>
        <div className="mx-auto mt-8 max-w-md">
            <ul className="space-y-4 text-left">
                {bookItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600 mt-1">
                        <Check className="h-4 w-4" />
                    </div>
                    <span className="text-lg text-foreground/80">{item}</span>
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
