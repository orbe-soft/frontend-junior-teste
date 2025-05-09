import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { order } from "../main/main";

interface BsSelectProps {
  state: order | undefined;
  setOrder: (order: order) => void;
}

export function BsSelect({ state, setOrder }: BsSelectProps) {
  return (
    <Select value={state} onValueChange={(value) => setOrder(value as order)}>
      <SelectTrigger className="w-auto min-w-52">
        <SelectValue placeholder="Organizar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="DESC">Preço: Maior - menor</SelectItem>
          <SelectItem value="ASC">Preço: Menor - maior</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
