#include <stdio.h>
#include <string.h> 
#define length 50 	//sentence dizisinin uzunluðu
int main(){
	char sentence[length];
	int i,count=0,count_2=0;
	
	printf("Enter the prompt that you wanna check... \n");
	scanf("%c",&sentence[50]);
	fgets(sentence, length, stdin);		//registering the prompt.
	printf("\n");
	
	
	for(i=0;i<50;i++){
		if(sentence[i]==40){
			count++;
		}
		if(sentence[i]==41){
			count_2++;
		}		
	}

	printf("Number of '(' in this prompt: %d \nNumber of ')' in this prompt: %d\n",count,count_2);
	return 0;
}
