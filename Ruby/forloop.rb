count = [1, 2, 3, 4, 5]

puts "Using For"
for i in count
	puts "#{i}"
end

puts "Using each"
count.each do |i|
	puts "#{i}"
end

count.each {|i| puts "#{i}"}

elements = []

(0..100).each do |i|
	elements.push(i)
end

puts "Contents of elements"
elements.each do |i|
	puts "#{i}"
end
