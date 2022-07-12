import java.util.List;
import java.util.ArrayList;

public class main {
    public static void main(String[] args) {
        Integer[] numbers = {1,3,5,12,34,56,2,4,7};

        maximum(numbers);
    }
    public static Integer maximum(Integer[] numList) {
        int max = 0;
        for (int number: numList){
            if (number > max){
                max = number;
            }
        }
        return max;
    }


    public String printNumberInWord(int num) {
        switch(num){
            case 1:
                System.out.println("ONE");
            case 2:
                System.out.println("TWO");
            case 3:
                System.out.println("THREE");
            case 4:
                System.out.println("FOUR");
            case 5:
                System.out.println("FIVE");
            case 6:
                System.out.println("SIX");
            case 7:
                System.out.println("SEVEN");
            case 8:
                System.out.println("EIGHT");
            case 9:
                System.out.println("NINE");
            default:
                System.out.println("OTHER");
        }
        return null;
    }


    public void checkOddEven (int num) {
        if(num % 2 == 0){
            System.out.println("Odd Number");
        }
        else{
            System.out.println("Even Number");
        }
    }


    public double average(Integer[] numList) {
        int total = 0;
        for(int number: numList){
            total = total + number;
        }
        double average = total / numList.length;
        return average;
    }
}
