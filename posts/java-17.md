---
title: Java 17 interesting features
date: "2021-09-27T09:30:00"
description: Some of the interesting features in Java 17 to me
---

Java 17 was released this month, September 2021. The most important characteristic about Java 17 to me is that this version is LTS. What LTS stands for? LTS stands for Long Term Support and it means that this version will have bug fixes and little improvements for many years ([Oracle Java Support Roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)). The previous LTS version is Java 11. The intermediary versions help bringing new features to life and refining them until the next LTS.

Now I will show some of the features that caught my attention (I'm considering new features since Java 11):

## Records

If you know Lombok, Records are almost like the @Data in Lombok. Records contain data that are not meant to be changed. Here is an example:

```
public record Car(String model, int year) {}
```

```
var car = new Car("Fiat", 2003);
System.out.println(car.model());
System.out.println(car.year());
System.out.println(car);

var car2 = new Car("Fiat", 2003);
System.out.println(car.equals(car2));

var car3 = new Car("Fusca", 1960);
System.out.println(car.equals(car3));
```

```
// Execution result
Fiat
2003
Car[model=Fiat, year=2003]
true
false
```

## instanceof Pattern matching

Instead of doing this:

```
// Old code
if (o instanceof String) {
    String s = (String) o;
    System.out.println(s.toLowerCase());
}
```

It's possible to do this, no more casting:

```
// New code
if (o instanceof String s) {
    System.out.println(s.toLowerCase());
}
```

## switch Pattern matching

Now it's possible to switch using Object type:

```
static String formatterPatternSwitch(Object o) {
    return switch (o) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case Double d  -> String.format("double %f", d);
        case String s  -> String.format("String %s", s);
        default        -> o.toString();
    };
}
```
