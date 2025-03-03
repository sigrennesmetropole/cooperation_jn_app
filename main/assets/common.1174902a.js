import { bE as fromString, bw as Style, bF as Icon, bG as VectorStyleItem } from "./vendor.2b7b0c4c.js";
const parkingIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVlSURBVHgBrVdtTFtVGH57216gLSV0QIWVhG0ok6IJMjcWfsiIEk3cPwj+McYRE3+omfHHzIIDZ9AZNUPEmLiIIUY+Bsk00R9jZkQWHRAhZB/GH0ws1JB2gCgtH/26Pu/pvV0hLQW2Jzn33HvOPe/Xed/n3KujnUPHl5aWFq1X4uYUeoDQKYrCSvRoxtLSUhl9OlpGUVER92lqM6rvSJpxuwYrrK6uNrDgnp6eAp/P934gELgWDoddiopIJLLEY4uLi6eGh4dLVaMMO1auesdNKi4uTmNhLFjZJlZWVr5VDeAoSBhKqEe3SSnpAIqGS15aWnojMzPztCRJ1v/8QeofmqKRW176/a9Fcnv9Yk3pvmxy5Fqo9oiD6o8d0OT8i7XnbDbbp3gMIg8i3JIq5uf6+nqpv79fRuias7OzT/Hg4NgsvfXZr8TKt4Ijz0wnGx6PGbC8vHwOOXHW7XYHYUwYPinJFEtIGHliYuIklH7AA+92/kadP/xBOwErfxONsbCwcDonJ6cNt+toMa/18d6iyUiiEqfT2Qnr0s733aAvLt2mnWLktgfRCVB1eQGlp6c/WVFR8X1vb+8iRctN0ZRpMMCyjOnp6QsWi6VhYOgOwnud7gcX3n6Kag8X0vr6+i8w4FkMrXIhcMg5iZgEuNd3dHQ8zEp5jL2NB4cvvrHAVGDD2fO0tLSqpqYmOzsXzV011Lm5uZLX601vbW19yWq1HmNvB4b+3CCk771nyLnPRsV7s+ho2UNUX7OfCnPNSDx3UsXrwTDlZmfQE4/kUFlZWbCrq+sayi2MKeGxDlmsm5+fNyL9n+MFl0cTCxscm6GqVy/RYy/20VdIuLqaA1RZZqetMHLLI3qUZRVCLmO/RZTFBUShR4j1CImTn913fZQKg6Ozorea5C3f45pn6PX6QrCcYXx8XBCUUDw1NSXxICYzxcvT/2wpzGqWqfH5gxsEJ4NGNLIs7wXVMp8LNjOo8zrEXqIUqAMx1KnkwIgmoE4kG4Pzwu1NGS2JE0yQeX5+PoHiYqXFDKRZGo/rqM+23mi2W81GkViVTrugzTYY0Xf2aeTAdxvW8BwD3i6TurV8pIobhFk7GKIvF9koEf6GN0wObFjziUPwfr8YLwRXc+j7N1WCcAJzDL/fz/QXcTgcSnNzc7SOcQgo6qkkwF5sBebuWUSEjWDwPs8miBCj9rBD9C6X6+rq6moQRCIIROzx3Nzchpe5Rtsu3hDFr6HhnSuxbOfD4oUzV9QZnSg/NkKLQMzbPAtkRXOiu7v7J3BEKCsrKxJdFY17BtoeeO2KeYVyeeXDn+l+8PFrR4XimZmZH0tKSl5fW1u7i+FVtLCWyTHy1lB7pJBOqCWzG/DpxEpDoZCvvb39cyhdwXCI1BMqqccaOFs383YqNB4/SGdePiTuR0dH2yorK9txO0/RQyLE5RRTjE3fg813JRI0cPUOnb94M2WNMrF8gvBytBiTk5Nfl5eXf4S99eTl5flBVJw0yrY83mzAZdQuJ5nGblxaXH6VzjwRWlYeDAb9Y2NjnTU1NV/ie41Tny1mpeF4eUwgJvSFygMATrnJxsbGelDko2az2a7KTvjVKaGo2eMCZRfAJ68H5XhzZGTkG+zlcaPRWI5tK4I8mxpJg3reb4BgLJxOssfjseDjbA8W2iDPhGyU6F6mKwaDKHkdxgn3irqWQ4ehUAAeriCsfpxysMXHJROAwpD6p6EkVIymR0hkWJ4BpEOxAekvFMJ68SKeRaj4mefQK+gjJpOJmSgMSuQ9DKotpH3iUAqwdwb+gEfPe2K22+1m7rX7uGeLem/i/dN+Y3DAx//CpIQuyfN2fz92/cP2PwTICwGAShd+AAAAAElFTkSuQmCC";
const pinIconBlack = "/cooperation_jn_trambus/main/assets/pin-black.5712b48b.svg";
const pinIconWhite = "/cooperation_jn_trambus/main/assets/pin-white.c9ce625d.svg";
function getTrambusLineNumber(feature) {
  const lineNumberString = feature.get("li_code");
  return Number(lineNumberString.substr(1, 2));
}
const lineColors = {
  1: fromString("#4338CA"),
  2: fromString("#DB2777"),
  3: fromString("#057857"),
  4: fromString("#9333EA")
};
({
  1: fromString("#A5B4FC"),
  2: fromString("#F9A8D5"),
  3: fromString("#6EE7B7"),
  4: fromString("#C084FC")
});
new Style({
  image: new Icon({
    opacity: 1,
    src: parkingIcon,
    scale: 1
  })
});
function generatePoiStyle(label, distance, is3D, displayDistance) {
  if (displayDistance) {
    label = label + "\n" + distance + "m";
  }
  label = label.replace("'", " ");
  return new VectorStyleItem({
    text: {
      font: is3D ? "bold 14px DM Sans" : "bold 14px DM Sans",
      fill: {
        color: is3D ? "#ffffff" : "#000000",
        width: 2
      },
      stroke: {
        color: is3D ? "#000000" : "#ffffff",
        width: 2
      },
      offsetX: 20,
      offsetY: is3D ? -10 : 0,
      textAlign: "left",
      justify: "left"
    },
    label,
    image: {
      src: is3D ? pinIconWhite : pinIconBlack,
      scale: 1
    }
  });
}
function generatePoiStyleWithoutLabel(is3D) {
  return new VectorStyleItem({
    image: {
      src: is3D ? pinIconWhite : pinIconBlack,
      scale: 1
    }
  });
}
export {
  generatePoiStyle as a,
  generatePoiStyleWithoutLabel as b,
  getTrambusLineNumber as g,
  lineColors as l
};
