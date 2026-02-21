#include <stdio.h>
int main(){
	int a,i,pinpoint,pinpoint_2;
	int largest=0;
	int largest2=0;
	printf("Enter the number of elements that you want to be in your array.\n");
	scanf("%d",&a);
	
	int array[a];
	for(i=0;i<a;i++){
		printf("Enter the value of %dth number.",i);
		scanf("%d",&array[i]);
		if(array[i]>largest){
			largest=array[i];
		}
	}
	for(i=1;i<=a;i++){
		if(array[i]>largest2 && largest>array[i]){
			largest2=array[i];
		}
		
		
	}
	
	
	printf("Numbers that are entered at the array are:");
	for(i=0;i<a;i++){
		printf("%d",array[i]);
		printf(" "); }
	
	printf("\nThe largest number in array is %d",largest);
	printf("\nThe second largest number in array is %d",largest2);
	printf("\n");
	printf("My Name:  Koray\nMy SurName:  ATALAY\nMy School Number:  220201408");
	return 0;
}



