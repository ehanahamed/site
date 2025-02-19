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
