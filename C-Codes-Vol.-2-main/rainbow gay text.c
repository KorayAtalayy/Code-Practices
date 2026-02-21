#include<stdio.h>
#include<string.h>

int square_of_num(int **number);

int main()
{
	int i, j, count;
	char gay_text[130];
	fgets(gay_text, sizeof(gay_text), stdin);
	gay_text[strcspn(gay_text, "\n")] = '\0';
	for(j = 31, i = 0, count = 0; (gay_text[i] != '\0' && count != strlen(gay_text)); i++, j++)
	{
		if(i != strlen(gay_text) - 1)
		{
			printf("\033[%dm%c\033[0m", j, gay_text[i]);  // Print colorful text
			if(j >= 36)
			{
				j = 30;
			}
		}
		else if(i == strlen(gay_text) - 1)
		{
			printf("\033[%dm%c\033[0m\n", j, gay_text[i]); 
			i = count;
			j = count + 31;
			if(j >= 36)
			{
				j = 31;
			}
			count++;
		}
	}
	
	char names[10][100], text_after_command[100][100];
	char *comma_seperator[10], *semicolonPos; 
	//printf("Enter 10 name:");
	for(i = 0; i<10; i++)
	{
		fgets(names[i], sizeof(names[i]), stdin);
		names[i][strcspn(names[i], "\n")] = '\0';
		
		semicolonPos = strchr(names[i], ',');
        semicolonPos++;
        strcpy(text_after_command[i], semicolonPos);
		
		printf("%s\n", text_after_command[i]);
		comma_seperator[i] = strtok(names[i], ",");
		printf("%s\n", names[i]);
		strcat(comma_seperator[i], ",");
		printf("%s\n\n", comma_seperator[i]);
		
		while(i<10)
		{
			semicolonPos = strchr(text_after_command[i], ',');
			if(semicolonPos == NULL)
			{
				break;
			}
	        semicolonPos++;
	        strcpy(text_after_command[i + 1], semicolonPos);
	
			printf("%s\n", text_after_command[i + 1]);
			comma_seperator[i + 1] = strtok(text_after_command[i], ",");
			printf("%s\n", text_after_command[i]);
			strcat(comma_seperator[i + 1], ",");
			printf("%s\n\n", comma_seperator[i + 1]);
			i++;
		}
	}
	int a = 15;
	int *num = &a; printf("Enter num:"); /*scanf("%d", &num);*/ square_of_num(&(*num));
	printf  ("once sayi = %d\n", num)    ;  square_of_num ( &num ) ;  printf  ( "sonra sayi = %d"  ,   num )   ;   return    0     ;
	//printf("huso\")\;");
}

int square_of_num(int **number)
{
	*(*number) = (*(*number)) * (*(*number));
	return (*number);
}
