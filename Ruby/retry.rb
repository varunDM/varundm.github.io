fname = "tes.txt"
begin
	file = open(fname)
	if file
		puts "File opened successfully"
	end
rescue
	puts "rechecking.."
	fname = "test.txt"
	retry
end

