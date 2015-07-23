class AI
	def initialize()
		@name = "Eve"
	end
	attr_reader :name
	def hello()
		puts "Hi, I am #{@name}"
	end
end

inst = AI.new()
inst.hello()
puts AI::name
