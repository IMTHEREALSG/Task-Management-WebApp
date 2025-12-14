
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }


// Interface vs Type Alias
// An interface can be extended and implemented, while a type alias cannot be implemented but can use intersection types to combine multiple types.
// Interfaces can be reopened and extended in multiple declarations, while type aliases are closed after their initial definition.

export interface User {
  id: string;
  name: string;
  avatar: string;
}
