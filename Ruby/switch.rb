puts "Enter a number:"
n = gets.chomp.to_i

case
when n == 0
	puts "Number is zero"
when n%2 == 0
	puts "Number is Even"
else
	puts "Number is Odd"
end


