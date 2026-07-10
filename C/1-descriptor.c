#include <stdio.h>

typedef struct {
  const char *name;
  size_t size;
} Class;

typedef struct {
  int id;
} User;

Class createClass(const char *name, size_t size) {
  return (Class){ name, size };
}

int main(void) {
  Class UserClass = createClass("User", sizeof(User));

  printf("%s\n", UserClass.name); // User
  printf("%zu\n", UserClass.size); // sizeof(User)

  return 0;
}
