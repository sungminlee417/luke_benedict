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
    <section
      id="compositions"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="font-bold text-2xl lg:text-4xl mb-10">{header}</h2>
      <ul className="flex flex-wrap">
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
