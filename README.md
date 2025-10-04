# css nth-child variables
#### provides every element with their index as a css variable `var(--nth-child)`, starting at 1
this allows you to style child elements based on their order without repeating `nth-child` selectors:
```css
ul > *:nth-child(1) { width: 10px; }
ul > *:nth-child(2) { width: 20px; }
ul > *:nth-child(3) { width: 30px; }
ul > *:nth-child(4) { width: 40px; }
ul > *:nth-child(5) { width: 50px; }
...
```
becomes:
```css
ul > * { width: calc(10px * var(--nth-child)); }
```
Other uses can be, staggered animation-delays or using index for hue making a rainbow of background colors.
<br>

## usage - css only:

The code is very simple, here's `100-vars.css`:
```css
* { --nth-child: var(--_); } /* var(--_) is identical to var(--nth-child), but is not intended to be used directly, its just a shorter intermediate variable for reducing file size */
*:nth-child(1) { --_: 1; }
*:nth-child(2) { --_: 2; }
/* ...96 more...*/
*:nth-child(99) { --_: 99; }
*:nth-child(100) { --_: 100; }
```

Having so many individual rules can make the file relatively big for all it does. [<sup>[see table]</sup>](#file-size-table)  
So there are six different files, containing different max amounts of variables, pick the smallest one that still fits the amount you need.

> [**100-vars.css**](https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/100-vars.css) &nbsp;
[**250-vars.css**](https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/250-vars.css) &nbsp;
[**500-vars.css**](https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/500-vars.css) &nbsp;
[**1000-vars.css**](https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/1000-vars.css) &nbsp;
[**5000-vars.css**](https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/5000-vars.css) &nbsp;
[**10000-vars.css**](https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/10000-vars.css)


Then link the file in your html:
```html
<!-- use a cdn: -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/css/100-vars.css">
<!-- or download the file and use a local path: -->
<link rel="stylesheet" href="./styles/100-vars.css">
```




## usage - javascript
<!-- 
If you want the variables only accessible on certain elements, don't want to worry about picking the right amount of variables, or just want to be more precise, use the js script.


The script looks for elements with the class "nth-var". It finds the one with the largest number of direct children and injects a \<style> tag to the body containing exactly that many ``--nth-child`` variables.  
(These variables are only usable by direct children of elements with the class "nth-var") 

> NOTE: It does NOT watch for changes, if more elements are added it won't make more child variables, use NTH.appendRules() to set the amount manually instead, or just use the prebuilt css files.

### There are also some functions:

`NTH.appendRules(<amount:number>)` - Creates exactly as many rules as specified. (Don't use classes with this)  
`NTH.setName(<name:string>)` - Changes the name of the `--nth-child` variable.  
`NTH.setStart(<start:number>)` - Changes the starting number of the `--nth-child` variable. Default is 1. -->



&nbsp;
https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/js/main.min.js
add the script to your page:
```html
<!-- use a cdn: -->
<script src="https://cdn.jsdelivr.net/gh/awasaka01/css-nth-child-variables@master/js/main.min.js"></script>
<!-- or download the file and use a local path: -->
<script src="./nth-child-variables.js"></script>
```

<br>

---

### file size table
| amount of variables | file name        |     file size |
|--------------------:|:----------------:|--------------:|
| **100**             | `100-vars.css`   | **2.25**   KB | 
| **250**             | `250-vars.css`   | **5.91**   KB |
| **500**             | `500-vars.css`   | **12.01**  KB |
| **1,000**           | `1000-vars.css`  | **24.22**  KB |
| **5,000**           | `5000-vars.css`  | **129.69** KB |
| **10,000**          | `10000-vars.css` | **261.53** KB |

> If you want more variables, use the js script, but be warned it gets big, 100k vars is 2.7 MB, and a whole 29.35 MB for 1 million vars, just for the css file... so I'd recommend rethinking your approach if you have that many child elements.