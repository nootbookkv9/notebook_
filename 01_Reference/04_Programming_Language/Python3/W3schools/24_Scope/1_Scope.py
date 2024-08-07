# Scope =======================================

# ---------------------------------------------
# Local Scope
# A variable created inside a function is available inside that function:

def myfunc():
  x = 300
  print(x)

myfunc()

""" Out: 
300
"""
# ---------------------------------------------
# Function Inside Function
# The local variable can be accessed from a function within the function:

def myfunc():
  x = 300
  def myinnerfunc():
    print(x)
  myinnerfunc()

myfunc()

""" Out: 
300
"""
# ---------------------------------------------
# Global Scope
# A variable created outside of a function is global and can be used by anyone:

x = 300

def myfunc():
  print(x)

myfunc()

print(x)

""" Out: 
300
300
"""
# ---------------------------------------------
# Naming Variables
# The function will print the local x, and then the code will print the global x:

x = 300

def myfunc():
  x = 200
  print(x)

myfunc()

print(x)

""" Out: 
200
300
"""
# ---------------------------------------------
# Global Keyword
# If you use the global keyword, the variable belongs to the global scope:

def myfunc():
  global x
  x = 300

myfunc()

print(x)

""" Out: 
300
"""
# ---------------------------------------------
# To change the value of a global variable inside a function, refer to the variable by using the global keyword:

x = 300

def myfunc():
  global x
  x = 200

myfunc()

print(x)

""" Out: 
200
"""
# ---------------------------------------------
# Nonlocal Keyword

def myfunc1():
  x = "Jane"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1())

""" Out: 
hello
"""
