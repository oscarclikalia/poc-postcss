import { ChildComponent } from "./_components/ChildComponent/ChildComponent";
import { ParentComponent } from "./_components/ParentComponent/ParentComponent";

export default function PlayGroundPage() {
  return (
    <div>
      <p>
        No hay conflictividad de clases entre compomentes padres e hijos. Ambos
        containers tienen una clase 'container'
      </p>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </div>
  );
}
