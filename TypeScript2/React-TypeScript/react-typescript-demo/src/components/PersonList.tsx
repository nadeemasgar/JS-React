// Typing an array of objects
import { Name } from "./Person.types";
type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <h2 key={index}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
