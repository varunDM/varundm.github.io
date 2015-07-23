class Box
	
	def initialize(w,h)
		@width, @height = w, h
	end
	
	def getArea
		getWidth() * getHeight()
	end
	
	def getWidth
		@width
	end
	private :getWidth
	
	def getHeight
		getWidth()
		#@height
	end
	
	def printArea
		@area  = getWidth() * getHeight()
	end

end


box = Box.new(2,3)

a = box.getArea()
puts "Area: #{a}"
w= box.getHeight()
puts w
