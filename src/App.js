import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { data } from "./data";
import DraggableBlockList from "./components/DraggableBlockList";


function App() {
  const [heroes, setHeroes] = useState(data);

  const handleDragEnd = (event) => {
    const {active, over} = event;

    if (active.id === over.id) {
      return;
    }
    setHeroes((heroes) => {
      const oldIndex = heroes.findIndex((hero) => hero.id === active.id);
      const newIndex = heroes.findIndex((hero) => hero.id === over.id);
      return arrayMove(heroes, oldIndex, newIndex);
    });
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container
        fluid
        className="main text-center d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="h1-app">Marvel's Heroes</h1>
        <div className="list text-center p-2">
          
          <SortableContext
            items={heroes}
            strategy={verticalListSortingStrategy}
          >
            {heroes.map(hero => <DraggableBlockList key={hero.id} name={hero.name} id={hero.id}/>)}

          </SortableContext>
        </div>
      </Container>
    </DndContext>
  );
}

export default App;
