import { useGetProductField } from "@/api/useGetProduct.Field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersTypes } from "@/types/filters";

//type

type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void;
};

export function FilterOrigin(props: FiltersOriginProps) {
  const { setFilterOrigin } = props;
  const { result, loading }: FiltersTypes = useGetProductField();

  return (
    <div className="my-5">
      <p className=" mb-3 font-bold">Origen</p>
      {loading && result == null && <p>Cargando origen ...</p>}
      <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
        {result !== null &&
          result.schema.attributes.origin.enum.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
}
