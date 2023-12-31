import java.util.Arrays;
import java.util.Random;

class Shuffle
{
  public static void swap(int nums[])
  {
    for (int i = nums.length - 1; i >= 1; i--)
     {
       Random rand = new Random();
       
       int j = rand.nextInt(i + 1);
       swap_elements(nums, i, j);
     }
   }
  
  private static void swap_elements(int[] nums, int i, int j) 
    {
	int temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
     }
	
     public static void main (String[] args)
      {
	int[] nums = { 1, 2, 3, 4, 5, 6,7};
        System.out.println("Original Array: "+Arrays.toString(nums));
	  swap(nums);
	System.out.println("Shuffled Array: "+Arrays.toString(nums));
       }
}
