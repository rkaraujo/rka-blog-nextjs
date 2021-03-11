---
title: Abstract classes in Python
date: "2021-03-10T21:45:00"
description: How to create abstract classes, abstract subclasses and abstract methods in Python
---

To create abstract classes in Python you can use a helper class called `ABC`. For what I understood from the [documentation](https://docs.python.org/3/library/abc.html), this name stands for Abstract Base Class. An example would be like this:

```
from abc import ABC

class AbstractFirstClass(ABC):
    pass
```

After having an abstract class, you will want an abstract method. For this you use a decorator called @abstractmethod:

```
from abc import ABC, abstractmethod

class AbstractFirstClass(ABC):

    @abstractmethod
    def get_world(self):
      pass

    @abstractmethod
    def get_message(self):
      pass

    def hello(self):
      msg = self.get_message()
      print(msg)
```

If you need an abstract subclass you don't need to do anything extra, just inherit the abstract super class.

```
class AbstractSecondClass(AbstractFirstClass):

    def get_message(self):
      return f'Hello {self.get_world()}'

    def hello(self):
      msg = self.get_message()
      print(msg)
```

In this example, as not all inherited abstract methods have an implementation, this subclass is also abstract.

And now a concrete (not abstract subclass), it implements the remaining abstract method:

```
class ThirdClass(AbstractSecondClass):

    def get_world(self):
      return 'World'
```
