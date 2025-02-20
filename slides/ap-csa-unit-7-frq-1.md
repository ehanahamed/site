---
# You can also start simply with 'default'
theme: default
# some information about your slides (markdown enabled)
title: AP CSA Unit 7 FRQ 1 Delimiters
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
fonts:
    sans: Nunito
    mono: Fira Mono
---

AP CSA Unit 7 FRQ 1

Solution for part (a)
```java
public ArrayList<String> getDelimitersList(String[] tokens) {
    ArrayList<String> delimitersList = new ArrayList<String>();
    for (String token : tokens) {
        if (openDel.equals(token) || closeDel.equals(token)) {
            delimitersList.add(token);
        }
    }
    return delimitersList;
}
```

---

Part (a)
```java {3,7}
public ArrayList<String> getDelimitersList(String[] tokens) {
    ArrayList<String> delimitersList = new ArrayList<String>();
    for (String token : tokens) {
        if (openDel.equals(token) || closeDel.equals(token)) {
            delimitersList.add(token);
        }
    }
    return delimitersList;
}
```

---

Solution for part (b)
```java
public boolean isBalanced(ArrayList<String> delimiters) {
    int currentOpenDels = 0;
    for (String delimiter : delimiters) {
        if (openDel.equals(delimiter)) {
            currentOpenDels++
        }
        if (closeDel.equals(delimiter)) {
            if (currentOpenDels > 0) {
                currentOpenDels--;
            } else {
                return false;
            }
        }
    }
    if (currentOpenDels == 0) {
        return true;
    } else {
        return false;
    }
}
```
