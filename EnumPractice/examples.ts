/*
enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  let move: Direction = Direction.Up;
  
  console.log(move);  // Output: 0 (default value for the first enum member)
  */
 /*
  enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  
  let response: Status = Status.NotFound;
  
  console.log(response);  // Output: 404
*/
/*
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let color: Colors = Colors.Green;

console.log(color);  // Output: "GREEN"
*/
/*
enum Size {
  Small = 1,
  Medium,
  Large
}

let sizeName: string = Size[2];

console.log(sizeName);  // Output: "Medium"
*/
enum Role {
    Admin,
    User,
    Guest
  }
  
  function checkAccess(role: Role) {
    if (role === Role.Admin) {
      console.log("Access granted: Admin");
    } else if (role === Role.User) {
      console.log("Access granted: User");
    } else {
      console.log("Access denied");
    }
  }
  
  checkAccess(Role.Admin);  // Output: Access granted: Admin
  checkAccess(Role.Guest);  // Output: Access denied
  