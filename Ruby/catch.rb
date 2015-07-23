def prompt
   puts "Enter.."
   res = readline.chomp
   throw :err if res == "!"
end

catch :err do
   puts "Name: "
end
prompt()
