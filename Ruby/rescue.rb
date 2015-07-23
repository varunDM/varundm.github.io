begin
	file = open("tes.txt")
	if file
		puts "File opened successfully"
	end
rescue
	puts "File Can't be opened - custom"
end
