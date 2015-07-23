puts "Enter first number"
a = gets.chomp.to_i
puts "Enter second number :"
b = gets.chomp.to_i

if a > b
	puts "#{a} is greater than #{b}"
elsif a < b
	puts "#{a} is less than #{b}"
else
	puts "Both are equal"
end
