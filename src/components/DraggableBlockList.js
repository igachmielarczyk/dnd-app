import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "react-bootstrap";

const DraggableBlockList = ({name, id,}) => {
  const { attributes,
    listeners,
    setNodeRef,
    transform,
    transition 
  } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card body className="app-card m-3">
        {name}
      </Card>
    </div>
  );
};

export default DraggableBlockList;
