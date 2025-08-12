import React from "react";
import { attributes } from "../../content/compositions.md";

interface Composition {
  title: string;
}

interface CompositionsAttributes {
  header: string;
  description?: string;
  compositions: Composition[];
  layout?: string;
  showDescription?: boolean;
  containerStyle?: string;
  scrollHeight?: string;
}

const Compositions = () => {
  const { 
    header, 
    description,
    compositions,
    showDescription = false,
    containerStyle = "card",
    scrollHeight = "96"
  } = attributes as CompositionsAttributes;
  return (
    <section id="compositions" className="section-padding bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {header}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          {showDescription && description && (
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors h-96">
          <div className="h-full overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
            {compositions.map((composition, index) => (
              <div 
                key={index} 
                className="group px-8 py-6 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <h3 className="text-xl font-medium text-neutral dark:text-gray-200 group-hover:text-primary transition-colors duration-200 flex-1">
                    {composition.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compositions;
