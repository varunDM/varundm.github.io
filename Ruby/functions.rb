def func_print(arg1, arg2)
	puts "arg1: #{arg1}, arg2: #{arg2}"
end

def sum(a, b)
	return a + b
end

puts "Enter first number"
a = gets.chomp.to_i
puts "Enter second number"
b = gets.chomp.to_i

func_print(a,b)

sum = sum(a,b)

puts "Sum is #{sum}"
