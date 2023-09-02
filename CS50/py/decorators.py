def announce(f):
    def wrapper():
        print("About to run the function")
        f()
        print("Done running the function")
    return wrapper

@announce #Adds the decorator "announce" to the hello function
def hello():
    print("Hello, World!")

hello()