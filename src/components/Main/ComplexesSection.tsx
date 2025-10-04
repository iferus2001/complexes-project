// ComplexesSection.tsx
import { useState, useEffect } from "react";

import { useRef } from "react";
import { getComplexesType, complexes } from "../Card/complexes";
import { Card } from "../Card/Card";
import { Filter } from "./CardFilters.tsx";
import type { ComplexType, Complexes } from "../Card/types";

const INITIAL_ITEMS = 6;

export function ComplexesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [allComplexes, setAllComplexes] = useState<Complexes>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [activeType, setActiveType] = useState<string>("Усі");
  const [itemsToShow, setItemsToShow] = useState<number>(INITIAL_ITEMS);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedComplexes = await complexes();
        const fetchedTypes: ComplexType[] = await getComplexesType();

        setAllComplexes(fetchedComplexes);
        setTypes(["Усі", ...fetchedTypes]);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredComplexes =
    activeType === "Усі"
      ? allComplexes
      : allComplexes.filter((building) => building.type === activeType);

  const displayedComplexes = filteredComplexes.slice(0, itemsToShow);

  const handleTypeChange = (type: string) => {
    setActiveType(type);
    setItemsToShow(INITIAL_ITEMS);
  };

  const handleLoadMore = () => {
    setItemsToShow(filteredComplexes.length);
  };

  // Новая функция для сброса состояния
  const handleHideAll = () => {
    setItemsToShow(INITIAL_ITEMS);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const hasMore = displayedComplexes.length < filteredComplexes.length;
  // Новое условие для кнопки "Скрыть"
  const showHideButton = !hasMore && filteredComplexes.length > INITIAL_ITEMS;

  return (
    <div ref={sectionRef}>
      <h2 className="font-medium text-5xl text-nowrap max-sm:text-wrap max-sm:text-center">
        Збудовані обʼєкти
      </h2>
      <Filter
        types={types}
        activeType={activeType}
        onTypeChange={handleTypeChange}
      />
      <div className="mt-20">
        <Card buildings={displayedComplexes} />
      </div>
      <div className="text-center mt-25">
        {/* Кнопка "Завантажити ще" */}
        {hasMore && (
          <button
            onClick={handleLoadMore}
            className="relative font-medium cursor-pointer after:block after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300
            hover:after:scale-x-105
"
          >
            <div className="flex gap-4 items-center">
              Завантажити ще
              <img src="./icon.svg" />
            </div>
          </button>
        )}
        {/* Кнопка "Скрыть" */}
        {showHideButton && (
          <button
            onClick={handleHideAll}
            className="relative font-medium cursor-pointer
            after:block after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300
            hover:after:scale-x-100
"
          >
            Cховати всі
          </button>
        )}
      </div>
    </div>
  );
}
