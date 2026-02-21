#include <stdio.h>
void fonk(int);
//a func that counts backwards
int main()
{
	int n;
	printf("Enter a positive number.\n");
	scanf("%d",&n);
	fonk(n);
	return 0;
}

void fonk(int i)
{
	printf("Numbers:%d\n",i);
	if(i>1)
	fonk(i-1);
}
