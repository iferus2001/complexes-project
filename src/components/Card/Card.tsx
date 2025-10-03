import type { Complexes } from "./types.ts";
type CardProps = {
  buildings: Complexes;
};
export function Card({ buildings }: CardProps) {
  return (
    <article className="grid grid-cols-1 gap-15 md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-15 xl:gap-20 2xl:gap-20 justify-between items-center">
      {buildings.map((building) => (
        <div
          className="h-[640px] sm:h-[700px] md:h-[590px] lg:h-[590px] 2xl:h-[690px] border rounded-sm border-gray-200 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
          key={building.id}
        >
          <div className="px-4 py-4">
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-medium">
                    {building.year} р.
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium border border-gray-400 rounded-full px-2.5 py-1 shadow-sm">
                    {building.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 mb-6">
              <img
                className="w-full h-wull object-cover shadow-sm rounded-sm"
                src={building.img}
                alt={building.name}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{building.name}</h3>
            </div>
            <div className="mt-8">
              <p className="text-xl font-medium">{building.adress}</p>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium mb-2">Пропозиції:</p>
              <div className="flex flex-wrap gap-2">
                {building.tags.map((tag, id) => (
                  <span
                    key={id}
                    className="text-xs font-medium border rounded-full px-3 py-1 shadow-sm text-gray-500 whitespace-nowrap uppercase transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}
