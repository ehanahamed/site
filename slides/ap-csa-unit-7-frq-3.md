---
theme: default
title: AP CSA Unit 7 FRQ 3
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
fonts:
    sans: Nunito
    mono: Fira Mono
---

AP CSA Unit 7 FRQ 3

Part (a)
```java
public int countElectronicsByMaker(String maker) {
    int count = 0;
    for (Gizmo purchase : purchases) {
        if (purchase.isElectronic() && maker.equals(purchase.getMaker())) {
            count++;
        }
    }
    return count;
}
```

Part (b)
```java
public boolean hasAdjacentEqualPair() {
    for (int index = 1; index < purchases.size(); index++) {
        if (purchases.get(index - 1).equals(purchases.get(index))) {
            return true;
        }
    }
    return false;
}
```

---

Part (a)
```java {all|2|3,7|3,5,7|2-3,5,7-8}
public int countElectronicsByMaker(String maker) {
    int count = 0;
    for (Gizmo purchase : purchases) {
        if (purchase.isElectronic() && maker.equals(purchase.getMaker())) {
            count++;
        }
    }
    return count;
}
```
---

Part (a)
```java {1,4,6|1,4-6|all}
public int countElectronicsByMaker(String maker) {
    int count = 0;
    for (Gizmo purchase : purchases) {
        if (purchase.isElectronic() && maker.equals(purchase.getMaker())) {
            count++;
        }
    }
    return count;
}
```

---

Part (a)
````md magic-move
```java
public int countElectronicsByMaker(String maker) {

}
```

```java
public int countElectronicsByMaker(String maker) {
    for (Gizmo purchase : purchases) {

    }
}
```


```java
public int countElectronicsByMaker(String maker) {
    for (Gizmo purchase : purchases) {
        // each element is `purchase`
    }
}
```

```java
public int countElectronicsByMaker(String maker) {
    for (int index = 0; index < purchases.size(); index++) {
        // each element is `purchases.get(index)`
    }
}
```

```java
public int countElectronicsByMaker(String maker) {
    for (int index = 0; index < purchases.size(); index++) {
        // each element is `purchases.get(index)`
        // NOT purchases[index]
    }
}
```

```java
public int countElectronicsByMaker(String maker) {
    for (Gizmo purchase : purchases) {
        // purchase
    }
}
```
````
