import { useStore } from "../zustand";

export function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <div>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>clear</button>
    </div>
  );
}
