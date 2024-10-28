import { FilterOrigin } from "./filter-origin";

type FiltersControlCategoryProps = {
  setFilterOrigin: (origin: string) => void;
};

export function FiltersControlCategory(props: FiltersControlCategoryProps) {
  const { setFilterOrigin } = props;
  return (
    <span className="sm:w-[350px] sm:mt-5">
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </span>
  );
}
