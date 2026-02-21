#include <stdio.h>
int kup(int x)
{
int k=x*x*x;
return k;
}
int main()
{
int s, kupu;
printf("sayi:");
scanf("%d",&s);
kupu=kup(s);
printf("sayi:%d kupu=%d",s,kupu);
}
