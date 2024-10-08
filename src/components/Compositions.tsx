import React from "react";
import { attributes } from "../../content/compositions.md";

interface Composition {
  title: string;
}

interface CompositionsAttributes {
  header: string;
  compositions: Composition[];
}

const Compositions = () => {
  const { header, compositions } = attributes as CompositionsAttributes;
  return (
    <section id="compositions">
      <h2 className="font-bold text-2xl lg:text-4xl mb-10">{header}</h2>
      <ul className="list-disc">
        {compositions.map((composition, index) => (
          <li key={index}>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {composition.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Compositions;
