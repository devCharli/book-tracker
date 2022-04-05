import UseTheme from "../hooks/UseTheme";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

export default function Form() {
  const { isEditing } = UseTheme();

  return <>{isEditing ? <EditForm /> : <AddForm />}</>;
}
