#include <stdio.h>

int main(void)
{
  int ogrencinotu;

  printf("Enter the score ");
  scanf("%d", &ogrencinotu);
  if(ogrencinotu >= 90){       printf("AA");
  }else if(ogrencinotu >= 85){ printf("BA");
  }else if(ogrencinotu >= 80){ printf("BB");
  }else if(ogrencinotu >= 70){ printf("CB");
  }else if(ogrencinotu >= 60){ printf("CC");
  }else if(ogrencinotu >= 50){ printf("DC");
  }else if(ogrencinotu >= 45){ printf("DD");
  }else if(ogrencinotu >= 35){ printf("FD");
  }else if(ogrencinotu >= 0){ printf("FF");
  }else{ 
  printf("Wrong DATA!");
}
  printf("\n");

 if(ogrencinotu >= 60){       printf("Passed\n");
  }else if(ogrencinotu >= 45){ printf("conditionally passed.\n");
  }else{ 
  printf("Failed!\n");
}

  return 0;
}
