import java.util.*;

class input {
    
    public static void main(String[] args) {
        double x, y, sum;
    Scanner myNum = new Scanner(System.in); 
    System.out.println("Type a number:");
    x = myNum.nextDouble(); 
    System.out.println("Type another number:");
    y = myNum.nextDouble(); 
    sum = x + y; 
    System.out.println("Sum is: " + sum); 
    myNum.close(); 
  }
}