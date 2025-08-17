package practice;
//add two binary strings and return binary string answer
public class Question1 {
//approach 1
	class Solution {
	    public String addBinary(String a, String b) {

	// step 1-coverting a string into a number

	int num1 = Integer.parseInt(a);

	int x = num1;

	int num2 = Integer.parseInt(b);

	int y = num2;

	int len1=0;

	while(num1>0)
	{
	    num1=num1/10;
	    len1++;
	}

	int len2=0;

	while(num2>0)
	{
	    num2=num2/10;
	    len2++;
	}

	// step 2-coverting binary into actual number.

	//convert num1 binary to integer
	int A;
	int B=0;//Now B will contain actual value...
	for(int i=0;i<len1;i++)
	{
	    A=x%10;
	    B = B + (A * (int)Math.pow(2, i));
	    x=x/10;
	}

	int C;
	int D=0;// Here D will contain actual value...
	for(int i=0;i<len2;i++)
	{
	    C=y%10;
	    D = D + (C * (int)Math.pow(2, i));
	    y=y/10;
	}

	// step3 Add B and D and store it into a new Integer

	int Sum = B+D;

	//step 4 Convert Sum into Binary and return it
	int remainder;
	String Convert;
	String ans="";
	while(Sum>0)
	{
	    remainder=Sum%2;
	    Convert = Integer.toString(remainder);
	    ans = Convert+ans;
	    Sum=Sum/2;

	}

	// If the string is still empty, it means the sum was 0.
	if (ans.isEmpty()) {
	    return "0";
	}

	return ans;



	    
	    }
	}
	
//approach 2
	class Solution {
	    public String addBinary(String a, String b) {
	        StringBuilder result = new StringBuilder();

	        // Pointers for the end of each string
	        int i = a.length() - 1;
	        int j = b.length() - 1;

	        int carry = 0;

	        // Loop as long as there are digits left in either string OR a carry remains
	        while (i >= 0 || j >= 0 || carry == 1) {
	            int sum = carry;

	            // Add the digit from string 'a' if the pointer is valid
	            if (i >= 0) {
	                sum += a.charAt(i) - '0'; // Subtract '0' to convert char to int
	                i--;
	            }

	            // Add the digit from string 'b' if the pointer is valid
	            if (j >= 0) {
	                sum += b.charAt(j) - '0';
	                j--;
	            }

	            // The new bit for our result is the sum modulo 2
	            result.insert(0, sum % 2);

	            // The new carry is the sum divided by 2
	            carry = sum / 2;
	        }

	        return result.toString();
	    }
	}
	
//approach 3
	
}
